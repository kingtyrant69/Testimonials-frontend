import { FaVideo, FaPencilAlt } from "react-icons/fa";
// import Button from './Button.jsx'
import propTypes from "prop-types";
import { Theme } from "@radix-ui/themes";
import useTestimonialModal from "../hooks/useTestimonialModal.js";

const LivePreview = ({ header, questions, customMessage, theme, isLarge }) => {
  const testimonialModal = useTestimonialModal();
  if (!questions) {
    questions = [
      "Who are you/What are you working on??/What is your sex ratio",
      "How are you",
      "How you doing",
    ];
  }
  const handleClick = ()=>{
    testimonialModal.onOpen()
  }

  return (
    <div className={`flex flex-col items-center justify-center shadow-slate-500 rounded-full`}>
      <fieldset className={`${isLarge?'':'border-2'} border-gray-300 rounded p-4 ${isLarge?'lg:w-1/2 w-full':'w-40'}`}>
        {isLarge?<></>:<legend className="rounded-full bg-green-400 font-bold py-1 px-5 text-sm text-blue-800">
          Live Preview - Testimonial Page
        </legend>}
      <Theme appearance={theme}>
        <div className="p-5">
          <div className="flex justify-center items-center flex-col">
            <img src="/image.png" className={`${isLarge?"max-h-32":"max-h-12"}`} alt="logo" />
            <h1 className={`font-bold ${isLarge?'text-5xl':'text-3xl'} text-slate-600 py-3`}>
              {!header ? "Header goes here..." : header}
            </h1>
            <p className={`py-4 ${isLarge?'text-xl':''}`}>
              {!customMessage
                ? "Your custom message goes here..."
                : customMessage}
            </p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className={`px-5 font-semibold ${isLarge?'py-5 text-2xl':'text-lg'}`}>
              Questions <hr className="border-2 border-red-500 mx-4 " />
            </h2>
            <ul className="list-disc">
              {(!questions)?<></>:questions.map((question, key) => (
                <li key={key} className={`${isLarge?'text-lg':''} p-2`}>
                  {question}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${isLarge?'flex justify-center items-center gap-10 flex-row':''}`}>
          <button className={`flex items-center justify-center ${isLarge? 'h-16 w-60' :'h-10 w-80'} gap-5 cursor-pointer my-5 bg-green-700 text-white hover:bg-opacity-70`}>
            <FaVideo />
            Record a Video
          </button>
          <button className={`flex items-center justify-center ${isLarge? 'h-16 w-60' :'h-10 w-80'} gap-5 cursor-pointer my-5 bg-slate-800 text-white hover:bg-opacity-70`} onClick={handleClick}>
            <FaPencilAlt />
            Send In Text
          </button>
          </div>
        </div>
    </Theme>
      </fieldset>
    </div>
  );
};

LivePreview.propTypes = {
  header: propTypes.string,
  questions: propTypes.arrayOf(propTypes.string),
  customMessage: propTypes.string,
  theme:propTypes.string,
  isLarge:propTypes.bool
};
export default LivePreview;
