import React from 'react';

interface LogoProps {
  className?: string;
  lightText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  hideBadge?: boolean;
}

/**
 * Pixel-perfect SVG Vector Logomark for the Heaven Furniture Mart stylized "A".
 * Matches the uploaded brand asset:
 * - Rounded top arch
 * - Symmetrical architectural A-frame legs
 * - Left and right cantilevered table/bench crossbar extensions
 * - Inner triangular counter
 */
export const HeavenAMark: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-full',
  color = '#F5A623',
}) => {
  return (
    <svg
      viewBox="0 0 100 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M 50 4
           C 42.5 4, 36 9.5, 32 19
           L 21.5 40
           L 8 40
           C 6.3 40, 5.5 42, 6.7 43.2
           L 11.5 48
           C 12.5 49, 13.8 49.5, 15.2 49.5
           L 19.5 49.5
           L 10.5 73.5
           C 9.8 75.3, 11.2 77, 13.2 77
           L 26.5 77
           C 27.8 77, 29 76.1, 29.5 74.8
           L 35.5 59.5
           L 64.5 59.5
           L 70.5 74.8
           C 71 76.1, 72.2 77, 73.5 77
           L 86.8 77
           C 88.8 77, 90.2 75.3, 89.5 73.5
           L 80.5 49.5
           L 84.8 49.5
           C 86.2 49.5, 87.5 49, 88.5 48
           L 93.3 43.2
           C 94.5 42, 93.7 40, 92 40
           L 78.5 40
           L 68 19
           C 64 9.5, 57.5 4, 50 4 Z

           M 50 18
           C 53 18, 55.5 20.5, 57.5 25
           L 63.5 40.5
           L 36.5 40.5
           L 42.5 25
           C 44.5 20.5, 47 18, 50 18 Z"
        fill={color}
      />
    </svg>
  );
};

/**
 * Official Heaven Furniture Mart Logo extracted from the uploaded brand asset (30.png).
 * Features:
 * - Exact source asset typography and proportions from 30.png
 * - Iconic golden "A" with architectural arch and horizontal cantilevered crossbar
 * - Crisp, clean WHITE background
 * - Perfect vertical alignment and sizing matching the Navbar and Footer
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Height sizing to match navbar proportions without pushing navigation links
  const heightClass = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-9 md:h-9.5',
    lg: 'h-10 sm:h-11 md:h-12',
  }[size];

  return (
    <div
      id="navbar-brand-logo"
      className={`inline-flex items-center select-none group cursor-pointer ${className}`}
      title="Heaven Furniture Mart"
    >
      <div className="bg-white rounded-lg px-2 py-1 shadow-sm border border-neutral-100 transition-all duration-200 group-hover:shadow group-hover:scale-[1.02] flex items-center justify-center">
        <img
          src="/30_white_trimmed.png"
          alt="Heaven Furniture Mart Logo"
          className={`${heightClass} w-auto object-contain block`}
          loading="eager"
          decoding="async"
          onError={(e) => {
            // Fallback gracefully if needed
            (e.currentTarget as HTMLImageElement).src = '/30_white.png';
          }}
        />
      </div>
    </div>
  );
};
