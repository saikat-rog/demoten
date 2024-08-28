"use client";
export default function ContactForm() {
  return (
    <section className="py-10 relative" id="contactform">
      <div className="max-width max-md:!px-4 md:!px-4">
        <div className="w-full py-10 md:pb-20 gap-10 flex flex-col md:flex-row">
            {/* Left or up */}
          <div data-aos="fade-up" className="md:w-1/2  px-7 md:px-16 flex flex-col items-start">
            <h2 className="flex gap-2 text-sm text-white text-start items-center pb-4">
              <span className="uppercase">
                CONNECT WITH US
              </span>
            </h2>
            <h1 className="title text-pretty text-white">
              Got a general query? <br /> We are here to help
            </h1>
            <h2 className=" text-neutral-400">
              Contact us now to explore the best financial solutions tailored
              for you.
            </h2>
          </div>
          {/* Right or bottom */}
          <div className="w-full md:w-1/2 text-white flex flex-col gap-6">
          <form
            data-aos="fade-up"
            data-aos-delay="400"
            className="w-2/3 flex flex-col gap-5"
          >
            <div className="w-full flex flex-col gap-4">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                required
                className="bg-transparent border px-4 py-3 border-form-stroke rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="eg. John Doe"
                type="text"
                name="name"
              />
            </div>
            <div className="w-full flex flex-col gap-4">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                required
                className="bg-transparent border px-4 py-3 border-form-stroke rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="eg. 123 456 789"
                type="text"
                name="phoneNumber"
              />
            </div>
            <div className="w-full flex flex-col gap-4">
              <label htmlFor="email">Email</label>
              <input
                required
                id="email"
                className="bg-transparent border px-4 py-3 border-form-stroke rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="eg. johnsmith@gmail.com"
                type="email"
                name="email"
              />
            </div>
            <div className="w-full flex flex-col gap-4">
              <label htmlFor="message">Message</label>
              <textarea
                required
                id="message"
                name="message"
                className="bg-transparent border px-4 py-3 border-form-stroke rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Write here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white hover:shadow-card hover:bg-primary duration-300 hover:text-white w-fit px-8 py-3.5 text-black rounded-[32px] font-semibold"
            >
              Submit
            </button>
          </form>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex max-md:flex-col justify-around py-10 aos-init aos-animate"
        >
          <div className="flex flex-col gap-2 text-white">
            <h1 className="font-bold text-xl pb-2 text-white">Phone Number</h1>
            <a className="text-[#ffffff90]" href="/">
              +255 745 630 333
            </a>
            <a className="text-[#ffffff90]" href="/">
              +255 657 444 777
            </a>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="font-bold text-xl pb-2 text-white">Email Address</h1>
            <a className="text-[#ffffff90]" href="/">
              haider@a1associates.co.tz
            </a>
            <a className="text-[#ffffff90]" href="/">
              secretary@a1associates.co.tz
            </a>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="font-bold text-xl pb-2 text-white">Working Days</h1>
            <p className="text-[#ffffff90]">Monday - Saturday</p>
            <a className="text-[#ffffff90]" href="/">
              0900 hrs - 1230 hrs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
