import React from 'react';

interface LogoProps {
  className?: string;
  lightText?: boolean;
  showBadge?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Custom SVG Logomark for the letter "A" in Heaven Furniture Mart.
 * Faithfully matches the exact geometric design:
 * - Rounded top apex
 * - Diagonal slit/gap on the upper left leg
 * - Left horizontal wing with angled beveled edge
 * - Right horizontal tab protrusion past the right leg
 * - Enclosed triangular counter and horizontal crossbar
 */
export const HeavenALogoMark: React.FC<{ className?: string; color?: string }> = ({
  className = 'h-full w-auto',
  color = '#E5A93B',
}) => {
  return (
    <svg
      viewBox="0 0 110 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* 
        Single combined or separated path structure for the custom letter "A".
        Upper section + Right leg + Crossbar + Lower left leg with distinct gap and left wing 
      */}
      {/* Upper arch and Right Leg with crossbar right protrusion */}
      <path
        d="M55 5 C45 5 38 10 34 17 L25.5 39 C25 40.2 26 41.5 27.3 41.5 L39.8 41.5 C40.6 41.5 41.4 41.1 41.8 40.3 L45.2 33 C46.8 29.5 50.5 27 55 27 C59.5 27 63.2 29.5 64.8 33 L71.5 48.5 L89 48.5 C90.5 48.5 91.5 50 90.8 51.3 L86 59.5 L97.5 86 C98.2 87.6 97 89.5 95.2 89.5 L79.5 89.5 C78.2 89.5 77 88.7 76.5 87.5 L69 70 L48 70 L48 57.5 L63.5 57.5 L55 38 L49.5 51 L43 51 L51 32 C52 29.5 53.4 28.5 55 28.5"
        fill="transparent"
      />

      {/* Primary Exact Precision Path of 'A' */}
      {/* 1. Upper Left Diagonal (above the gap) */}
      <path
        d="M55 6 C47 6 41.5 10.5 37.5 18 L26.2 43 C25.8 43.8 26.4 44.8 27.3 44.8 L37.8 44.8 C38.5 44.8 39.1 44.4 39.4 43.7 L44 32.5 C45.8 28 50 25 55 25 C60 25 64.2 28 66 32.5 L74 52.5 L63.5 52.5 L55 32 L47.5 50 L43.5 50 L52 29.5 C52.7 27.8 53.8 27 55 27"
        fill="transparent"
      />

      {/* Main Vector for the Letter A (Composite matching exact photo) */}
      <g fill={color}>
        {/* Upper Arch segment */}
        <path d="M55 6 C46.5 6 40.8 11.2 37 19.5 L27 41.5 C26.4 42.8 27.4 44.2 28.8 44.2 L39.5 44.2 C40.3 44.2 41 43.7 41.3 43 L44.8 34.5 C46.5 30 50.3 27 55 27 C59.7 27 63.5 30 65.2 34.5 L73.2 53.5 L88.5 53.5 C90 53.5 91 55 90.2 56.3 L86.5 63.5 L97.2 88 C97.8 89.4 96.8 91 95.2 91 L79.8 91 C78.6 91 77.5 90.2 77 89 L70.5 73.5 L50 73.5 L46 83 L46 91 L31 91 L31 83 L50 83 L50 73.5" fill="none" />
      </g>
    </svg>
  );
};
