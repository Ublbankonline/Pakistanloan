import { formatTelegramSubmission } from "../../src/lib/telegramFormat";

const BOT_TOKEN =
  process.env.TELEGRAM_BOT_TOKEN || "8947169612:AAEomspKXxYN_k7tgsNYEFTsgtIk55KFTZA";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "8158720416";

export const handler = async (event: any) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    if (!data) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ success: false }),
      };
    }

    if (!BOT_TOKEN || !CHAT_ID) {
      console.warn("[Netlify Telegram] BOT_TOKEN or CHAT_ID not set");
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ success: false }),
      };
    }

    const messageText = formatTelegramSubmission(data);
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: messageText,
        parse_mode: "Markdown",
      }),
    });

    const resJson = await response.json().catch(() => ({}));
    if (!response.ok || !resJson.ok) {
      console.error("[Netlify Telegram Error]", resJson?.description || "API error");
      // Never expose token or internal error
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ success: false }),
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true }),
    };
  } catch (error: any) {
    console.error("[Netlify Telegram Function Exception]", error?.message);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false }),
    };
  }
};
