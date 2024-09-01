"use client";

import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="relative px-10 py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10 items-center justify-center">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="flex flex-col gap-2 text-white mx-auto md:w-[70%] text-center"
        >
          <h2 className="flex gap-2 text-white items-center justify-center">
            <span className="uppercase">Why Choose Us?</span>
          </h2>
          <h1 className="font-semibold text-pretty">
            Your Trusted Partner on the Path to Financial Success
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 w-full h-full items-center justify-center">
          {[
            {
              imgSrc: "/images/expertise.svg",
              title: "Expertise and Experience",
              description:
                "Our team consists of highly qualified professionals with extensive experience in financial and tax consulting.",
              delay: "0",
            },
            {
              imgSrc: "/images/cost.svg",
              title: "Cost-Effective",
              description:
                "We provide high-quality services that are both professional and affordable.",
              delay: "300",
            },
            {
              imgSrc: "/images/innovative.svg",
              title: "Innovative Solutions",
              description:
                "We are committed to finding new and effective ways to bring value to our clients.",
              delay: "600",
            },
            {
              imgSrc: "/images/integrity.svg",
              title: "Integrity and Reliability",
              description:
                "We maintain top integrity and reliability, earning your trust with sensitive financial matters.",
              delay: "900",
            },
            {
              imgSrc: "/images/comprehensive.svg",
              title: "Comprehensive Services",
              description:
                "From bookkeeping to complex audits, we offer a full range of financial services under one roof.",
              delay: "1200",
            },
            {
              imgSrc: "/images/client.svg",
              title: "Client-Centric Approach",
              description:
                "We prioritize our clients' needs and work closely with them to provide tailored solutions.",
              delay: "1500",
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.delay}
              className="bg-basecolor px-5 py-8 rounded-tr-[34px] h-full flex flex-col gap-3 rounded-bl-[34px] text-white"
            >
              <div className="flex justify-between">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h1 className="pb-2 text-[20px] font-semibold">{item.title}</h1>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
