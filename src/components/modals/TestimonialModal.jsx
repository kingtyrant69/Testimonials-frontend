import { useEffect, useState } from "react";
import useTestimonialModal from "../../hooks/useTestimonialModal.js";
import Modal from "../Modal";
import propTypes from "prop-types";

const TestimonialModal = ({ isStarRating }) => {
  const testimonialModal = useTestimonialModal();
  const onSubmit = () => {};

  if (!isStarRating) {
    isStarRating = true;
  }

  const [questions, setQuestions] = useState([
    "Who are you / what are you working on?",
    "How has [our product / service] helped you?",
    "What is the best thing about [our product / service]",
  ]);

  const [starRating, setStarRating] = useState(0);
  const [text, setText] = useState("");

  const bodyContent = (
    <div className="flex flex-col justify-center items-center">
      <img src="image.png" className="w-12" />
      <div className="flex items-center justify-center flex-col">
        <h2 className={`px-5 font-semibold text-lg`}>
          Questions <hr className="border-2 border-red-500 f" />
        </h2>
        <ul className="list-disc">
          {!questions ? (
            <></>
          ) : (
            questions.map((question, key) => (
              <li key={key} className={`text-sm text-slate-600 p-1`}>
                {question}
              </li>
            ))
          )}
        </ul>
        {isStarRating ? (
          <div className="rating py-5">
            <input
              type="radio"
              id="star-1"
              name="star-radio"
              value="star-1"
              onClick={setStarRating[1]}
            />
            <label htmlFor="star-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                ></path>
              </svg>
            </label>
            <input
              type="radio"
              id="star-2"
              name="star-radio"
              value="star-1"
              onClick={setStarRating[2]}
            />
            <label htmlFor="star-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                ></path>
              </svg>
            </label>
            <input
              type="radio"
              id="star-3"
              name="star-radio"
              value="star-1"
              onClick={setStarRating[3]}
            />
            <label htmlFor="star-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                ></path>
              </svg>
            </label>
            <input
              type="radio"
              id="star-4"
              name="star-radio"
              value="star-1"
              onClick={setStarRating[4]}
            />
            <label htmlFor="star-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                ></path>
              </svg>
            </label>
            <input
              type="radio"
              id="star-5"
              name="star-radio"
              value="star-1"
              onClick={setStarRating[5]}
            />
            <label htmlFor="star-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                ></path>
              </svg>
            </label>
          </div>
        ) : (
          <></>
        )}
      </div>
      <textarea
        className="border-2 w-2/3 h-36 p-2"
        onChange={(e) => {
          setText[e.target.value];
        }}
      ></textarea>
      <div className="flex flex-col w-2/3 py-2">
        <label htmlFor="Your Name">
          Your Name<span className="text-red-700">*</span>
        </label>
        <input type="text" className="border-2 p-2" />
      </div>
      <div className="flex flex-col w-2/3 py-2">
        <label htmlFor="Email">
          Your Email<span className="text-red-700">*</span>
        </label>
        <input type="text" className="border-2 p-2" />
      </div>
    </div>
  );
  const footerContent = (
    <div className="flex pt-10 gap-3">
    <input type="checkbox" className="w-6 checked:bg-blue-900"/>
    <p className="pt-6">
      I give permission to use this testimonial across social channels and
      other marketing efforts
    </p>
  </div>
  )
  return (
    <div>
      <Modal
        isOpen={testimonialModal.isOpen}
        onClose={testimonialModal.onClose}
        onSubmit={onSubmit}
        title="Write a review"
        actionLabel="Submit"
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

TestimonialModal.propTypes = {
  isStarRating: propTypes.bool,
};

export default TestimonialModal;
