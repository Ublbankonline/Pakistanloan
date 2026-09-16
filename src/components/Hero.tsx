import React from 'react';
import { Layers, Clock, ShieldCheck, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f3f9f6] via-[#edf6f2] to-[#e7f4ee] pt-6 pb-8 sm:pt-9 sm:pb-12 px-4 sm:px-8 border-b border-[#d7ece1]">
      {/* Decorative Pakistani Flag Swirl / Crescent in top right corner */}
      <div className="absolute top-2 right-0 sm:right-4 w-48 h-48 sm:w-64 sm:h-64 pointer-events-none opacity-90">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="flagGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#085244" />
              <stop offset="50%" stopColor="#044136" />
              <stop offset="100%" stopColor="#022e26" />
            </linearGradient>
            <linearGradient id="flagWhiteRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d4ebe2" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Waving stylized flag ribbon */}
          <path
            d="M50,20 C110,-10 180,30 200,100 C160,80 130,50 60,60 Z"
            fill="url(#flagWhiteRibbon)"
          />
          <path
            d="M70,30 C130,-5 190,40 200,120 C180,95 140,65 70,75 Z"
            fill="url(#flagGreenGrad)"
          />
          
          {/* Crescent and Star on ribbon */}
          <g transform="translate(145, 65) scale(0.65)">
            <path
              d="M32 6 A 26 26 0 1 0 54 52 A 28 28 0 1 1 32 6 Z"
              fill="#ffffff"
            />
            <polygon
              points="52,20 54,26 61,26 56,30 58,36 52,32 46,36 48,30 43,26 50,26"
              fill="#ffffff"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#054a3e] text-white text-[11px] sm:text-xs font-semibold tracking-wide shadow-xs mb-4">
          <span>PM YOUTH E-ASAN LOAN SCHEME • 2026</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[#0d3931] font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-4">
          Apna Karobar,<br />
          <span className="italic font-serif-display font-semibold text-[#095446]">
            Apna Mustaqbil.
          </span>
        </h2>

        {/* Subtitle Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mb-7">
          Government of Pakistan ke asaan qist programme ke zariye{' '}
          <strong className="text-[#064e40] font-bold">PKR 10 Lakh se 3 Crore</strong> tak ka
          qarz — kam markup, tez approval, sirf 48 ghante mein.
        </p>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Card 01 */}
          <div className="bg-white/95 rounded-2xl p-4 border border-[#d8ebe2] shadow-xs flex items-center gap-4 transition-all hover:border-[#b5decb]">
            <div className="w-12 h-12 rounded-xl bg-[#eaf5f0] text-[#075345] flex items-center justify-center flex-shrink-0">
              <Layers className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block -mb-0.5">01</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                10L – 3 Cr
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Zaroorat ke mutabiq qarz limit
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-white/95 rounded-2xl p-4 border border-[#d8ebe2] shadow-xs flex items-center gap-4 transition-all hover:border-[#b5decb]">
            <div className="w-12 h-12 rounded-xl bg-[#eaf5f0] text-[#075345] flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block -mb-0.5">02</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                48 Hours
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Tez tareen approval processing
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-white/95 rounded-2xl p-4 border border-[#d8ebe2] shadow-xs flex items-center gap-4 transition-all hover:border-[#b5decb]">
            <div className="w-12 h-12 rounded-xl bg-[#eaf5f0] text-[#075345] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block -mb-0.5">03</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Secure
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Government certified portal
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div className="bg-white/95 rounded-2xl p-4 border border-[#d8ebe2] shadow-xs flex items-center gap-4 transition-all hover:border-[#b5decb]">
            <div className="w-12 h-12 rounded-xl bg-[#eaf5f0] text-[#075345] flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block -mb-0.5">04</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Sab ke liye
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Karobar, mulazim aur kisan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
