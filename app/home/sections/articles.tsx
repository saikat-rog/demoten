"use client";
import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import service1 from "@/public/images/service1.webp";
import service2 from "@/public/images/service2.webp";
import service3 from "@/public/images/service3.webp";
import Link from "next/link";

const news = [
  {
    id: 1,
    title:
      "Client-Centric Financial Services: Our Approach and Success Stories Ideas.",
    date: "20 April 2024",
    photoname: service1,
  },
  {
    id: 2,
    title:
      "Client-Centric Financial Services: Our Approach and Success Stories Ideas.",
    date: "27 April 2024",
    photoname: service2,
  },
  {
    id: 3,
    title:
      "Client-Centric Financial Services: Our Approach and Success Stories Ideas.",
    date: "10 April 2024",
    photoname: service3,
  },
];

export default function Articles() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-5 text-white">
      <div className="w-5/6 my-5 h-full">
        <h2>NEWS AND ARTICLES</h2>
        <h1 className="font-semibold">
          Insightful Reads for Your Financial Success
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className=" flex flex-wrap gap-5">
            {/* Cards */}
            {news.map((news, index) => (
              <CardContainer className="inter-var">
                <CardBody className="bg-basecolor relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    {news.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-sm mt-2"
                  >
                    Click → below and read more...
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={news.photoname}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      {news.date}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-8 py-2 rounded-full bg-white text-basecolor font-bold"
                    >
                      <h1>→</h1>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
