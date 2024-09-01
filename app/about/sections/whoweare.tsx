import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = "Based in Tanzania, A1 Associates is a licensed consulting firm specializing in financial and tax accounting services, including: Bookkeeping, Management Accounting, Payroll, and Tax Preparation. We serve wide range of industries and professions. We are committed to providing highest level of professional and personalized services in a cost effective manner. From individual tax planning services to complex corporate audits and consulting engagements, you can find all services at A1 Associates. Our dedicated staff is fully committed to providing “client first” services. As an extension of your internal team, we work closely with you. to guide, advise and support you in the most effective way to meet your unique needs. We recognise that you want to be looked after by an experienced team, and we make dedicated efforts to keep you involved every step of the way. Most important of all, we operate with integrity and reliability, in appreciation for the sensetive matters for which we provide services for."

export default function Whoweare() {
  return (
    <section className=" py-7 flex items-center justify-center min-h-screen w-full">
      <div className=" flex md:flex-row gap-8 flex-col justify-center h-full w-6/7 md:w-5/6">
        {/* Left/Up */}
        <div className=" flex items-center justify-center md:justify-end md:w-1/2">
          <Image
            src="/images/aboutus.webp"
            alt="aboutLogo"
            width={500}
            height={500}
            className="object-cover md:w-4/5 md:h-2/3 rounded-tl-[4px] rounded-br-[4px] rounded-tr-[88px] rounded-bl-[88px] aos-init aos-animate px-5 md:px-0 md:mx-20"
          />
        </div>
        {/* Right/Below */}
        <div className="flex flex-col items-center md:justify-center md:w-1/2">
          <div className=" flex flex-col items-start gap-5 justify-center mx-5">
            <div className="flex flex-col text-white items-start ">
              <h2>WHO WE ARE</h2>
              <h1 className=" text-2xl md:text-5xl font-semibold w-full">
                Traveling the Road to Financial Success with You
              </h1>
            </div>
            <TextGenerateEffect
              words={words}
              className=" text-white text-justify"
            />
            <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-lg font-medium text-white backdrop-blur-3xl">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
