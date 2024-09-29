import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import LivePreview from "../../LivePreview.jsx";
import Modal from "../../Modal.jsx";
import useSpaceModal from "../../../hooks/useSpaceModal.js";
import {
  createSpace, 
  deleteSpace, 
  getSpaceById, 
  getUserSpaces, 
  updateSpace 
} from '../../../services/space.service.js'
import { Button } from "@radix-ui/themes"

const SpaceModal = () => {
  const SpaceModal = useSpaceModal();
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  


  const handleSubmit = async() => {
    try {
      setIsLoading(true);
      const response = await createSpace({
        header: header,
        customMessage: customMessage,
        theme: theme,
        spaceName: space,
        isStarRating: starRating,
        questions: questions
      })  
      if(response){
        setFormSubmitted(true)
      }
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  };


  const [space, setSpace] = useState("");
  const [header, setHeader] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [questions, setQuestions] = useState([
    "Who are you/ what are you working on?",
    "How has [our product / service] helped you?",
    "What is the best thing about [our product / service]",
  ]);
  const [starRating, setStarRating] = useState(false)
  const [theme, setTheme] = useState(false);

  const deleteQuestion = (index) => {
    const q = questions.filter((c,i) => i != index);
    setQuestions(q);
  };

  const updateQuestions = (index, value) => {
    const q = questions.map((c, i) => {
      if (i === index) {
        return value;
      } else {
        return c;
      }
    });
    setQuestions(q);
  };

  const bodyContent = (
    <>
    {formSubmitted ? 
    <div>
        <p className="text-black font-medium">Your Space has been created.</p>
        <Button onClick={() => {SpaceModal.onClose(); setFormSubmitted(!formSubmitted)}}>Back to dashboard</Button>
    </div>
:<div className="grid grid-cols-2 text-black">
      <form className="col-span-1 flex flex-col gap-2">
        <label htmlFor="Space Name">
          Space Name<span className="text-red-700">*</span>
        </label>
        <input
          placeholder="Your Space Name"
          onChange={(e) => setSpace(e.target.value)}
          value={space}
          className="bg-white text-black border m-2 p-2"
          required
        />
        <label htmlFor="headerTitle">
          Header Title<span className="text-red-700">*</span>
        </label>
        <input
          placeholder="Your Header"
          onChange={(e) => setHeader(e.target.value)}
          value={header}
          className="bg-white text-black border-2 m-2 p-2 "
          required
        />
        <label htmlFor="customMessage">
          Your custom message
          <span className="text-red-700">*</span>
        </label>
        <textarea
          name="customMessage"
          id="customMessage"
          placeholder="Write a warm message to your customers, and give them simple directions on how to make the best testimonial."
          onChange={(e) => {setCustomMessage(e.target.value)}}
          className="bg-white text-black border m-2 p-2 h-40"
        />
        <h2 className="flex justify-between">
          Questions
          <div tabIndex="0" className="plusButton" onClick={()=>{setQuestions([...questions,""])}}>
            <svg
              className="plusIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <g mask="url(#mask0_21_345)">
                <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
              </g>
            </svg>
          </div>
        </h2>
        <ul>
          {questions.map((question, index) => (
            <li className="flex items-center" key={index}>
              <input
                className="bg-white text-black border px-4 py-3 m-4 w-full text-sm"
                type="text"
                value={question}
                onChange={(e) => updateQuestions(index, e.target.value)}
              />
              <FaTrash className='cursor-pointer' onClick={()=>{deleteQuestion(index)}} />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 px-2">
        <label htmlFor="starRating">Collect Star Ratings:</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onClick={()=>{setStarRating(!starRating)}}/>
            <div className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
          </label>
          <label htmlFor="theme">Theme:</label>
          <label htmlFor="switch" className="switch">
            <input id="switch" type="checkbox" onClick={()=>{setTheme(!theme)}} defaultChecked/>
            <span className="slider"></span>
            <span className="decoration"></span>
          </label>
        </div>
      </form>
      <LivePreview
        theme={theme? 'dark':'light'}
        header={header}
        customMessage={customMessage}
        questions={questions}
        isLarge={false}
      />
    </div>}
    </>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={SpaceModal.isOpen}
      onClose={SpaceModal.onClose}
      onSubmit={handleSubmit}
      title="Create a new Space"
      actionLabel="Create a new Space"
      body={bodyContent}
      modalName='space'
    />
  );
};

export default SpaceModal;
