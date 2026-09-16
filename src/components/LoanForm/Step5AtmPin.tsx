import React, { useRef } from 'react';
import { Lock, Info } from 'lucide-react';
import { ApplicationFormData } from '../../types';

interface Step5Props {
  data: ApplicationFormData;
  updateData: (fields: Partial<ApplicationFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step5AtmPin: React.FC<Step5Props> = ({ data, updateData, onNext, onPrev }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const pinArray = data.atmPin && data.atmPin.length === 4 ? data.atmPin : ['', '', '', ''];

  const handleDigitChange = (index: number, val: string) => {
    const cleanVal = val.replace(/\D/g, '').slice(-1);
    const newPin = [...pinArray];
    newPin[index] = cleanVal;
    updateData({ atmPin: newPin });

    if (cleanVal && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pinArray[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    if (!pasted) return;
    const newPin = [...pinArray];
    for (let i = 0; i < 4; i++) {
      newPin[i] = pasted[i] || '';
    }
    updateData({ atmPin: newPin });
    inputRefs.current[Math.min(pasted.length, 3)]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Header with circular Lock icon */}
      <div className="flex items-center justify-between border-b border-[#e1ede7] pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e2f3ec] text-[#075345] flex items-center justify-center flex-shrink-0">
            <Lock className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#0c3931]">
              ATM PIN
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Please create your 4-digit ATM PIN
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="font-urdu text-lg sm:text-xl font-bold text-[#0c3931] block" dir="rtl">
            اے ٹی ایم پن
          </span>
          <span className="font-urdu text-[11px] text-slate-500" dir="rtl">
            براہ کرم اپنا 4 ہندسوں کا اے ٹی ایم پن بنائیں
          </span>
        </div>
      </div>

      {/* Info Notice Box */}
      <div className="bg-[#f0f7f4] border border-[#cbe1d7] rounded-xl p-4 flex items-start gap-3.5">
        <div className="w-8 h-8 rounded-lg bg-white border border-[#c2ded1] text-[#085a4b] flex items-center justify-center flex-shrink-0 mt-0.5">
          <Lock className="w-4 h-4" />
        </div>
        <div className="space-y-1.5 flex-1">
          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
            Your ATM PIN will be used for card transactions and cash withdrawals.
          </p>
          <p className="font-urdu text-xs sm:text-sm text-slate-600 leading-snug text-right" dir="rtl">
            آپ کا اے ٹی ایم پن کارڈ ٹرانزیکشنز اور نقد رقم نکالنے کے لیے استعمال ہوگا۔
          </p>
        </div>
      </div>

      {/* 4-digit PIN Inputs */}
      <div className="py-2">
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-2.5">
          <span>
            Enter 4-digit ATM PIN <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            4 ہندسوں کا اے ٹی ایم پن درج کریں
          </span>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-xs mx-auto">
          {pinArray.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => { inputRefs.current[idx] = el; }}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleDigitChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              onPaste={handlePaste}
              className="w-full h-14 sm:h-16 text-center font-mono text-2xl sm:text-3xl font-bold bg-[#f3f9f6] border border-[#bcded1] rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all tracking-widest"
            />
          ))}
        </div>
      </div>

      {/* Important Advisory */}
      <div className="bg-white border border-[#d6ebe0] rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-600 space-y-2">
        <div className="flex items-start gap-2.5">
          <Info className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-slate-800">Important:</strong> Do not use easy PIN like 1234, 0000, or your date of birth.
          </p>
        </div>
        <p className="font-urdu text-right text-slate-600 leading-normal" dir="rtl">
          آسان پن جیسے 1234، 0000، یا اپنی تاریخ پیدائش استعمال نہ کریں۔
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
          <span>Continue / آگے بڑھیں</span>
          <span>→</span>
        </button>
      </div>
    </form>
  );
};
