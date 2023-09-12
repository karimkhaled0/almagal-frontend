"use client";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex items-center lg:space-x-20 md:space-x-10 space-x-5 relative md:my-44 my-20">
        {/* Image */}
        <div className="xl:w-[894px] lg:w-[100px] md:block hidden">
          <Image
            src={"/contact.svg"}
            alt="contact us Image"
            width={894}
            height={448}
            className="absolute xl:-top-5 xl:-left-[10%] z-0"
          />
        </div>
        {/* content */}
        <div className="text-right md:space-y-5 space-y-2 z-10">
          <h2 className="lg:text-lg md:text-base text-xs font-medium text-[#F54748]">
            للتواصل معنا عبر الارقام التالية
          </h2>
          <h2 className="lg:text-4xl md:text-2xl text-base font-bold lg:leading-normal md:leading-normal leading-normal">
            نحن هنا لمساعدتك والإجابة على استفساراتك، فلا تتردد في الاتصال بنا
            على أحد هذه الأرقام
          </h2>
          <div>
            <p className="lg:text-3xl md:text-xl text-lg  font-normal text-[#676767] p-2">
              +
              <a
                href="https://api.whatsapp.com/send?phone=966549834554"
                target="_blank"
              >
                966549834554
              </a>
            </p>
            <p className="lg:text-3xl md:text-xl text-lg font-normal text-[#676767] p-2">
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
      </div>
    </div>
  );
};

export default Contact;
