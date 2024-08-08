'use client';
import React from 'react';

const DarkCard: React.FC<any> = ({ children, styleComp='' }) => {
  return (
    <div className={`flex flex-col flex-1 rounded-lg cursor-pointer bg-black min-h-80 ${styleComp}`}>
      {children}
    </div>
  );
};

export default DarkCard;