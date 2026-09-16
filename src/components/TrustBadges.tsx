import React from 'react';
import { ShieldCheck, Banknote, Shield, Globe, Clock } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pt-8 pb-4">
      {/* 5 Trust Indicators Container */}
      <div className="bg-[#daf0e7]/70 border border-[#bee2d3] rounded-2xl p-4 sm:p-5 shadow-xs mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 sm:gap-2">
          {/* Item 1 */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#c9e8dc] text-[#064e40] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-[#0a4d40] uppercase leading-tight">
              GOVERNMENT VERIFIED
            </span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#c9e8dc] text-[#064e40] flex items-center justify-center flex-shrink-0">
              <Banknote className="w-4 h-4 stroke-[2.2]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-[#0a4d40] uppercase leading-tight">
              ZERO ADVANCE FEE
            </span>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#c9e8dc] text-[#064e40] flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 stroke-[2.2]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-[#0a4d40] uppercase leading-tight">
              STATE BANK REGULATED
            </span>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#c9e8dc] text-[#064e40] flex items-center justify-center flex-shrink-0">
              <Globe className="w-4 h-4 stroke-[2.2]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-[#0a4d40] uppercase leading-tight">
              100% ONLINE
            </span>
          </div>

          {/* Item 5 */}
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1 justify-center sm:justify-start">
            <div className="w-7 h-7 rounded-full bg-[#c9e8dc] text-[#064e40] flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 stroke-[2.2]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-[#0a4d40] uppercase leading-tight">
              48H APPROVAL
            </span>
          </div>
        </div>
      </div>

      {/* Introduction text */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-[#0d3931] font-serif-display text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          Apni interest register karein
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Yeh chhota sa form ek representative ko aap se rabta karne deta hai jo asal application
          mein rehnumai karega. Sirf basic contact aur interest ki maloomat — kabhi bhi CNIC, bank
          ya card details nahi.
        </p>

        {/* Divider */}
        <div className="my-7 flex items-center justify-center gap-3">
          <div className="h-px bg-[#b8ddd0] w-16 sm:w-28" />
          <span className="text-[#075f50] text-[11px] font-bold tracking-widest uppercase">
            APPLICATION
          </span>
          <div className="h-px bg-[#b8ddd0] w-16 sm:w-28" />
        </div>

        {/* Form Title & Subtitle */}
        <h3 className="text-[#0d3931] font-serif-display text-2xl sm:text-3xl font-bold tracking-tight mb-1">
          Loan application form
        </h3>
        <p className="text-slate-600 text-sm">
          6 asaan steps mein apni darkhwast jama karwayein.
        </p>
      </div>
    </div>
  );
};
