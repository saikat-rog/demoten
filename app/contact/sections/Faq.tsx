"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqs = [
  {
    question: "What services does A1 Associates offer?",
    answer:
      "A1 Associates provides a range of financial and tax consulting services, including bookkeeping, management accounting, payroll management, tax preparation, tax consulting, internal auditing, and financial consulting.",
  },
  {
    question: "How can A1 Associates help my business with tax preparation?",
    answer:
      "We specialize in commercial tax preparation, ensuring your records and submissions are accurate to minimize unforeseen tax liabilities, fees, or audits. Our team will assist you with VAT, City Service Levy, Withholding Tax, payroll taxes, and more.",
  },
  {
    question: "What makes A1 Associates different from other consulting firms?",
    answer:
      "Our client-centric approach, combined with integrity, innovation, and a commitment to excellence, sets us apart. We offer personalized, high-quality financial solutions tailored to meet the unique needs of each client.",
  },
  {
    question: "What industries does A1 Associates serve?",
    answer:
      "We serve a wide range of industries and professions, providing tailored financial and tax consulting services to meet the specific requirements of each sector.",
  },
  {
    question: "How do I get started with A1 Associates?",
    answer:
      "You can start by contacting us through our phone numbers or email. Our team will schedule a consultation to discuss your needs and how we can assist you",
  },
  {
    question: "Do you offer personalized financial planning services?",
    answer:
      "Yes, we offer personalized financial planning services to help individuals and businesses achieve their financial goals. Our team will work closely with you to create a customized plan that fits your unique needs and circumstances.",
  },
  {
    question: "How does A1 Associates ensure the confidentiality of my financial information?",
    answer:
      "We take confidentiality very seriously and implement strict security measures to protect your financial information. Our team operates with the highest standards of integrity and reliability, ensuring that your sensitive data is handled with utmost care and discretion.",
  },
];
export default function Faq() {
  return (
    <section className="w-full min-h-screen">
      <div className=" flex flex-col text-white gap-10 items-center justify-center">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center font-semibold">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <h1>Everything You Need to Know</h1>
        </div>
        {/* FAQs */}
        <div className="w-2/3 flex items-center ">
          <Accordion type="single" collapsible className="w-full text-white">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-md">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
