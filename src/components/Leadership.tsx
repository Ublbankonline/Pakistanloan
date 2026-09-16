import React from 'react';

export const Leadership: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e7f4ee] to-[#edf6f2] py-8 sm:py-12 px-4 sm:px-8 border-b border-[#d8ebe1]">
      {/* Background Faisal Mosque silhouette */}
      <div className="absolute top-0 right-0 w-80 sm:w-96 pointer-events-none opacity-30">
        <svg viewBox="0 0 350 140" className="w-full h-auto text-[#3f8374] fill-current">
          <path d="M160 140 L160 50 L164 25 L168 50 L168 140 Z" />
          <path d="M260 140 L260 40 L264 15 L268 40 L268 140 Z" />
          <path d="M185 140 L185 90 L214 55 L243 90 L243 140 Z" />
          <path d="M214 55 L214 35 L216 35 L216 55 Z" />
          <path d="M290 140 L290 80 L300 70 L310 80 L310 140 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="text-[#075f50] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              LEADERSHIP
            </span>
            <span className="w-12 h-0.5 bg-[#4c897c]/40 rounded-full" />
          </div>
          <h2 className="text-[#0d3931] font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            A vision for a{' '}
            <span className="italic text-[#095446]">prosperous Pakistan.</span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="space-y-4 sm:space-y-5">
          {/* Leader 1: Muhammad Shehbaz Sharif */}
          <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-[#d6ebe0] shadow-xs flex flex-col sm:flex-row items-center gap-5">
            {/* Portrait with Pakistan Flag */}
            <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden flex-shrink-0 bg-[#023c31] border border-[#b8dfce] shadow-inner">
              <img
                src="/assets/shehbaz_sharif.jpg"
                alt="Muhammad Shehbaz Sharif"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback if local image fails
                  (e.target as HTMLImageElement).src =
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shahbaz_Sharif_in_2022_%28cropped%29.jpg/500px-Shahbaz_Sharif_in_2022_%28cropped%29.jpg';
                }}
              />
              {/* Subtle Flag badge overlay */}
              <div className="absolute top-1.5 left-1.5 bg-[#033c32]/85 text-white p-1 rounded-sm shadow-xs">
                <svg viewBox="0 0 60 40" className="w-5 h-3.5">
                  <rect width="18" height="40" fill="#ffffff" />
                  <rect x="18" width="42" height="40" fill="#01411c" />
                  <circle cx="39" cy="20" r="10" fill="#ffffff" />
                  <circle cx="42" cy="18" r="9" fill="#01411c" />
                  <polygon points="41,12 43,18 49,18 44,22 46,27 41,24 36,27 38,22 33,18 39,18" fill="#ffffff" />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="text-[#086352] text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-1">
                PRIME MINISTER OF PAKISTAN
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-slate-900 mb-2">
                Muhammad Shehbaz Sharif
              </h3>
              <div className="w-10 h-0.5 bg-[#096352] rounded-full mb-3 mx-auto sm:mx-0" />
              <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed font-serif">
                &ldquo;Har Pakistani ko maaliyati asani aur khud mukhtari milni chahiye.&rdquo;
              </p>
            </div>
          </div>

          {/* Leader 2: Maryam Nawaz Sharif */}
          <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-[#d6ebe0] shadow-xs flex flex-col-reverse sm:flex-row items-center gap-5">
            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="text-[#086352] text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-1">
                CHIEF MINISTER • PUNJAB
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-slate-900 mb-2">
                Maryam Nawaz Sharif
              </h3>
              <div className="w-10 h-0.5 bg-[#096352] rounded-full mb-3 mx-auto sm:mx-0" />
              <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed font-serif">
                &ldquo;Naujawan aur chote karobari hazraat ki maali madad hamari tarjeeh hai.&rdquo;
              </p>
            </div>

            {/* Portrait */}
            <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden flex-shrink-0 bg-[#023c31] border border-[#b8dfce] shadow-inner">
              <img
                src="/assets/maryam_nawaz.jpg"
                alt="Maryam Nawaz Sharif"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Maryam_Nawaz_Sharif.jpg/500px-Maryam_Nawaz_Sharif.jpg';
                }}
              />
              <div className="absolute top-1.5 left-1.5 bg-[#033c32]/85 text-white p-1 rounded-sm shadow-xs">
                <svg viewBox="0 0 60 40" className="w-5 h-3.5">
                  <rect width="18" height="40" fill="#ffffff" />
                  <rect x="18" width="42" height="40" fill="#01411c" />
                  <circle cx="39" cy="20" r="10" fill="#ffffff" />
                  <circle cx="42" cy="18" r="9" fill="#01411c" />
                  <polygon points="41,12 43,18 49,18 44,22 46,27 41,24 36,27 38,22 33,18 39,18" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
