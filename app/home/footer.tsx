import React from 'react';

const Footer: React.FC = () => {
    return (
        <section className="w-full">
            <div className="bg-basecolor max-width rounded-tl-[12px] md:rounded-tl-[30px] rounded-tr-[12px] md:rounded-tr-[30px] pt-20 px-4 lg:px-20 pb-10 w-full mx-auto">
                <div className="md:px-1 w-full">
                    <div className="flex justify-center items-center flex-col gap-5 border-b border-[#ffffff90] pb-20">
                        <h1 className="title text-white text-center">
                            Do You Have Any Question? Feel Free To Contact Us
                        </h1>
                        <a
                            className="bg-white hover:shadow-card hover:bg-basecolor duration-300 hover:text-white w-fit px-8 font-medium py-3.5 text-black rounded-[32px]"
                            href="/contact"
                        >
                            Reach out to us
                        </a>
                    </div>
                    <div className="py-20 flex max-md:gap-6 max-md:flex-col justify-between text-white">
                        <div className="flex flex-col gap-6 max-md:text-[18px] md:text-[28px]">
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/services">Services</a>
                            <a href="/contact">Contact</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="max-md:text-[18px] md:text-[28px]">Contact</h1>
                            <div className="flex flex-col">
                                <h3 className="text-[18px]">Email</h3>
                                <a className="text-grey-light" target="_blank" href="mailto:haider@a1associates.co.tz">
                                    haider@a1associates.co.tz
                                </a>
                                <a className="text-grey-light" target="_blank" href="mailto:secretary@a1associates.co.tz">
                                    secretary@a1associates.co.tz
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-[18px]">Phone</h3>
                                <a className="text-grey-light" href="tel:+255 745 630 333">
                                    +255 745 630 333
                                </a>
                                <a className="text-grey-light" href="tel:+255 657 444 777">
                                    +255 657 444 777
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-[18px]">Address</h3>
                                <a
                                    className="text-grey-light"
                                    target="_blank"
                                    href="https://maps.app.goo.gl/UHYBNHbFSSyd1quF8"
                                >
                                    Plot No. G6, Chaburuma Road,
                                    <br /> Off Ali Hassan Mwinyi Rd,
                                    <br /> Dar es Salaam, Tanzania
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col md:items-end justify-center gap-14 max-md:pt-10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d507124.042431554!2d39.274042!3d-6.781223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c63f5c9b193%3A0x2e272dd70459a913!2sJangid%20Plaza!5e0!3m2!1sen!2sin!4v1718804681842!5m2!1sen!2sin"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-72 md:h-96"
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col max-md:gap-4 justify-between text-white py-6 border-t border-[#ffffff90]">
                        <div className="flex gap-5 text-grey-light text-[16px]">
                            <a href="/">Privacy</a>
                        </div>
                        <div className="flex max-md:text-lg max-md:flex-col max-md:text-center items-center md:gap-2 text-grey-light">
                            <span>© Copyright 2024. All rights reserved.</span>
                            <span className="text-white">
                                Designed and Developed by{' '}
                                <a target="_blank" href="https://dotsyndicate.com">
                                    CloudFixMedia
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
