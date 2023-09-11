"use client";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="mt-44 space-y-10 mb-44">
      {/* what we serve */}
      <h1 className="text-[#F54748] text-lg font-medium text-center ">
        ماذا نقدم ؟
      </h1>

      {/* Header */}
      <h1 className="font-bold text-4xl leading-normal text-[#2E2E2E] text-center ">
        مكافحة جميع انواع الحشرات والقوارض
      </h1>

      {/* Services */}
      <div className="flex items-center justify-between max-w-6xl mx-auto relative">
        {/* eco */}
        <div className="w-[300px] space-y-10 text-center flex flex-col items-center justify-center">
          {/* image */}
          <Image src={"/eco.svg"} alt="eco Image" width={115} height={108} />
          {/* head */}
          <h2 className="font-bold text-xl">استخدام منتجات صديقة للبيئة</h2>
          {/* body */}
          <p className="text-sm font-normal text-[#676767]">
            تهتم شركة المجال لمكافحة الحشرات بالبيئة وتستخدم منتجات ومواد صديقة
            للبيئة في عملياتها
          </p>
        </div>

        <Image
          src={"/customerCard.svg"}
          alt="eco Image"
          width={325}
          height={334}
          className="absolute z-0 right-[401px] -top-[10px]"
        />

        {/* customer */}
        <div className=" bg-white z-10 w-[300px] h-[311px] space-y-10 text-center flex flex-col items-center justify-center rounded-xl">
          {/* image */}
          <Image
            src={"/customer.svg"}
            alt="eco Image"
            width={115}
            height={108}
          />
          {/* head */}
          <h2 className="font-bold text-xl">خدمة العملاء الممتازة</h2>
          {/* body */}
          <p className="text-sm font-normal text-[#676767]">
            تسعى شركة المجال لمكافحة الحشرات دائمًا لتقديم خدمة عملاء استثنائية،
            والاستماع إلى احتياجات العملاء والرد على استفساراتهم بفعالية.{" "}
          </p>
        </div>
        {/* new */}
        <div className="w-[300px] space-y-10 text-center flex flex-col items-center justify-center">
          {/* image */}
          <Image src={"/new.svg"} alt="eco Image" width={115} height={108} />
          {/* head */}
          <h2 className="font-bold text-xl">استخدام تقنيات حديثة</h2>
          {/* body */}
          <p className="text-sm font-normal text-[#676767]">
            تستخدم شركة المجال لمكافحة الحشرات تقنيات متقدمة ومعدات حديثة في
            عمليات مكافحة الحشرات، مما يزيد من فعالية العمليات.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
