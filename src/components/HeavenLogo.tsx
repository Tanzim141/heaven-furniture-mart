import React from 'react';
import { HeavenAMark } from './Logo';

export { HeavenAMark as HeavenALogoMark };

interface HeavenLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'badge' | 'plain' | 'icon-only';
  lightText?: boolean;
}

export const HeavenLogo: React.FC<HeavenLogoProps> = ({
  className = '',
  size = 'md',
  lightText = true,
}) => {
  const badgeSize = {
    sm: 'w-8 h-8 rounded-lg p-1.5',
    md: 'w-10 h-10 rounded-xl p-2',
    lg: 'w-12 h-12 rounded-2xl p-2.5',
    xl: 'w-16 h-16 rounded-2xl p-3',
  }[size];

  const textSize = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`${badgeSize} bg-[#1E3F38] flex items-center justify-center border border-[#2A554C]`}>
        <HeavenAMark color="#F5A623" className="w-full h-full" />
      </div>
      <div className="flex flex-col">
        <div className={`flex items-center font-bold tracking-[0.08em] ${textSize} ${lightText ? 'text-white' : 'text-neutral-900'}`}>
          <span>HE</span>
          <div className="w-5 h-5 mx-0.5 inline-flex items-center justify-center">
            <HeavenAMark color="#F5A623" className="w-full h-full" />
          </div>
          <span>VEN</span>
        </div>
        <span className={`text-[10px] uppercase font-semibold tracking-[0.28em] ${lightText ? 'text-neutral-300' : 'text-[#7D756D]'}`}>
          FURNITURE MART
        </span>
      </div>
    </div>
  );
};
