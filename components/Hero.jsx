"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Image */}
      <div className="xl:w-[599px] lg:w-[400px] md:w-[350px] w-[300px]">
        <Image
          src={"/header.svg"}
          alt="Picture of the hero"
          width={599}
          height={537}
          priority
        />
      </div>

      {/* Content */}
      <div className="lg:space-y-5 md:space-y-5 space-y-3 md:space-x-5 flex flex-col items-end justify-end text-right">
        {/* Special */}
        <div className="flex items-center space-x-2 w-fit bg-[#FFDFDF] lg:px-4 lg:py-2 md:px-2 md:py-2 py-1 px-2 rounded-full">
          <p className="text-[#F55556] lg:text-base md:text-sm text-[10px] font-medium">
            متميزين دائما
          </p>
          <div className="lg:w-[26px] md:w-[20px] w-[10px]">
            <Image
              src={"/special.svg"}
              alt="Picture of the hero"
              width={26}
              height={24}
            />
          </div>
        </div>

        {/* Head */}
        <div>
          <h1 className="xl:text-6xl lg:text-5xl md:text-2xl text-sm font-bold xl:w-[578px] lg:w-[500px] md:w-[300px] w-[200px] xl:leading-normal lg:leading-normal md:leading-normal">
            شركة المجال في مكافحة الحشرات والافات والقوارض
          </h1>
        </div>

        {/* Body */}
        <div>
          <p className="lg:w-[478px] md:w-[300px] w-[150px] lg:text-base md:text-xs text-[8px] font-normal text-[#676767] xl:leading-normal lg:leading-normal md:leading-normal">
            نحن نقدم خدمات متخصصة في مكافحة جميع أنواع الحشرات الضارة في مناطق
            الدمام ، الخبر ، الظهران ، القطيف ، سيهات و عنك
          </p>
        </div>

        {/* Button */}
        <button className="lg:text-lg md:text-base text-[10px] font-medium lg:py-4 md:py-3 lg:px-8 md:px-4 py-2 px-2 bg-[#F86061] rounded-xl text-white">
          <Link href={"/#contact"}>تواصل معنا</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
