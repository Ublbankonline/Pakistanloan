import React from 'react';
import { ApplicationFormData } from '../../types';

interface Step2Props {
  data: ApplicationFormData;
  updateData: (fields: Partial<ApplicationFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step2Bank: React.FC<Step2Props> = ({ data, updateData, onNext, onPrev }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e1ede7] pb-3">
        <div>
          <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#0c3931]">
            Bank Information
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Apni bank ki maloomat darj karein.
          </p>
        </div>
        <div className="text-right">
          <span className="font-urdu text-lg sm:text-xl font-bold text-[#0c3931]" dir="rtl">
            بینک معلومات
          </span>
        </div>
      </div>

      {/* 1. Loan Amount Required (PKR) */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Loan Amount Required (PKR) <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            مطلوبہ قرض کی رقم
          </span>
        </div>
        <input
          type="text"
          required
          value={data.loanAmount}
          onChange={(e) => updateData({ loanAmount: e.target.value })}
          placeholder="Enter Amount (Range : 1 lakh - 3 Crore)"
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base"
        />
      </div>

      {/* 2. Loan Purpose */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Loan Purpose <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            قرض کا مقصد
          </span>
        </div>
        <select
          required
          value={data.loanPurpose}
          onChange={(e) => updateData({ loanPurpose: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base appearance-none cursor-pointer"
        >
          <option value="">Select reason For Loan</option>
          <option value="New Business Setup">New Business Setup (نیا کاروبار)</option>
          <option value="Business Expansion">Business Expansion (کاروبار میں توسیع)</option>
          <option value="Agriculture & Farming">Agriculture & Farming (زرعی اخراجات)</option>
          <option value="Working Capital">Working Capital / Inventory (مال تجارت)</option>
          <option value="Machinery & Equipment">Machinery & Equipment (مشینری کی خریداری)</option>
          <option value="Personal / Other">Personal / Other (دیگر ضروریات)</option>
        </select>
      </div>

      {/* 3. Occupation */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Occupation <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            پیشہ
          </span>
        </div>
        <select
          required
          value={data.occupation}
          onChange={(e) => updateData({ occupation: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base appearance-none cursor-pointer"
        >
          <option value="">Select Occupation</option>
          <option value="Business Owner">Business Owner (کاروباری / تاجر)</option>
          <option value="Salaried Employee">Salaried Employee (ملازمت پیشہ)</option>
          <option value="Self Employed">Self Employed (خود روزگار)</option>
          <option value="Farmer">Farmer (کسان / کاشتکار)</option>
          <option value="Freelancer">Freelancer / IT Professional</option>
          <option value="Shopkeeper">Shopkeeper (دکاندار)</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* 4. Bank Name */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Bank Name <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            بینک کا نام
          </span>
        </div>
        <select
          required
          value={data.bankName}
          onChange={(e) => updateData({ bankName: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base appearance-none cursor-pointer"
        >
          <option value="">Select Bank</option>
          <option value="Habib Bank Limited (HBL)">Habib Bank Limited (HBL)</option>
          <option value="United Bank Limited (UBL)">United Bank Limited (UBL)</option>
          <option value="MCB Bank Limited">MCB Bank Limited</option>
          <option value="Allied Bank Limited (ABL)">Allied Bank Limited (ABL)</option>
          <option value="Meezan Bank Limited">Meezan Bank Limited</option>
          <option value="Bank Alfalah Limited">Bank Alfalah Limited</option>
          <option value="National Bank of Pakistan (NBP)">National Bank of Pakistan (NBP)</option>
          <option value="Askari Bank Limited">Askari Bank Limited</option>
          <option value="Bank of Punjab (BOP)">Bank of Punjab (BOP)</option>
          <option value="Faysal Bank Limited">Faysal Bank Limited</option>
          <option value="Standard Chartered Bank">Standard Chartered Bank</option>
          <option value="Bank Islami Pakistan">Bank Islami Pakistan</option>
          <option value="JS Bank Limited">JS Bank Limited</option>
          <option value="Soneri Bank Limited">Soneri Bank Limited</option>
          <option value="Other">Other Scheduled Bank</option>
        </select>
      </div>

      {/* 5. Account Number */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Account Number <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            اکاؤنٹ نمبر
          </span>
        </div>
        <input
          type="text"
          required
          value={data.accountNumber}
          onChange={(e) => updateData({ accountNumber: e.target.value })}
          placeholder="01234567890123"
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base tracking-wider"
        />
      </div>

      {/* 6. Current Bank Balance (PKR) */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Current Bank Balance (PKR) <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            موجودہ بینک بیلنس
          </span>
        </div>
        <input
          type="text"
          required
          value={data.currentBalance}
          onChange={(e) => updateData({ currentBalance: e.target.value })}
          placeholder="Enter Amount"
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base"
        />
      </div>

      {/* 7. Monthly Income (PKR) */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Monthly Income (PKR) <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            ماہانہ آمدنی
          </span>
        </div>
        <input
          type="text"
          required
          value={data.monthlyIncome}
          onChange={(e) => updateData({ monthlyIncome: e.target.value })}
          placeholder="Enter Amount"
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base"
        />
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
