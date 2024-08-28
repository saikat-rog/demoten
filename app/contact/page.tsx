"use client";
import Image from "next/image";
import ContactBanner from "./sections/ContactBanner";
import ContactForm from "./sections/ContactForm";
import Faq from "./sections/Faq";
export default function Contactus() {
  return (
    <>
      <ContactBanner />
      <ContactForm />
      <Faq/>
    </>
  );
}
