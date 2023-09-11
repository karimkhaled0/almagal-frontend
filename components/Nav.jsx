"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const currentURL = window.location.href;

    // List of target routes
    const targetRoutes = ["/#contact", "/#why", "/#services", "/#home", "/"];

    // Check if the current URL matches any of the target routes
    const matchingRoute = targetRoutes.find((route) => {
      return currentURL.endsWith(route);
    });
    // Set the active link based on the matching route
    setActiveLink(matchingRoute || "");
  }, []);

  return (
    <div className="flex items-center justify-between md:p-5 p-2">
      {/* Nav */}
      <div className="flex items-center md:space-x-5 space-x-2">
        <Link href={"/#contact"} onClick={() => setActiveLink("/#contact")}>
          <h2
            className={`font-medium lg:text-lg md:text-base text-[8px] ${
              activeLink === "/#contact" ? "text-[#F55253]" : ""
            }`}
          >
            تواصل معنا
          </h2>
        </Link>
        <Link href={"/#why"} onClick={() => setActiveLink("/#why")}>
          <h2
            className={`font-medium lg:text-lg md:text-base text-[8px] ${
              activeLink === "/#why" ? "text-[#F55253]" : ""
            }`}
          >
            لماذا المجال ؟
          </h2>
        </Link>
        <Link href={"/#services"} onClick={() => setActiveLink("/#services")}>
          <h2
            className={`font-medium lg:text-lg md:text-base text-[8px] ${
              activeLink === "/#services" ? "text-[#F55253]" : ""
            }`}
          >
            الخدمات
          </h2>
        </Link>
        <Link href={"/#home"} onClick={() => setActiveLink("/#home")}>
          <h2
            className={`font-medium lg:text-lg md:text-base text-[8px] ${
              activeLink === "/#home" || activeLink === "/"
                ? "text-[#F55253]"
                : ""
            }`}
          >
            الصفحة الرئيسية
          </h2>
        </Link>
      </div>

      {/* Logo */}
      <div className="flex items-center lg:space-x-5 md:space-x-3 space-x-2 lg:w-[42px] md:w-[28px] w-[15px]">
        <Image src={"/logo.svg"} alt="logo" width={42} height={42} />
        <h1 className="lg:text-2xl md:text-xl text-xs font-bold">المجال</h1>
      </div>
    </div>
  );
};

export default Nav;
