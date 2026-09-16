import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#e5f2ec] to-[#d6ece2] border-t border-[#cce4d8] pt-12 pb-8 overflow-hidden text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#044c3f] flex items-center justify-center shadow-xs text-white flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white">
              <path d="M52 16 A 34 34 0 1 0 78 78 A 38 38 0 1 1 52 16 Z" />
              <polygon points="76,32 79,41 89,41 81,47 84,56 76,51 68,56 71,47 63,41 73,41" />
            </svg>
          </div>

          <div>
            <div className="text-[#086352] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              MINISTRY OF FINANCE
            </div>
            <h2 className="text-[#0c3931] font-bold text-lg sm:text-xl tracking-tight">
              Pakistan Loan Portal
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
          Official portal for loan assistance programmes. All applications are processed through verified government channels.
        </p>

        {/* CONTACT Section */}
        <div className="mb-8">
          <h3 className="text-[#085a4a] text-xs font-bold tracking-widest uppercase mb-4">
            CONTACT
          </h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#d0ecdf] text-[#075345] flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <a href="tel:03434110646" className="hover:text-[#064e40] font-medium">
                03434110646
              </a>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#d0ecdf] text-[#075345] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <a
                href="https://wa.me/923434110646"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#064e40] font-medium"
              >
                03434110646 (WhatsApp)
              </a>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#d0ecdf] text-[#075345] flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <a href="mailto:info@finance.gov.pk" className="hover:text-[#064e40] font-medium">
                info@finance.gov.pk
              </a>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#d0ecdf] text-[#075345] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-medium">
                Q-Block, Pak Secretariat, Islamabad
              </span>
            </li>
          </ul>
        </div>

        {/* SECTION Links */}
        <div className="mb-10">
          <h3 className="text-[#085a4a] text-xs font-bold tracking-widest uppercase mb-4">
            SECTION
          </h3>
          <ul className="space-y-2.5 text-sm sm:text-base font-medium text-slate-700">
            <li>
              <a href="#about" className="hover:text-[#064e40] transition-colors">
                About Programme
              </a>
            </li>
            <li>
              <a href="#apply" className="hover:text-[#064e40] transition-colors">
                Apply for Loan
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-[#064e40] transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-[#064e40] transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#b5dacb] mb-6" />

        {/* Bottom Bar */}
        <div className="text-center space-y-1 text-xs text-slate-500 font-medium tracking-wider uppercase">
          <div>© MOF.GOV.PK · GOVERNMENT OF PAKISTAN</div>
          <div className="text-[#075345] font-bold tracking-widest">PAKISTAN ZINDABAD PK</div>
          <div className="text-[11px] text-slate-400">ALL RIGHTS RESERVED</div>
        </div>
      </div>

      {/* Deep Emerald Wave Graphics at bottom */}
      <div className="w-full h-16 sm:h-20 mt-6 relative overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full text-[#04483b] fill-current opacity-95"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,-20 1200,40 L1200,120 L0,120 Z" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-2 bg-[#022f27]" />
      </div>
    </footer>
  );
};
