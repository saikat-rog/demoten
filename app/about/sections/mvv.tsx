"use client";

import Image from "next/image";

export default function MissionVisionValues() {
  return (
    <div className="relative px-5 py-20">
      <div
        data-aos="fade-up"
        className="max-w-screen-lg mx-auto flex flex-col gap-10 items-center justify-center"
      >
        <div className="flex flex-col gap-2 text-white text-center pb-10 mx-auto md:w-[60%]">
          <h2 className="flex gap-2 text-sm items-center justify-center">
            <span className="uppercase">MISSION, VISION & VALUES</span>
          </h2>
          <h1 className="font-bold text-balance">
            Delivering Excellence Every Step of the Way
          </h1>
        </div>
      </div>

      <div className="flex max-md:flex-col-reverse items-center justify-end gap-[10%] w-full relative">
        <div
          data-aos="fade-up"
          className="md:w-[50%] flex flex-col gap-8 md:pl-16 pl-6"
        >
          <div className="flex pl-20 relative text-white flex-col">
            <Image
              src="/images/vision.svg"
              alt="Vision Icon"
              width={64}
              height={64}
              className="absolute left-0"
            />
            <h1 className="text-2xl pb-4">Vision</h1>
            <p className="text-sm w-[92%] text-balance">
              At A1 Associates, our vision is to always be learning, growing and
              planning for our - and your future. We are always looking for new
              ways we can bring value to our clients and continue to be
              recognized as a premier financial services consulting firm that
              passionately designs and delivers innovative solutions.
            </p>
          </div>

          <div className="flex pl-20 relative text-white flex-col">
            <Image
              src="/images/mission.svg"
              alt="Mission Icon"
              width={64}
              height={64}
              className="absolute left-0"
            />
            <h1 className="text-2xl pb-4">Mission</h1>
            <p className="text-sm w-[92%] text-balance">
              To provide our clients with highest quality tax accounting,
              auditing, and business consulting services delivered in a timely,
              efficient and innovative manner.
            </p>
          </div>

          <div className="flex pl-20 relative text-white flex-col">
            <Image
              src="/images/values.svg"
              alt="Values Icon"
              width={64}
              height={64}
              className="absolute left-0"
            />
            <h1 className="text-2xl pb-4">Values</h1>
            <p className="text-sm w-[92%] text-balance">
              Our values are built on integrity, innovation, and client-centric
              excellence. We are committed to delivering personalized, reliable,
              and high-quality financial solutions.
            </p>
          </div>
        </div>

        <Image
          data-aos="fade-up"
          data-aos-delay="400"
          src="/images/mission.webp"
          alt="Who we are"
          width={640} // Adjust width according to your image
          height={800} // Adjust height according to your image
          className="md:w-[40%] h-full object-contain object-right"
        />
      </div>

      <Image
        src="/icons/ellipse.svg"
        alt="Ellipse Icon"
        width={350} // Adjust size according to your image
        height={350} // Adjust size according to your image
        className="absolute top-1/4 right-0 max-md:h-[170px] h-[350px] -rotate-180 -z-10"
      />
      <Image
        src="/icons/ellipse-full.svg"
        alt="Ellipse Full Icon"
        width={400} // Adjust size according to your image
        height={400} // Adjust size according to your image
        className="absolute -bottom-20 left-[40%] max-md:h-[170px] h-[400px] -rotate-180 -z-10"
      />
    </div>
  );
}
