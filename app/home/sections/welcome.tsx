"use client";
import Image from "next/image";

export default function Welcome() {
  return (
      <section className="relative w-full h-screen">
        <Image
          src="/banner/HomeBanner.webp"
          alt="Logo"
          fill
          className=" object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white gap-5">
          <h1 className=" flex justify-center text-xl slide-in">
            WELCOME TO A1 ASSOCIATES LIMITED
          </h1>
          {/* <div className="flex text-center justify-center font-bold text-2xl md:text-5xl w-2/3">
          Your Ultimate Partner for <br /> Comprehensive Business Solutions
          </div> */}
          <div className=" w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md slide-in ">
            <h1 className="md:text-3xl text-2xl lg:text-5xl font-semibold text-center text-white relative w-2/3 z-20">
              Your Ultimate Partner for <br /> Comprehensive Business Solutions
            </h1>
            <div className="w-[40rem] h-20 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              {/* <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
              /> */}

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-transparent bg-opacity-50 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          {/* Button */}
          <button className="p-[3px] relative slide-in">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
              Get Started
            </div>
          </button>
        </div>
      </section>
  );
}
