import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="xl:mt-72 md:mt-96 mt-20 text-right space-y-10">
      {/* footer */}
      <div className="grid grid-cols-4 gap-x-10">
        {/* contact */}
        <div className="md:space-y-3 space-y-1">
          <h2 className="md:text-lg text-[8px] font-semibold">للتواصل معنا</h2>
          <div className="">
            <p className="lg:text-lg md:text-sm text-[6px]  font-normal text-[#676767] md:p-2 p-0">
              +
              <a
                href="https://api.whatsapp.com/send?phone=966549834554"
                target="_blank"
              >
                966549834554
              </a>
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              +
              <a
                href="https://api.whatsapp.com/send?phone=966508418853"
                target="_blank"
              >
                966508418853
              </a>
            </p>
          </div>
        </div>
        {/* places */}
        <div className="space-y-1">
          <h2 className="md:text-lg text-[8px] font-semibold">مناطق وجودنا</h2>
          <div className="md:space-y-0 space-y-2">
            <p className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0">
              الدمام
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              الخبر
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              الظهران
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              القطيف
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              سيهات
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              عنك
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              الشرقية
            </p>
          </div>
        </div>
        {/* services */}
        <div className="space-y-1">
          <h2 className="md:text-lg text-[8px] font-semibold">خدماتنا</h2>
          <div className="md:space-y-0 space-y-2">
            <p className="lg:text-lg md:text-sm text-[6px]  font-normal text-[#676767] md:p-2 p-0">
              مكافحه النمل الاسود
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              مكافحه الفئران
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              مكافحه النمل الابيض
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              مكافحه الصراصير
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              مكافحه بق الفراش
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              مكافحه الصراصير
            </p>
            <p
              className="lg:text-lg md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0"
              p-0
            >
              مكافحه الناموس والذباب وغيرها
            </p>
          </div>
        </div>
        {/* logo */}
        <div className="space-y-1">
          <div className="flex items-center justify-center">
            <div className="flex items-center lg:space-x-5 md:space-x-3 space-x-2 lg:w-[42px] md:w-[28px] w-[15px]">
              <Image src={"/logo.svg"} alt="logo" width={42} height={42} />
              <h2 className="lg:text-2xl md:text-xl text-xs font-bold">
                المجال
              </h2>
            </div>
          </div>
          <p className="lg:text-base md:text-sm text-[6px] md:w-full w-20 font-normal text-[#676767] md:p-2 p-0">
            نحن نقدم خدمات متخصصة في مكافحة جميع أنواع الحشرات الضارة في مناطق
            الدمام، الخبر، الظهران، القطيف، سيهات، وعنك
          </p>
        </div>
      </div>
      {/* Privacy */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <p className="lg:text-base md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0">
            الشروط و الاحكام
          </p>
          <p className="lg:text-base md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0">
            الخصوصية
          </p>
        </div>
        <div>
          <p className="lg:text-base md:text-sm text-[6px] font-normal text-[#676767] md:p-2 p-0">
            جميع الحقوق محفوظة © المجال 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
