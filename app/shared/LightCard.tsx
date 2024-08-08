'use client';
import React from 'react';

const LightCard: React.FC<any> = ({ children, styleComp='' }) => {
  return (
    <div className={`flex flex-col flex-1 p-6 gap-4 font-medium text-sm rounded-lg cursor-pointer bg-white text-black  ${styleComp}`}>
      {children}
    </div>
  );
};

export default LightCard;