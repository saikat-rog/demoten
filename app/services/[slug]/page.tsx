"use client";
import { getBookkeepingData } from "./servicedata";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params;
  const data = await getBookkeepingData(slug);

  if (!data) {
    notFound();
  }

  return (
    <section className=" flex min-h-screen w-full flex-col md:flex-row bg-home-gradient gap-5 py-5 items-center justify-center">
      {/* Service content */}
      {/* Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <img
          src={`/images/service${data.id}.webp`}
          alt="Book Keeping"
          className=" md:w-3/5 md:h-3/5 rounded-xl object-cover"
        />
      </div>
      {/* Text */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-5 gap-5">
        <h1 className="font-semibold text-white">{data.title}</h1>
        <h2 className="text-white">{data.about}</h2>
        <ul className="list-disc">
          {data.content.map((item, index) => (
            <h2>
              <li key={index} className="text-white list-item list-inside pb-1">
                {item}
              </li>
            </h2>
          ))}
        </ul>
      </div>

      {/* Repeat similar blocks for Payroll, Tax Preparation, Tax Consulting, Internal Auditing, Financial Consulting */}
    </section>
  );
};

export default Page;
