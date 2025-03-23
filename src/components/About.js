import { about, socialmedia } from "../data";

export default function About() {
  return (
    <section id="about" className="relative flex-grow">
      <div className="absolute w-full h-full bg-transparent blur-2xl -z-10">
        <div className="absolute rounded-full -z-50 bg-stone-200 w-44 h-44"></div>
        <div className="absolute rounded-full -z-50 bg-stone-200 w-20 h-20 top-40 right-16"></div>
        <div className="absolute rounded-full -z-50 bg-violet-700 w-12 h-12 bottom-16 left-2/3"></div>
      </div>
      <div className="md:mx-20 h-full">
        <div className="container mx-auto h-full flex flex-col md:flex-row-reverse items-center justify-center">
          <div className="w-1/2 lg:w-2/5 lg:max-w-lg">
            <img
              className="object-cover object-center rounded-full mb-14"
              alt="face"
              src="./images/face.jpg"
            />
          </div>
          <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, it's me Gary{" "}
            </h1>
            <p className="mb-8 leading-relaxed">{about.text}</p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See What I've Built
              </a>
            </div>
            <div className="flex flex-row w-full mt-8">
              <a
                href={socialmedia.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="./images/github.png"
                  alt="github-logo"
                  className="w-7"
                />
              </a>
              <a
                href={socialmedia.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="./images/linkedin.png"
                  alt="linkedin-logo"
                  className="w-7 ml-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
