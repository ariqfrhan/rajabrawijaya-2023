import React from 'react';
import style from './Heading.module.css';

type HeadingProps = {
  top: string;
  bottom: string;
  direction: string;
};

export default function Heading({ top, bottom, direction }: HeadingProps) {
  return (
    <div className="flex justify-center items-center">
      {' '}
      <img className={`w-[52px] md:w-[64px] lg:w-[184px]`} src="/assets/images/ombak.png"></img>
      <div
        className={`flex items-center cursor-pointer
        flex-col drop-shadow-md w-fot ml-4 mr-4 ${direction === 'center' ? 'mx-auto' : ''}
        ${direction === 'right' ? 'ml-auto' : ''}`}
      >
        <div className="flex items-center justify-center w-fit">
          <h1 className={`font-esthetique font-normal text-secondary text-3xl lg:text-6xl md:text-5xl`}>{top}</h1>
        </div>
        <div>
          <h1 className="text-primary font-esthetique font-normal text-3xl lg:text-6xl md:text-5xl">{bottom}</h1>
        </div>
      </div>
      <img className={`w-[52px] md:w-[64px] lg:w-[184px] ${style.reverse}`} src="/assets/images/ombak.png"></img>
    </div>
  );
}
