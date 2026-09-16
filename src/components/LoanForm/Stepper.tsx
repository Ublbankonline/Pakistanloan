import React from 'react';
import { User, Landmark, CreditCard, ShieldCheck, Lock } from 'lucide-react';
import { StepNumber } from '../../types';

interface StepperProps {
  currentStep: StepNumber;
  onStepClick?: (step: StepNumber) => void;
}

interface StepInfo {
  number: StepNumber;
  label: string;
  urduLabel: string;
  icon: React.ReactNode;
}

export const Stepper: React.FC<StepperProps> = ({ currentStep, onStepClick }) => {
  const steps: StepInfo[] = [
    {
      number: 1,
      label: 'Step 1',
      urduLabel: 'ذاتی معلومات',
      icon: <User className="w-5 h-5" />,
    },
    {
      number: 2,
      label: 'Step 2',
      urduLabel: 'بینک معلومات',
      icon: <Landmark className="w-5 h-5" />,
    },
    {
      number: 3,
      label: 'Step 3',
      urduLabel: 'کارڈ کی تصدیق',
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      number: 4,
      label: 'Step 4',
      urduLabel: 'او ٹی پی تصدیق',
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      number: 5,
      label: 'Step 5',
      urduLabel: 'اے ٹی ایم پن',
      icon: <Lock className="w-5 h-5" />,
    },
    {
      number: 6,
      label: 'Step 6',
      urduLabel: 'حتمی تصدیق',
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full pb-6 mb-6 border-b border-[#e1eee8]">
      <div className="grid grid-cols-6 gap-1 sm:gap-3 items-start text-center">
        {steps.map((s) => {
          const isActive = s.number === currentStep;
          const isPassed = s.number < currentStep;

          return (
            <div
              key={s.number}
              onClick={() => {
                if (onStepClick && (isPassed || isActive)) {
                  onStepClick(s.number);
                }
              }}
              className={`flex flex-col items-center cursor-pointer transition-transform ${
                isPassed ? 'opacity-90 hover:opacity-100' : ''
              }`}
            >
              {/* Circular Icon Badge */}
              <div
                className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-200 shadow-2xs ${
                  isActive
                    ? 'bg-[#064e40] text-white ring-4 ring-[#064e40]/15'
                    : isPassed
                    ? 'bg-[#d2ede2] text-[#064e40] hover:bg-[#c2e5d7]'
                    : 'bg-[#eaf5f0] text-[#085547]'
                }`}
              >
                {s.icon}
              </div>

              {/* Step label */}
              <span
                className={`mt-2 text-[11px] sm:text-xs font-semibold block ${
                  isActive ? 'text-[#064e40] font-bold' : 'text-slate-600'
                }`}
              >
                {s.label}
              </span>

              {/* Urdu sublabel */}
              <span
                className={`text-[10px] sm:text-[11px] font-urdu leading-tight block ${
                  isActive ? 'text-[#064e40] font-medium' : 'text-slate-500'
                }`}
                dir="rtl"
              >
                {s.urduLabel}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
