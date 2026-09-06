import React from 'react';

interface HeavenMarkProps {
  className?: string;
  color?: string;
}

/**
 * Pixel-perfect vector logomark for the Heaven Furniture Mart stylized "A".
 * Features:
 * - Rounded top dome apex
 * - Symmetrical angled A-frame legs
 * - Left horizontal wing/overhang with beveled edge
 * - Right horizontal crossbar overhang
 * - Central crossbar (table-top aesthetic)
 * - Upper triangular counter
 * - Sturdy flat feet
 */
export const HeavenMark: React.FC<HeavenMarkProps> = ({
  className = 'w-full h-full',
  color = '#F3A81A',
}) => {
  return (
    <svg
      viewBox="0 0 100 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M 50 5
           C 42 5, 35 11, 30.5 21
           L 20.8 41
           L 9.5 41
           C 7.8 41, 7 43, 8.2 44.2
           L 13.5 49.5
           C 14.5 50.5, 15.8 51, 17.2 51
           L 21.2 51
           L 12.2 73
           C 11.5 74.8, 12.8 76.5, 14.8 76.5
           L 28.5 76.5
           C 29.8 76.5, 31 75.6, 31.5 74.3
           L 37 60
           L 63 60
           L 68.5 74.3
           C 69 75.6, 70.2 76.5, 71.5 76.5
           L 85.2 76.5
           C 87.2 76.5, 88.5 74.8, 87.8 73
           L 78.8 51
           L 89.5 51
           C 91.2 51, 92.5 49.7, 92.5 48
           L 92.5 44
           C 92.5 42.3, 91.2 41, 89.5 41
           L 79.2 41
           L 69.5 21
           C 65 11, 58 5, 50 5 Z

           M 50 20
           C 53.5 20, 56 22.5, 58 27
           L 63.5 42
           L 36.5 42
           L 42 27
           C 44 22.5, 46.5 20, 50 20 Z"
        fill={color}
      />
    </svg>
  );
};
