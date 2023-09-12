"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Why = () => {
  return (
    <div className="md:space-y-44 space-y-20 md:my-44 my-20">
      {/* Professional Team */}
      <div className="flex items-center lg:space-x-20 md:space-x-10 space-x-5">
        {/* content */}
        <div className="text-right md:space-y-5 space-y-2">
          <h2 className="lg:text-lg md:text-base text-xs font-medium text-[#03A66B]">
            فريق محترف
          </h2>
          <h2 className="lg:text-4xl md:text-2xl text-base font-bold lg:leading-normal md:leading-normal leading-normal">
            فريق متخصص في مكافحة الحشرات والقوارض
          </h2>
          <p className="lg:text-lg md:text-sm text-[8px] font-normal text-[#676767]">
            تعتمد شركة المجال على فريق من المحترفين المدربين تدريباً عالياً في
            مكافحة الحشرات، وهم ملتزمون بتقديم أفضل الحلول لعملائهم
          </p>

          {/* Button */}
          <button className="lg:text-lg md:text-base text-[10px] font-medium lg:py-4 md:py-3 lg:px-8 md:px-4 py-2 px-2 bg-white rounded-xl text-[#F86061] border border-[#F86061]">
            <Link href={"/#contact"}>تواصل معنا</Link>
          </button>
        </div>
        {/* Image */}
        <div className="md:w-[619px] w-[400px]">
          <Image src={"/team.svg"} alt="team Image" width={619} height={454} />
        </div>
      </div>

      {/* Why Al-magal */}
      <div className="flex items-center lg:space-x-20 md:space-x-10 space-x-5">
        {/* Image */}
        <div className="md:w-[508px] w-[300px]">
          <Image src={"/why.svg"} alt="why us Image" width={508} height={550} />
        </div>
        {/* content */}
        <div className="text-right md:space-y-5 space-y-2">
          <h2 className="lg:text-lg md:text-base text-xs font-medium text-[#03A66B]">
            لماذا تختار المجال ؟
          </h2>
          <h2 className="lg:text-4xl md:text-2xl text-base font-bold lg:leading-normal md:leading-normal leading-normal">
            تتمتع شركة المجال بخبرة عميقة في مجال مكافحة الحشرات
          </h2>
          <p className="lg:text-lg md:text-sm text-[8px] font-normal text-[#676767]">
            حيث قامت بتقديم خدماتها لسنوات عديدة مما يمنحها الكفاءة والمهارة في
            التعامل مع مختلف أنواع الحشرات والآفات
          </p>
          {/* Button */}
          <button className="lg:text-lg md:text-base text-[10px] font-medium lg:py-4 md:py-3 lg:px-8 md:px-4 py-2 px-2 bg-[#F86061] rounded-xl text-white">
            <Link href={"/#contact"}>تواصل معنا</Link>
          </button>
        </div>
      </div>

      {/* Places */}
      <div className="flex items-center lg:space-x-20 md:space-x-10 space-x-5">
        {/* content */}
        <div className="text-right md:space-y-5 space-y-2">
          <h2 className="lg:text-lg md:text-base text-xs font-medium text-[#03A66B]">
            مناطق وجودنا
          </h2>
          <h2 className="lg:text-4xl md:text-2xl text-base font-bold lg:leading-normal md:leading-normal leading-normal">
            المجال لمكافحة الحشرات تتواجد في مناطق عديدة
          </h2>
          <p className="lg:text-lg md:text-sm text-[8px] font-normal text-[#676767]">
            الدمام - الخبر - الظهران - القطيف - سيهات - عنك
          </p>
          {/* Button */}
          <button className="lg:text-lg md:text-base text-[10px] font-medium lg:py-4 md:py-3 lg:px-8 md:px-4 py-2 px-2 bg-white rounded-xl text-[#F86061] border border-[#F86061]">
            <Link href={"/#contact"}>تواصل معنا</Link>
          </button>
        </div>
        {/* Image */}
        <div className="md:w-[679px] w-[400px]">
          <Image
            src={"/places.svg"}
            alt="team Image"
            width={679}
            height={413}
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
