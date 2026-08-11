import React from 'react';

export const Motif = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto my-6 text-antique-gold opacity-80" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 15 8 15 12C15 16 12 22 12 22C12 22 9 16 9 12C9 8 12 2 12 2Z" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </svg>
);

export const Divider = () => (
  <div className="flex items-center justify-center space-x-4 my-10 opacity-70">
    <div className="h-[1px] w-16 bg-antique-gold/40"></div>
    <div className="text-antique-gold text-xs">✦</div>
    <div className="h-[1px] w-16 bg-antique-gold/40"></div>
  </div>
);

export const CornerTopLeft = () => (
  <svg className="absolute top-4 left-4 w-12 h-12 text-antique-gold opacity-60" fill="none" viewBox="0 0 40 40">
    <path d="M0 40V12C0 5.37258 5.37258 0 12 0H40" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
);

export const CornerBottomRight = () => (
  <svg className="absolute bottom-4 right-4 w-12 h-12 text-antique-gold opacity-60" fill="none" viewBox="0 0 40 40">
    <path d="M40 0V28C40 34.6274 34.6274 40 28 40H0" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="28" cy="28" r="1" fill="currentColor"/>
  </svg>
);