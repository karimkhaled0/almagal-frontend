"use client";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="md:my-44 my-20 lg:space-y-10 md:space-y-5 space-y-3">
      {/* what we serve */}
      <h1 className="text-[#F54748] lg:text-lg md:text-base text-xs font-medium text-center ">
        ماذا نقدم ؟
      </h1>

      {/* Header */}
      <h1 className="font-bold lg:text-4xl md:text-2xl text-base leading-normal text-[#2E2E2E] text-center ">
        مكافحة جميع انواع الحشرات والقوارض
      </h1>

      {/* Services */}
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 md:w-full w-44 mx-auto items-center justify-between relative">
        {/* eco */}
        <div className="lg:w-[300px] md:w-[200px] lg:space-y-10 md:space-y-5 space-y-2 text-center flex flex-col items-center justify-center z-10">
          {/* image */}
          <div className="lg:w-[115px] md:w-[80px] w-[50px]">
            <Image src={"/eco.svg"} alt="eco Image" width={115} height={108} />
          </div>
          {/* head */}
          <h2 className="font-bold lg:text-xl md:text-base text-[10px]">
            استخدام منتجات صديقة للبيئة
          </h2>
          {/* body */}
          <p className="lg:text-sm md:text-xs text-[8px] font-normal text-[#676767]">
            تهتم شركة المجال لمكافحة الحشرات بالبيئة وتستخدم منتجات ومواد صديقة
            للبيئة في عملياتها
          </p>
        </div>

        <Image
          src={"/customerCard.svg"}
          alt="eco Image"
          width={325}
          height={334}
          className="absolute z-0 xl:w-[325px] lg:w-[315px] md:w-[180px] xl:right-[310px] xl:-top-[5px] lg:right-[240px] lg:-top-[5px] hidden xl:block"
        />
        <div className="h-[0.5px] bg-[#F55253] w-full md:hidden" />
        {/* customer */}
        <div className=" bg-white z-10 lg:w-[300px] md:w-[200px] lg:h-[311px] lg:space-y-10 md:space-y-5 text-center flex flex-col items-center justify-center rounded-xl">
          {/* image */}
          <div className="lg:w-[115px] md:w-[80px] w-[50px]">
            <Image
              src={"/customer.svg"}
              alt="eco Image"
              width={115}
              height={108}
            />
          </div>
          {/* head */}
          <h2 className="font-bold lg:text-xl md:text-base text-[10px]">
            خدمة العملاء الممتازة
          </h2>
          {/* body */}
          <p className="lg:text-sm md:text-xs text-[8px] font-normal text-[#676767]">
            تسعى شركة المجال لمكافحة الحشرات دائمًا لتقديم خدمة عملاء استثنائية،
            والاستماع إلى احتياجات العملاء والرد على استفساراتهم بفعالية.{" "}
          </p>
        </div>

        <div className="h-[0.5px] bg-[#F55253] w-full md:hidden" />

        {/* new */}
        <div className="lg:w-[250px] md:w-[200px] lg:space-y-10 md:space-y-5 space-y-2 text-center flex flex-col items-center justify-center z-10">
          {/* image */}
          <div className="lg:w-[115px] md:w-[80px] w-[50px]">
            <Image src={"/new.svg"} alt="eco Image" width={115} height={108} />
          </div>
          {/* head */}
          <h2 className="font-bold lg:text-xl md:text-base text-[10px]">
            استخدام تقنيات حديثة
          </h2>
          {/* body */}
          <p className="lg:text-sm md:text-xs text-[8px] font-normal text-[#676767]">
            تستخدم شركة المجال لمكافحة الحشرات تقنيات متقدمة ومعدات حديثة في
            عمليات مكافحة الحشرات، مما يزيد من فعالية العمليات.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
