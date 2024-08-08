'use client';
import React from 'react';

const DarkCard: React.FC<any> = ({ children, styleComp='' }) => {
  return (
    <div className={` rounded-lg  bg-black ${styleComp}`}>
      {children}
    </div>
  );
};

export default DarkCard;
