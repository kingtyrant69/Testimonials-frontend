import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { FaArrowDown, FaArrowUp, FaHeart, FaRegHeart } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { FiDownload, FiGift, FiShare } from "react-icons/fi";
import { BiPencil, BiTrash } from "react-icons/bi";

const TestimonialBox = () => {
  const [starRating, setStarRating] = useState(3);
  const [review, setReview] = useState("This is a Review");
  const [name, setName] = useState("man");
  const [email, setEmail] = useState("aman@gmail.com");
  const [time, setTime] = useState("  Jul 29, 2024, 3:48:50 PM");
  const [type, setType] = useState("Text");
  const [heartClicked, setHeartClicked] = useState(true);
  const [accordionClick, setAccordionClick] = useState(false)

  return (
    <div className="w-full">
      <div className="bg-slate-600 bg-opacity-40 hover:bg-opacity-60 p-8 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="bg-white p-2 rounded-full w-20 items-center flex justify-center text-sm font-semibold text-blue-600">
            {type}
          </div>
          {heartClicked ? (
            <FaHeart
              size={25}
              className="text-red-500 cursor-pointer transition"
              onClick={() => setHeartClicked(!heartClicked)}
            />
          ) : (
            <FaRegHeart
              className="text-red-500 cursor-pointer transition"
              size={25}
              onClick={() => setHeartClicked(!heartClicked)}
            />
          )}
        </div>
        <div className="flex items-center py-3 gap-1">
          {Array.from({ length: starRating }).map((it, index) => (
            <IoStar key={index} className="text-orange-500" size={35} />
          ))}
        </div>
        <div>
          <p className="text-md">{review}</p>
        </div>
        <div className="py-2 flex gap-36">
          <div className="flex flex-col">
            <div>
              <p className="font-bold">Name</p>
              <p>{name}</p>
            </div>
            <div className="py-4">
              <p className="font-bold">Submitted At</p>
              <p>{time}</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="font-bold">Email</p>
            <p>{email}</p>
          </div>
        </div>
        {(accordionClick)?<div className="">
          <div className="grid grid-cols-3">
            <div className="col-span-1"></div>
            <div className="flex items-center gap-5">
              <div className="p-1 flex items-center cursor-pointer gap-1 hover:bg-slate-500 hover:rounded-full">
                <GoTag size={20} />
                Tags
              </div>
              <div className="p-1 flex items-center cursor-pointer gap-1 hover:bg-slate-500 hover:rounded-full">
                <FiShare size={20} />
                Share
              </div>
              <div className="p-1 flex items-center cursor-pointer gap-1 hover:bg-slate-500 hover:rounded-full">
                <FiDownload size={20} />
                Download
              </div>
              <div className="p-1 flex items-center cursor-pointer gap-1 hover:bg-slate-500 hover:rounded-full">
                <BiPencil size={20} />
                Edit
              </div>
              <div className="p-1 flex items-center gap-1 cursor-pointer hover:text-red-500 hover:rounded-full">
                <BiTrash size={20} />
                Delete
              </div>
            </div>
          </div>
          <div className="flex justify-between">
          <div className="col-span-11"></div>
          <FaArrowUp className="cursor-pointer" onClick={() => setAccordionClick(!accordionClick)}/>
        </div>
        </div>
    :
        <div className="flex justify-between">
          <div className=""></div>
          <FaArrowDown className="cursor-pointer" onClick={() => setAccordionClick(!accordionClick)}/>
        </div>}
      </div>
    </div>
  );
};

export default TestimonialBox;
