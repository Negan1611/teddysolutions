
import React from 'react';
import { PHONE_NUMBER } from '../constants';

const CallButton: React.FC = () => {
  const cleanPhone = PHONE_NUMBER.replace(/\s/g, '');
  
  return (
    <div className="fixed bottom-10 right-4 z-50 flex flex-col gap-4">
      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/teddysolutions.vn/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#1877F2] text-white rounded-full shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 group relative"
        aria-label="Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      {/* Zalo Button */}
      <a
        href={`https://zalo.me/${cleanPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#0068FF] text-white rounded-full shadow-2xl hover:scale-110 hover:-rotate-6 transition-all duration-300 group relative"
        aria-label="Zalo"
      >
        <span className="font-black text-xs">Zalo</span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${cleanPhone}`}
        className="flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group relative animate-bounce"
        aria-label="Gọi ngay"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        
        {/* Ripple effect for Call button only */}
        <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-25"></span>
      </a>
    </div>
  );
};

export default CallButton;
