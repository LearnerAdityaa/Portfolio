import React, { useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const API_KEY = import.meta.env.VITE_API_KEY;
function Conatct() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: API_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("message sent");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px:24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Connect With Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3>Let's Talk</h3>
            <p>
              I'm open to discussing web development
              <br /> projects or partnership opportunities.
            </p>
            <div className="mb-4 mt-3">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                revengeforcoc@gmail.com
              </a>
            </div>
            <div className="mb-4 ">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <span>+9779844806982</span>
            </div>
            <div className="mb-4 ">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <span>Kathmandu,Nepal</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Drop Message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>
              <input
                type="submit"
                value="Send"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conatct;
