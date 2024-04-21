import React from "react";

const GetInTouch = () => {
  return (
    <div className="text-gray-300 mt-16 my-10">
      <h4 className="text-xl underline underline-offset-4 decoration-blue-400 font-semibold text-center">
        Get in touch with me
      </h4>
      <form className="flex flex-col container w-[90%] sm:w-[80%] lg:w-[66%] mx-auto">
        <label className="mt-6 font-medium" htmlFor="name">
          Your name:
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name here"
          className="rounded-md bg-cyan-100 p-2 my-2 text-cyan-900 font-medium outline-none focus:ring-4 ring-cyan-700"
          required
        />
        <label className="sm:mt-6 font-medium" htmlFor="email">
          Your Email ID:
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your emailID here"
          className="rounded-md bg-cyan-100 p-2 my-2 text-cyan-900 font-medium outline-none focus:ring-4 ring-cyan-700"
          required
        />
        <label className="sm:mt-6 font-medium" htmlFor="message">
          Your Message:
        </label>
        <textarea
          name="message"
          placeholder="Type your message here"
          className="rounded-md bg-cyan-100 p-2 my-2 text-cyan-900 font-medium outline-none focus:ring-4 ring-cyan-700"
          required
          cols="30"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="p-2 px-4 mx-auto mt-4 rounded-md ring-2 ring-gray-300 active:ring-cyan-500 hover:ring-pink-400 shadow-md ring-inset"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default GetInTouch;
