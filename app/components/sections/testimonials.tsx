"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const testimonialsDetails = [
  {
    id: 1,
    institute: "John & Co",
    name: "John Doe",
    statements:
      "This service exceeded my expectations! The team was professional and the results were outstanding. I would highly recommend them to anyone.",
  },
  {
    id: 2,
    institute: "Tech Innovators",
    name: "Jane Smith",
    statements:
      "Working with this company was a fantastic experience. They delivered on time and the quality of work was top-notch.",
  },
  {
    id: 3,
    institute: "Creative Solutions",
    name: "Emily Johnson",
    statements:
      "The attention to detail and the level of creativity they brought to the project was impressive. I’m very happy with the final outcome.",
  },
  {
    id: 4,
    institute: "NextGen Developers",
    name: "Michael Brown",
    statements:
      "Their innovative approach helped us achieve our goals faster than expected. I’m thrilled with the results and look forward to future collaborations.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="flex w-5/6 flex-col gap-5 ml-5 my-5 text-white">
        <h2 className="">CLIENT TESTIMONIALS</h2>
        <h1 className="text-3xl md:text-5xl ">What Our Clients Say?</h1>
        {/* Testimonials cards */}
        <div className="w-full flex flex-wrap gap-5">
          {testimonialsDetails.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-basecolor flex items-start justify-center flex-col py-5 px-5 md:px-10 rounded-3xl gap-3"
            >
              <FontAwesomeIcon icon={faQuoteRight} className="text-xl text-white mb-2" />
              <h2 className="text-lg font-bold">{testimonial.institute}</h2>
              <h2 className="text-md">{testimonial.name}</h2>
              <p className="text-sm">{testimonial.statements}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
