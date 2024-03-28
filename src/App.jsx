import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./assets/data-animation.json";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMessage } from "react-icons/ai";
import "./index.css";
import imagess from "./assets/photoside.jpg";
import Projects from "./components/projects";

function App() {
  return (
    <main className=" bg-white px-10 dark:bg-gray-900 text-xl md:px-20 lg:px-96 ">
      {/* TOP MENU AND HERO PAGE PART */}

      <section className="min-h-screen">
        <nav className="py-10 mb-12 dark:text-white flex justify-between">
          <h1 className="text-xl">Brayan</h1>
          <ul className="hidden md:flex content-start gap-10">
            <li>
              <a href="#about_section">About</a>
            </li>
            <li>
              <a href="#experience_section">Experience</a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/brayanhere/">
                Contact
              </a>
            </li>
          </ul>
          {/* <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul> */}
          {/* <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillMessage />
          </div> */}
          <ul className="flex gap-10">
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/brayanhere/">
                <AiFillLinkedin className=" cursor-pointer text-2xl" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/brayanhere">
                <AiFillGithub className=" cursor-pointer text-2xl" />
              </a>
            </li>
            <li>
              <AiFillMessage className=" cursor-pointer text-2xl" />
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <div className="w-80 mx-auto">
            <Lottie animationData={groovyWalkAnimation} loop={true} />
          </div>
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            hi, Brayan here.
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Tech Graduate
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-xl">
            I'm a graduate tech student from Newcastle Upon Tyne, United
            Kingdom. Fascinated by big data and emerging tech, I am driven to
            unlock insights and pioneer innovative solutions. My passion lies in
            navigating the dynamic landscape of data analytics, transforming
            complexity into actionable strategies for the future.
          </p>
          <a target="_blank" href="https://www.linkedin.com/in/brayanhere/">
            <button className="border-2 border-teal-600 px-20 py-5 text-lime-50 flex gap-2 mx-auto">
              <AiFillLinkedin className=" text-2xl" />
              <p>Say hi!</p>
            </button>
          </a>
        </div>
      </section>

      {/* ABOUTME SECTION */}
      <section>
        <a id="about_section">
          <div className="text-lime-50 w-11/12 md:w-9/12 mx-auto">
            <h3 className="text-5xl pb-5"> / about me</h3>
            {/* flex box for two columns under about me heading */}
            <div className="flex text-slate-400">
              {/* first column for about me */}
              <div className="grow">
                <p className=" pb-10">
                  I am a recent computer science graduate, currently searching
                  for entry level or graduate job in data and tech related
                  roles. Meanawhile I am continuosly learning as technology
                  rapidly growing everday.
                </p>
                <p className=" pb-6">
                  Some of the technologies I am learning and working with
                </p>
                <div className=" flex gap-10">
                  <ul>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>Reactjs</li>
                  </ul>
                  <ul>
                    <li>Pandas</li>
                    <li>Scikit Learn</li>
                    <li>Matplotlib</li>
                  </ul>
                  <ul>
                    <li>AWS</li>
                    <li>CI/CD</li>
                    <li>Tableau</li>
                  </ul>
                </div>
                <p className=" py-4">
                  Beyond work, I enjoy staying abreast of scientific
                  advancements. Additionally, I engage in fitness activities and
                  find pleasure in preparing nutritious meals.
                </p>
              </div>
              {/* second column with picture */}
              <div className="max-w-72 hidden md:flex">
                <img src={imagess} />
              </div>
            </div>
            {/* projects section from here */}
            <a id="experience_section">
              <div className=" mt-40">
                <h1 className=" text-5xl">/ projects and experiences </h1>
                <Projects />
              </div>
            </a>
          </div>
        </a>
      </section>
      <section>
        <div className=" text-center py-60 text-slate-500">
          <p>Built and designed by Brayan A.</p>
          <p>All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}

export default App;
