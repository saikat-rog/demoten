import React from "react";
// import Welcome from "./sections/welcome";
const Welcome = dynamic(() => import("./sections/welcome"));
const About = dynamic(() => import("./sections/about"));
const Services = dynamic(() => import("../components/sections/services"));
const Testimonials = dynamic(() => import("./sections/testimonials"));
const Articles = dynamic(() => import("./sections/articles"));
import dynamic from "next/dynamic";
import Footer from "./footer";

export function Home() {
  return (
    <div>
      <Welcome />
      <div className=" relative bg-home-gradient">
        <About />
        <Services />
        <Testimonials />
        <Articles />
      </div>
    </div>
  );
}
