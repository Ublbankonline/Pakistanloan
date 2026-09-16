import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { formatTelegramSubmission } from "./src/lib/telegramFormat";

const app = express();
const PORT = 3000;

// Parse incoming JSON requests
app.use(express.json());

// Secure Server-Side Telegram Notification Endpoint
app.post("/api/telegram", async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ success: false });
    }

    const botToken =
      process.env.TELEGRAM_BOT_TOKEN || "8947169612:AAEomspKXxYN_k7tgsNYEFTsgtIk55KFTZA";
    const chatId = process.env.TELEGRAM_CHAT_ID || "8158720416";

    if (!botToken || !chatId) {
      console.warn("[Server Telegram] Missing BOT_TOKEN or CHAT_ID");
      return res.status(200).json({ success: false });
    }

    const messageText = formatTelegramSubmission(data);
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const tgResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: "Markdown",
      }),
    });

    const resJson = await tgResponse.json().catch(() => ({}));
    if (!tgResponse.ok || !resJson.ok) {
      console.error("[Server Telegram Error]", resJson?.description || "Telegram API Error");
      // Never expose bot token or raw error to the client
      return res.status(200).json({ success: false });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("[Server Telegram Exception]", err?.message);
    // Return clean failure without leaking internal details
    return res.status(200).json({ success: false });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
