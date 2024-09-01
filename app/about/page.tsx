"use client";

import Aboutbanner from "./sections/aboutbanner";
import MissionVisionValues from "./sections/mvv";
import Whoweare from "./sections/whoweare";
import WhyUs from "./sections/whyus";

export default function About() {
  return (
    <>
      <Aboutbanner />
      <Whoweare/>
      <MissionVisionValues/>
      <WhyUs/> 
    </>
  );
}
