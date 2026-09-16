import React from 'react';
import { ApplicationFormData } from '../../types';

interface Step1Props {
  data: ApplicationFormData;
  updateData: (fields: Partial<ApplicationFormData>) => void;
  onNext: () => void;
}

export const Step1Personal: React.FC<Step1Props> = ({ data, updateData, onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  // Format CNIC as 12345-1234567-1
  const handleCnicChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 13);
    let formatted = raw;
    if (raw.length > 5 && raw.length <= 12) {
      formatted = `${raw.slice(0, 5)}-${raw.slice(5)}`;
    } else if (raw.length > 12) {
      formatted = `${raw.slice(0, 5)}-${raw.slice(5, 12)}-${raw.slice(12, 13)}`;
    }
    updateData({ cnic: formatted });
  };

  // Format Mobile as 0300-1234567
  const handleMobileChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 11);
    let formatted = raw;
    if (raw.length > 4) {
      formatted = `${raw.slice(0, 4)}-${raw.slice(4)}`;
    }
    updateData({ mobileNo: formatted });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e1ede7] pb-3">
        <div>
          <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#0c3931]">
            Personal Information
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Apni zaati maloomat darj karein
          </p>
        </div>
        <div className="text-right">
          <span className="font-urdu text-lg sm:text-xl font-bold text-[#0c3931]" dir="rtl">
            ذاتی معلومات
          </span>
        </div>
      </div>

      {/* 1. Full Name */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Full Name <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            پورا نام
          </span>
        </div>
        <input
          type="text"
          required
          value={data.fullName}
          onChange={(e) => updateData({ fullName: e.target.value })}
          placeholder="e.g. Ali Khan"
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base"
        />
      </div>

      {/* 2. CNIC */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            CNIC <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            شناختی کارڈ
          </span>
        </div>
        <input
          type="text"
          required
          value={data.cnic}
          onChange={(e) => handleCnicChange(e.target.value)}
          placeholder="12345-1234567-1"
          maxLength={15}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base tracking-wide"
        />
      </div>

      {/* 3. Mobile No */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Mobile No <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            موبائل نمبر
          </span>
        </div>
        <input
          type="tel"
          required
          value={data.mobileNo}
          onChange={(e) => handleMobileChange(e.target.value)}
          placeholder="0300-1234567"
          maxLength={12}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base tracking-wide"
        />
      </div>

      {/* 4. Gender */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Gender <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            جنس
          </span>
        </div>
        <select
          required
          value={data.gender}
          onChange={(e) => updateData({ gender: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base appearance-none cursor-pointer"
        >
          <option value="">Select gender</option>
          <option value="Male">Male (مرد)</option>
          <option value="Female">Female (عورت)</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* 5. Date of Birth */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Date of Birth <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            تاریخ پیدائش
          </span>
        </div>
        <input
          type="date"
          required
          value={data.dateOfBirth}
          onChange={(e) => updateData({ dateOfBirth: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base"
        />
      </div>

      {/* 6. Province */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Province <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            صوبہ
          </span>
        </div>
        <select
          required
          value={data.province}
          onChange={(e) => updateData({ province: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base appearance-none cursor-pointer"
        >
          <option value="">Select province</option>
          <option value="Punjab">Punjab (پنجاب)</option>
          <option value="Sindh">Sindh (سندھ)</option>
          <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa (خیبر پختونخوا)</option>
          <option value="Balochistan">Balochistan (بلوچستان)</option>
          <option value="Islamabad">Islamabad Capital Territory (اسلام آباد)</option>
          <option value="Gilgit-Baltistan">Gilgit-Baltistan (گلگت بلتستان)</option>
          <option value="Azad Kashmir">Azad Jammu & Kashmir (آزاد کشمیر)</option>
        </select>
      </div>

      {/* 7. Address */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 mb-1.5">
          <span>
            Address <span className="text-red-500">*</span>
          </span>
          <span className="font-urdu text-slate-600" dir="rtl">
            پتہ
          </span>
        </div>
        <input
          type="text"
          required
          value={data.address}
          onChange={(e) => updateData({ address: e.target.value })}
          placeholder="House #, Street, Area, City"
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#f0f6f3] border border-[#d2e4db] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#075345]/30 focus:border-[#075345] transition-all text-sm sm:text-base"
        />
      </div>

      {/* Action Buttons */}
      <div className="pt-5 flex items-center justify-between gap-4 border-t border-[#e2efe9]">
        <button
          type="button"
          disabled
          className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-300 text-sm font-medium cursor-not-allowed flex items-center gap-1.5"
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
