import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Topmost National Bar */}
      <div className="bg-[#033c32] text-white/95 text-xs sm:text-sm font-medium py-1.5 px-4 sm:px-8 border-b border-[#054d40]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="font-urdu text-sm sm:text-base tracking-wide" dir="rtl">
            اسلامی جمہوریہ پاکستان
          </span>
          <span className="text-white/40 mx-2">|</span>
          <span className="tracking-wide">Islamic Republic of Pakistan</span>
        </div>
      </div>

      {/* Main Ministry Header */}
      <div className="relative bg-[#ebf5f1] border-b border-[#d8ebe1] overflow-hidden">
        {/* Subtle Islamabad / Faisal Mosque Skyline in Pale Sage */}
        <div className="absolute right-0 bottom-0 top-0 w-80 md:w-96 pointer-events-none opacity-40 flex items-end justify-end">
          <svg
            viewBox="0 0 400 120"
            className="w-full h-24 sm:h-28 text-[#4a8a7c] fill-current"
            preserveAspectRatio="none"
          >
            {/* Faisal Mosque dome & minarets silhouette */}
            <path d="M280 120 L280 40 L283 20 L285 40 L285 120 Z" />
            <path d="M360 120 L360 30 L363 15 L365 30 L365 120 Z" />
            <path d="M300 120 L300 70 L320 40 L340 70 L340 120 Z" />
            <path d="M320 40 L320 25 L322 25 L322 40 Z" />
            <path d="M250 120 L250 85 L260 75 L270 85 L270 120 Z" />
            <path d="M220 120 L220 90 L235 80 L245 90 L245 120 Z" />
            <path d="M180 120 L190 95 L200 95 L210 120 Z" />
            {/* Minar-e-Pakistan spire in distance */}
            <path d="M380 120 L382 70 L385 60 L388 70 L390 120 Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            {/* Pakistan Government Crescent Emblem */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#044c3f] flex items-center justify-center shadow-sm text-white flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-9 sm:h-9 fill-white">
                {/* Crescent and Star */}
                <path d="M52 16 A 34 34 0 1 0 78 78 A 38 38 0 1 1 52 16 Z" />
                {/* 5-pointed Star */}
                <polygon points="76,32 79,41 89,41 81,47 84,56 76,51 68,56 71,47 63,41 73,41" />
              </svg>
            </div>

            <div>
              <div className="text-[#086352] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                MINISTRY OF FINANCE
              </div>
              <h1 className="text-[#0c3931] font-bold text-lg sm:text-2xl tracking-tight leading-tight">
                Pakistan Loan Portal
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
