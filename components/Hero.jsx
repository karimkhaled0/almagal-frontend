"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Image */}
      <Image
        src={"/header.svg"}
        alt="Picture of the hero"
        width={599}
        height={537}
      />

      {/* Content */}
      <div className="space-y-5 flex flex-col items-end justify-end text-right">
        {/* Special */}
        <div className="flex items-center space-x-2 w-fit bg-[#FFDFDF] px-4 py-2 rounded-full">
          <p className="text-[#F55556] text-base font-medium">متميزين دائما</p>
          <Image
            src={"/special.svg"}
            alt="Picture of the hero"
            width={26}
            height={24}
          />
        </div>

        {/* Head */}
        <div>
          <h1 className="text-6xl font-bold w-[578px] leading-normal">
            شركة المجال في مكافحة الحشرات والافات والقوارض
          </h1>
        </div>

        {/* Body */}
        <div>
          <p className="w-[478px] text-base font-normal text-[#676767] leading-normal">
            نحن نقدم خدمات متخصصة في مكافحة جميع أنواع الحشرات الضارة في مناطق
            الدمام ، الخبر ، الظهران ، القطيف ، سيهات و عنك
          </p>
        </div>

        {/* Button */}
        <button className="text-lg font-medium py-4 px-8 bg-[#F86061] rounded-xl text-white">
          للتواصل معنا
        </button>
      </div>
    </div>
  );
};

export default Hero;
