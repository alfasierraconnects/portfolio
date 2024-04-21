import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetInTouch = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    if (
      event.target.name.value.trim() !== "" &&
      event.target.email.value.trim() !== "" &&
      event.target.message.value.trim() !== ""
    ) {
      const formData = new FormData(event.target);

      formData.append("access_key", "b74727bc-561d-47f5-bfd0-25c733679e36");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        toast.success("Message sent successfully. Thank You!");
      } else {
        toast.error("Error sending Message. Pardon me!");
      }
    } else {
      toast.error("Incomplete Information");
    }
  };
  return (
    <div id="contactMe" className="text-gray-300 mt-16 my-10">
      <ToastContainer />
      <h4 className="text-xl underline underline-offset-4 decoration-blue-400 font-semibold text-center">
        Get in touch with me
      </h4>
      <form
        onSubmit={onSubmit}
        className="flex flex-col container w-[90%] sm:w-[80%] lg:w-[66%] mx-auto"
      >
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
