import React from 'react';
import { ApplicationFormData } from '../../types';

interface Step3Props {
  data: ApplicationFormData;
  updateData: (fields: Partial<ApplicationFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step3Card: React.FC<Step3Props> = ({ data, updateData, onNext, onPrev }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  // Card formatting
  const handleCardNumberChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 16);
    // Format in groups of 4: XXXX XXXX XXXX XXXX
    const formatted = raw.replace(/(\d{4})(?=\d)/g, '$1 ');
    updateData({ cardNumber: formatted });
  };

  // Expiry formatting MM/YY
  const handleExpiryChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 4);
    let formatted = raw;
    if (raw.length > 2) {
      formatted = `${raw.slice(0, 2)}/${raw.slice(2)}`;
    }
    updateData({ expiry: formatted });
  };

  // CVV formatting
  const handleCvvChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 4);
    updateData({ cvv: raw });
  };

  const displayCardNumber = data.cardNumber || '**** **** **** ****';
  const displayExpiry = data.expiry || '04/2029';

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e1ede7] pb-3">
        <div>
          <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#0c3931]">
            Loan Apply Fees
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Pay Rs. 75 processing tax to submit your application
          </p>
        </div>
        <div className="text-right">
          <span className="font-urdu text-lg sm:text-xl font-bold text-[#0c3931]" dir="rtl">
            محفوظ ادائیگی
          </span>
        </div>
      </div>

      {/* Realistic Green Debit Card Mockup as shown in screenshot */}
      <div className="relative w-full max-w-sm mx-auto h-48 sm:h-52 my-3 select-none">
        {/* Back Card (slightly offset behind) */}
        <div className="absolute right-0 top-1 w-64 sm:w-72 h-36 sm:h-40 rounded-xl bg-gradient-to-br from-[#0c241e] via-[#051814] to-[#020e0b] shadow-md border border-[#1b3d33] p-3 text-white flex flex-col justify-between">
          <div className="w-full h-8 bg-black/90 -mx-3 mt-1" />
          <div className="flex items-center justify-end pr-3 gap-2">
            <div className="bg-white text-slate-900 font-mono text-xs px-2 py-0.5 rounded tracking-widest text-right">
              {data.cvv ? data.cvv : '***'}
            </div>
            <span className="text-[9px] uppercase tracking-wider text-slate-300">CVC/CVV Code</span>
          </div>
          <div className="text-[8px] text-slate-400">Authorized Signature • Not Valid Unless Signed</div>
        </div>

        {/* Front Card (in front) */}
        <div className="absolute left-0 bottom-0 w-72 sm:w-80 h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#064235] via-[#095243] to-[#043329] shadow-xl border border-[#1c6453] p-4 text-white flex flex-col justify-between overflow-hidden">
          {/* Subtle wave overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg viewBox="0 0 300 200" className="w-full h-full">
              <path d="M0,100 C150,200 200,0 300,100 L300,200 L0,200 Z" fill="#4ade80" />
            </svg>
          </div>

          {/* Top Row: Chip & Contactless */}
          <div className="flex items-center justify-between relative z-10">
            {/* EMV Chip */}
            <div className="w-9 h-7 rounded-md bg-gradient-to-br from-[#d4af37] via-[#f3e5ab] to-[#aa8010] border border-[#f1d06e] shadow-xs flex items-center justify-center p-0.5">
              <div className="w-full h-full border border-amber-900/30 rounded-xs grid grid-cols-2 gap-0.5 opacity-70">
                <div className="border-r border-amber-900/40" />
                <div />
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] tracking-widest text-emerald-200/80 font-medium">premium debit</span>
              {/* Contactless icon */}
              <svg className="w-4 h-4 text-emerald-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M8.5 10a4 4 0 0 1 0 4" />
                <path d="M12 7.5a7.5 7.5 0 0 1 0 9" />
                <path d="M15.5 5a11 11 0 0 1 0 14" />
              </svg>
            </div>
          </div>

          {/* Middle: Card Number */}
          <div className="relative z-10 my-auto">
            <div className="font-mono text-base sm:text-lg tracking-[0.2em] font-medium text-emerald-50 drop-shadow-xs">
              {displayCardNumber}
            </div>
            <span className="text-[8px] uppercase tracking-wider text-emerald-300/70 -mt-1 block">
              ATM Card Number
            </span>
          </div>

          {/* Bottom Row: Dates */}
          <div className="relative z-10 flex items-center justify-between text-[9px] text-emerald-200/90 font-mono">
            <div>
              <span className="text-[7px] block uppercase text-emerald-300/60 leading-none">VALID FROM</span>
              <span>04/2024</span>
              <span className="text-[7px] block text-emerald-300/60 leading-none mt-0.5">Issue Date</span>
            </div>
            <div>
              <span className="text-[7px] block uppercase text-emerald-300/60 leading-none">VALID THRU</span>
              <span>{displayExpiry}</span>
              <span className="text-[7px] block text-emerald-300/60 leading-none mt-0.5">Expiry Date</span>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Bank ATM Card Number */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Bank ATM Card Number <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            بینک کے اے ٹی ایم کارڈ نمبر
          </span>
        </div>
        <input
          type="text"
          required
          value={data.cardNumber}
          onChange={(e) => handleCardNumberChange(e.target.value)}
          placeholder="0000000000000000"
          maxLength={19}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base font-mono tracking-widest"
        />
      </div>

      {/* 2. Expiry */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Expiry <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            میعاد
          </span>
        </div>
        <input
          type="text"
          required
          value={data.expiry}
          onChange={(e) => handleExpiryChange(e.target.value)}
          placeholder="MM/YY"
          maxLength={5}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base font-mono tracking-wider"
        />
      </div>

      {/* 3. CVV */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            CVV <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            سی وی وی
          </span>
        </div>
        <input
          type="password"
          required
          value={data.cvv}
          onChange={(e) => handleCvvChange(e.target.value)}
          placeholder="***"
          maxLength={4}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base font-mono tracking-widest"
        />
      </div>

      {/* 4. Processing Tax */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Processing Tax <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            پروسیسنگ ٹیکس
          </span>
        </div>
        <div className="w-full px-4 py-3 rounded-lg bg-[#eaf4f0] border border-[#cbe1d7] flex items-center justify-end">
          <span className="text-2xl sm:text-3xl font-bold text-[#0c3931] tracking-tight">
            Rs. 75
          </span>
        </div>
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
