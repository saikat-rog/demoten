"use client";
import Image from "next/image";

export default function Aboutbanner() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/banner/AboutBanner.webp"
        alt="Logo"
        fill
        className=" object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white gap-5">
        <h2 className=" flex text-center justify-center text-xl slide-in">
          GET TO KNOW MORE ABOUT A1 ASSOCIATES
        </h2>
        <div className=" w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md slide-in ">
          <h1 className="md:text-3xl text-2xl lg:text-5xl font-semibold text-center text-white relative w-2/3 z-20">
            Leading the Way in Financial and Tax Consulting Services in Tanzania
          </h1>
        </div>
        {/* Button */}
        <button className="p-[3px] relative slide-in">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
            Contact Us
          </div>
        </button>
      </div>
    </section>
  );
}
