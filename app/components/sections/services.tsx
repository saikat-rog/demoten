"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const servicesDetails = [
  {
    id: 1,
    title: "Book Keeping",
    description:
      "Maintaining accurate financial records to ensure compliance and simplify accounting functions.",
    serviceInformation: [
      "Compliance: Ensures adherence to legal and regulatory requirements.",
      "Accuracy: Provides precise financial data for reporting and audits.",
      "Efficiency: Simplifies bookkeeping and reduces errors.",
    ],
  },
  {
    id: 2,
    title: "Management Accounting",
    description:
      "Providing monthly or quarterly financial reports to assist management in making informed business decisions.",
    serviceInformation: [
      "Timely Insights: Offers regular updates for strategic planning.",
      "Data-Driven Decisions: Facilitates informed management choices.",
      "Performance Tracking: Helps monitor financial health and trends.",
    ],
  },
  {
    id: 3,
    title: "Payroll",
    description:
      "Managing employee compensation and benefits to ensure accurate and compliant payroll activities.",
    serviceInformation: [
      "Accuracy: Ensures correct calculation of wages, deductions, and benefits.",
      "Compliance: Adheres to labor laws and tax regulations.",
      "Timeliness: Guarantees timely and reliable payroll processing.",
    ],
  },
  {
    id: 4,
    title: "Tax Preparation",
    description:
      "Preparing and submitting tax records to minimize risks of unforeseen tax liabilities, fees, or audits.",
    serviceInformation: [
      "Risk Mitigation: Reduces chances of unexpected tax liabilities and penalties.",
      "Accuracy: Ensures tax records are precise and up-to-date.",
      "Compliance: Helps avoid audits by adhering to tax regulations.",
    ],
  },
  {
    id: 5,
    title: "Tax Consulting",
    description:
      "Offering expert tax advice to minimize tax liability, capitalize on deductions, and ensure compliance with complex tax laws.",
    serviceInformation: [
      "Tax Savings: Identifies opportunities to reduce tax liability.",
      "Deductions: Maximizes allowable deductions to lower taxable income.",
      "Compliance: Ensures adherence to complex tax regulations and laws.",
    ],
  },
  {
    id: 6,
    title: "Internal Auditing",
    description:
      "Providing assurance and consulting to improve operations and ensure regulatory compliance.",
    serviceInformation: [
      "Operational Improvement: Identifies areas to enhance efficiency and effectiveness.",
      "Compliance Assurance: Ensures adherence to relevant laws and regulations.",
      "Risk Management: Helps mitigate potential operational and financial risks.",
    ],
  },
  {
    id: 7,
    title: "Financial Consulting",
    description:
      "Offering strategic analysis and advice on business opportunities, investments, and partnerships.",
    serviceInformation: [
      "Opportunity Identification: Pinpoints potential growth and investment areas.",
      "Risk Assessment: Evaluates the risks associated with various business strategies.",
      "Strategic Planning: Advises on optimal business decisions and partnerships.",
    ],
  },
];

export default function Services() {
  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-wrap gap-5 items-stretch justify-center my-5">
        {servicesDetails.map((service) => (
          <CardSpotlight
            key={service.id}
            className="m-5 gap-5 p-7 w-full md:w-1/4 flex flex-col"
          >
            <p className="text-xl font-bold relative z-2 text-white">
              {service.title}
            </p>
            <div className="text-neutral-200 relative z-20 flex-1">
              {service.description}
              <ul className="list-none gap-2 mt-2">
                {service.serviceInformation.map((info, index) => (
                  <Step key={index} title={info} />
                ))}
              </ul>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
