import React from "react";

const Home1 = () => {
  return (
    <section className="text-center px-[10%] py-[6%]">
      <h1 className="px-[10%] text-[60px] leading-none font-medium">
        Get Testimonials from customers with ease
      </h1>
      <br />
      <p className="px-[2%] text-[24px] text-gray-500">
        Collecting testimonials is hard, we get it! So we built Testimonial. In
        minutes, you can collect text and video testimonials from your customers
        with no need for a developer or website hosting.
      </p>
      <br /> 
      <br/>   
      <div className="flex justify-center items-center gap-10 p-2">
        <a href="/dashboard">
          <button className="h-14 cursor-pointer rounded-lg text-md text-white font-medium bg-[#46690D] w-52 hover:scale-105">
            Try FREE Now
          </button>
        </a>
        <button className="h-14 cursor-pointer rounded-lg text-md bg-none font-medium border-2 border-[#46690D] w-80 hover:scale-105">
          Talk to Us
        </button>
      </div>
    </section>
  );
};

export default Home1;
