import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, FileText } from 'lucide-react';
import { ApplicationFormData } from '../../types';

interface SuccessModalProps {
  data: ApplicationFormData;
  referenceNo: string;
  onReset: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ data, referenceNo, onReset }) => {
  return (
    <div className="py-6 px-2 sm:px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#dcfce7] text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
        <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
      </div>

      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e2f3ec] text-[#064e40] text-xs font-semibold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          Application Verified & Received
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#0c3931]">
          Darkhwast Jamah Ho Gayi Hai
        </h3>
        <p className="font-urdu text-base text-[#0c4b3f] mt-1" dir="rtl">
          آپ کی قرض کی درخواست کامیابی سے موصول ہو چکی ہے
        </p>
      </div>

      {/* Reference Card */}
      <div className="bg-[#f0f7f4] border border-[#cbe1d7] rounded-xl p-4 text-left max-w-md mx-auto space-y-3">
        <div className="flex items-center justify-between border-b border-[#d8ebe1] pb-2.5">
          <span className="text-xs text-slate-500 font-medium">Tracking Reference No</span>
          <span className="font-mono text-base font-bold text-[#064e40]">{referenceNo}</span>
        </div>
        <div className="flex items-center justify-between border-b border-[#d8ebe1] pb-2.5">
          <span className="text-xs text-slate-500 font-medium">Applicant Name</span>
          <span className="text-sm font-semibold text-slate-900">{data.fullName || 'Applicant'}</span>
        </div>
        <div className="flex items-center justify-between border-b border-[#d8ebe1] pb-2.5">
          <span className="text-xs text-slate-500 font-medium">CNIC Number</span>
          <span className="font-mono text-sm text-slate-800">{data.cnic || 'N/A'}</span>
        </div>
        <div className="flex items-center justify-between border-b border-[#d8ebe1] pb-2.5">
          <span className="text-xs text-slate-500 font-medium">Requested Amount</span>
          <span className="font-bold text-[#075345] text-sm">{data.loanAmount || 'PKR 10 Lakh - 3 Crore'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">Status</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            <Clock className="w-3 h-3" /> Under 48h Review
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
        Government of Pakistan representative will contact you on <strong className="text-slate-900">{data.mobileNo || 'your mobile number'}</strong> for the final sanction and disbursement process.
      </p>

      <button
        onClick={onReset}
        className="px-6 py-2.5 rounded-lg bg-[#075345] hover:bg-[#053e34] text-white text-sm font-semibold transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer"
      >
        <FileText className="w-4 h-4" />
        <span>Submit Another Application</span>
      </button>
    </div>
  );
};
