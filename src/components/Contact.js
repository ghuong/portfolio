import React from "react";
import { contact, socialmedia } from "../data";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message, subject: contact.emailSubject }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative min-h-screen flex items-center">
      <div className="container px-10 py-10 mx-auto mt-16 flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 items-end justify-start relative hidden md:flex">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src={contact.map}
          />
          <div className="bg-color-second dark:bg-darkmode-color-second relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="font-poppins font-bold dark:text-white tracking-widest text-xs mb-2">
                ADDRESS
              </h2>
              <p className="font-poppins text-sm text-stone-800 dark:text-stone-300">
                {contact.location}
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="font-poppins font-bold dark:text-white tracking-widest text-xs mb-1">
                EMAIL
              </h2>
              <a
                href={`mailto: ${contact.email}`}
                className="font-poppins text-sm text-indigo-900 dark:text-indigo-300"
              >
                {contact.email}
              </a>
              <div className="flex gap-2 mt-2">
                <a
                  href={socialmedia.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {/* <img
                    src="./images/github.png"
                    alt="github-logo"
                    className="w-6"
                  /> */}
                  <i className="bx bxl-github text-2xl dark:text-white hover:dark:text-color-main transition-colors duration-300 hover:text-color-main" />
                </a>
                <a
                  href={socialmedia.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="bx bxl-linkedin-square text-2xl dark:text-white hover:dark:text-color-main transition-colors duration-300 hover:text-color-main" />
                </a>
              </div>
              {/* <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">contact.phone</p> */}
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="dark:text-white sm:text-4xl text-3xl mb-3 font-abrilFatface">
            Contact Me
          </h2>
          <p className="font-poppins leading-relaxed mb-5 dark:text-white">
            {contact.text}
          </p>
          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-sm dark:text-gray-400"
            ></label>
            <input type="hidden" name="subject" value={contact.emailSubject} />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded border outline-none dark:text-gray-100 focus:ring-2
                py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                bg-stone-100 border-color-second dark:bg-stone-800 dark:border-stone-700
                focus:ring-darkmode-dark-blue focus:border-dark-blue dark:focus:ring-dark-blue dark:focus:border-darkmode-dark-blue"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm dark:text-gray-400"
            ></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded border outline-none dark:text-gray-100 focus:ring-2
                py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                bg-stone-50 border-color-second dark:bg-stone-800 dark:border-stone-700
                focus:ring-darkmode-dark-blue focus:border-dark-blue dark:focus:ring-dark-blue dark:focus:border-darkmode-dark-blue"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm dark:text-gray-400"
            ></label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              onChange={(event) => setMessage(event.target.value)}
              className="w-full h-32 resize-none rounded border outline-none dark:text-gray-100 focus:ring-2
                py-1 px-3 leading-6 transition-colors duration-200 ease-in-out
                bg-stone-50 border-color-second dark:bg-stone-800 dark:border-stone-700
                focus:ring-darkmode-dark-blue focus:border-dark-blue dark:focus:ring-dark-blue dark:focus:border-darkmode-dark-blue"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-color-main border-0 py-2 px-6 focus:outline-none hover:bg-violet-500 rounded text-lg font-poppins flex items-center justify-center gap-1"
          >
            <i className="bx bx-send text-2xl dark:text-white" />
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
