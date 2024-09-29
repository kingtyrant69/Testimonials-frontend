import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { SlGraph } from "react-icons/sl";
import { BiPencil, BiSearchAlt2 } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TestimonialBox from "../../../components/testimonialBox";

const ProductDetails = () => {
  const { spaceId } = useParams();
  const [header, setHeader] = useState("Aman Website");
  const [selectedMenu, setSelectedMenu] = useState("All");
  const inboxLinks = ["All", "Video", "Text", "Archived", "Liked"];
  return (
    <div>
      <section className="flex items-center border border-slate-600 border-dotted border-x-0 justify-between lg:p-10 p-5">
        <div className="flex gap-5">
          <img src="/image.png" className="h-12" />
          <div className="">
            <p className="lg:text-3xl text-xl font-semibold">{header}</p>
            <span className="text-slate-400 text-sm lg:text-base">
              <Link to={`/${spaceId}`}>
                Space public URL: <u>https://testimonial.to/{spaceId}</u>
              </Link>
            </span>
          </div>
        </div>
        <button className="bg-white px-4 py-3 hover:scale-105 hover:opacity-20 flex items-center justify-center gap-3 rounded-lg text-black">
          <BiPencil size={22} />
          <p className="lg:flex hidden tracking-tight font-semibold">
            Edit Space
          </p>
        </button>
      </section>
      <div className="grid lg:grid-cols-4 grid-cols-2 px-8 py-5">
        <div className="col-span-1">
          <div className="py-10">
            <h1 className="font-bold text-lg text-white text-opacity-70">
              INBOX
            </h1>
            <ul className=" py-2">
              {inboxLinks.map((link) => (
                <li
                  key={link}
                  className={`${
                    link === selectedMenu
                      ? "border border-slate-800 bg-slate-700 rounded-lg"
                      : ""
                  } p-[0.4rem] hover:border hover:border-slate-800 hover:bg-opacity-50 hover:bg-slate-800 hover:rounded-lg cursor-pointer flex items-center gap-5`}
                  onClick={() => setSelectedMenu(link)}
                >
                  <BsDot size={25} />
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg text-white text-opacity-70">
              EMBEDS & METRICS
            </h1>
            <ul className="py-2">
              <li
                className={`${
                  "Wall Of Love" === selectedMenu
                    ? "border border-slate-800 bg-slate-700 rounded-lg"
                    : ""
                } p-[0.4rem] border-0 hover:border hover:border-slate-800 hover:bg-opacity-50 hover:bg-slate-800 hover:rounded-lg cursor-pointer flex items-center gap-5`}
                onClick={() => setSelectedMenu("Wall Of Love")}
              >
                <CiHeart />
                Wall Of Love
              </li>
              <li
                className={`${
                  "Metrics" === selectedMenu
                    ? "border border-slate-800 bg-slate-700 rounded-lg"
                    : ""
                } p-[0.4rem] border-0 hover:border hover:border-slate-800 hover:bg-opacity-50 hover:bg-slate-800 hover:rounded-lg cursor-pointer flex items-center gap-5`}
                onClick={() => setSelectedMenu("Metrics")}
              >
                <SlGraph />
                Metrics
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-3 m-20">
            <div className="text-white flex justify-center gap-1">
                <BiSearchAlt2 size={30} className="my-3"/>
                <input type="text" className="w-full bg-transparent text-lg p-1 focus:outline-none" placeholder="Search by email, name or Testimonial keywords"/>
            </div>
            <br />
            <div>
                <TestimonialBox/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
