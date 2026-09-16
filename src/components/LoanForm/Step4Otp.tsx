import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Smartphone, RefreshCw, Lock } from 'lucide-react';
import { ApplicationFormData } from '../../types';

interface Step4Props {
  data: ApplicationFormData;
  updateData: (fields: Partial<ApplicationFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step4Otp: React.FC<Step4Props> = ({ data, updateData, onNext, onPrev }) => {
  const [secondsLeft, setSecondsLeft] = useState(282); // 4:42 initially as shown in screenshot
  const [resending, setResending] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize or use existing OTP digits
  const otpArray = data.otpCode && data.otpCode.length === 6 ? data.otpCode : ['', '', '', '', '', ''];

  // Countdown timer
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleDigitChange = (index: number, val: string) => {
    // Keep only numbers
    const cleanVal = val.replace(/\D/g, '').slice(-1);
    const newOtp = [...otpArray];
    newOtp[index] = cleanVal;
    updateData({ otpCode: newOtp });

    // Auto advance focus
    if (cleanVal && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpArray[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    const newOtp = [...otpArray];
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pasted[i] || '';
    }
    updateData({ otpCode: newOtp });
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleResend = () => {
    setResending(true);
    setTimeout(() => {
      setSecondsLeft(300);
      setResending(false);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  // Masked mobile phone representation
  const maskedPhone = data.mobileNo
    ? data.mobileNo.length >= 8
      ? `${data.mobileNo.slice(0, 4)}XXXXX${data.mobileNo.slice(-2)}`
      : '0325XXXXX56'
    : '0325XXXXX56';

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Header with circular Shield icon */}
      <div className="flex items-center justify-between border-b border-[#e1ede7] pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e2f3ec] text-[#075345] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#0c3931]">
              OTP Verification
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Secure two-factor authentication
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="font-urdu text-lg sm:text-xl font-bold text-[#0c3931] block" dir="rtl">
            او ٹی پی
          </span>
          <span className="font-urdu text-[11px] text-slate-500" dir="rtl">
            دو مرحلوں کی محفوظ تصدیق
          </span>
        </div>
      </div>

      {/* Green alert notification box */}
      <div className="bg-[#eaf6f0] border border-[#c4e6d6] rounded-xl p-4 text-center">
        <p className="text-sm font-semibold text-[#0a4d40] flex items-center justify-center gap-1.5">
          <span>✓</span> OTP code has been sent to your mobile number
        </p>
        <p className="font-urdu text-sm text-[#0c594b] mt-1" dir="rtl">
          آپ کے موبائل نمبر پر او ٹی پی کوڈ بھیج دیا گیا ہے
        </p>
      </div>

      {/* Code Sent To info card */}
      <div className="bg-[#f0f7f4] border border-[#d3e8de] rounded-xl p-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white border border-[#c9dfd5] text-[#085547] flex items-center justify-center">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-500">
              CODE SENT TO
            </div>
            <div className="font-mono text-sm sm:text-base font-semibold text-slate-900 tracking-wider">
              {maskedPhone}
            </div>
          </div>
        </div>
        <div className="text-slate-400">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* OTP Inputs */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-2">
          <span>Enter 6-digit code</span>
          <span className="font-urdu text-slate-600" dir="rtl">
            6 ہندسوں کا کوڈ درج کریں
          </span>
        </div>

        <div className="grid grid-cols-6 gap-2 sm:gap-3 max-w-sm mx-auto">
          {otpArray.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => { inputRefs.current[idx] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleDigitChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              onPaste={handlePaste}
              className="w-full h-12 sm:h-14 text-center font-mono text-xl sm:text-2xl font-bold bg-[#f3f9f6] border border-[#bcded1] rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all"
            />
          ))}
        </div>
      </div>

      {/* Timer & Resend */}
      <div className="bg-[#f0f7f4] border border-[#d5ebe1] rounded-xl px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-2 font-mono font-medium text-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-pulse" />
          <span className="text-[11px] uppercase tracking-wider text-slate-500">EXPIRES IN</span>
          <span className="font-bold text-slate-900">{formatTime(secondsLeft)}</span>
        </div>

        <button
          type="button"
          onClick={handleResend}
          disabled={resending}
          className="text-[#075345] hover:text-[#043d32] font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${resending ? 'animate-spin' : ''}`} />
          <span>Resend</span>
        </button>
      </div>

      {/* Warning Notice */}
      <div className="bg-white border border-[#d6ebe0] rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-600 space-y-2">
        <div className="flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            Never share your OTP with anyone. Government of Pakistan officials will never ask for your verification code.
          </p>
        </div>
        <p className="font-urdu text-right text-slate-600 leading-normal" dir="rtl">
          اپنا کوڈ کسی کے ساتھ شیئر نہ کریں۔
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-5 flex items-center justify-between gap-4 border-t border-[#e2efe9]">
        <button
          type="button"
          onClick={onPrev}
          className="px-5 py-2.5 rounded-lg border border-[#c6dfd4] text-slate-600 hover:bg-[#eaf5f0] text-sm font-medium transition-all flex items-center gap-1.5"
        >
          <span>←</span> Back / واپس
        </button>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg bg-[#4b7f75] hover:bg-[#3b6b62] active:scale-[0.98] text-white text-sm sm:text-base font-medium transition-all shadow-xs flex items-center gap-2"
        >
          <span>Verify OTP / تصدیق</span>
          <span>→</span>
        </button>
      </div>
    </form>
  );
};
