'use client';
import React from 'react';

const DarkCard: React.FC<any> = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 rounded-lg cursor-pointer bg-black justify-center items-center min-h-80">
      {children}
    </div>
  );
};

export default DarkCard;