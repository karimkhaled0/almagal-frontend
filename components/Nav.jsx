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
    <div className="flex items-center justify-between p-5">
      {/* Nav */}
      <div className="flex items-center space-x-5">
        <Link href={"/#contact"} onClick={() => setActiveLink("/#contact")}>
          <h2
            className={`font-medium text-lg ${
              activeLink === "/#contact" ? "text-[#F55253]" : ""
            }`}
          >
            تواصل معنا
          </h2>
        </Link>
        <Link href={"/#why"} onClick={() => setActiveLink("/#why")}>
          <h2
            className={`font-medium text-lg ${
              activeLink === "/#why" ? "text-[#F55253]" : ""
            }`}
          >
            لماذا المجال ؟
          </h2>
        </Link>
        <Link href={"/#services"} onClick={() => setActiveLink("/#services")}>
          <h2
            className={`font-medium text-lg ${
              activeLink === "/#services" ? "text-[#F55253]" : ""
            }`}
          >
            الخدمات
          </h2>
        </Link>
        <Link href={"/#home"} onClick={() => setActiveLink("/#home")}>
          <h2
            className={`font-medium text-lg ${
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
      <div className="flex items-center space-x-5">
        <Image src={"/logo.svg"} alt="logo" width={42} height={42} />
        <h1 className="text-3xl font-bold">المجال</h1>
      </div>
    </div>
  );
};

export default Nav;
