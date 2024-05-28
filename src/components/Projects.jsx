import Project_prop from "./Project_prop";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiDjango,
  SiNpm,
  SiPycharm,
  SiPython,
  SiR,
  SiReact,
  SiRstudio,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import {
<<<<<<< HEAD
  SiPycharm,
  SiPython,
  SiR,
  SiRstudio,
  SiCsharp,
  SiUnity,
  SiAdobephotoshop,
  SiTensorflow,
  SiNumpy
} from "react-icons/si";
import {
  uh,
=======
  uh, Memo, AQP
>>>>>>> f0ea6b0927a42735a5ba2d93eb87a5c8e06a9f56
} from "../constants/Constant";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >

          <Project_prop
<<<<<<< HEAD
            title="Anaylsis of Amazon Co-Purchasing Data"
            para="Implemented ANN to predict Amazon co-purchase relations, the project covered data preprocessing, feature extraction, model training, and evaluation, classifying items into immediate co-purchase, possible but not immediate co-purchase, and non-co-purchase categories."
            img={uh}
=======
            title="MemoDairy – Capturing and Reliving Life’s Moments (iOS Application)"
            para="Developed an iOS application, MemoDairy, leveraging Swift and Xcode, to enable users to capture and relive their life's moments seamlessly."
            img={Memo}
>>>>>>> f0ea6b0927a42735a5ba2d93eb87a5c8e06a9f56
            link=""
            github_link=""
            react={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="Pycharm" arrow>
                <IconButton>
                  <SiPycharm className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Tensorflow" arrow>
                <IconButton>
                  <SiTensorflow className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
<<<<<<< HEAD
            title="Comprehensive Game Development Project"
            para="Developed a game by creating art assets, including main and enemy characters, using Clip Studio Paint. Integrated assets and backgrounds into Unity, programmed player movements and animations using C#."
            img={uh}
            link=""
            github_link=""
            react={
              <Tooltip title="C#" arrow>
                <IconButton>
                  <SiCsharp className="dark:text-slate-200 text-black" />
=======
            title="Automatic Random Question Paper Generation System"
            para="Developed an innovative Automatic Question Paper Generator application utilizing natural language processing techniques, resulting in a 50% reduction in time spent on question paper creation compared to manual methods."
            img={AQP}
            link=""
            github_link=""
            react={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
>>>>>>> f0ea6b0927a42735a5ba2d93eb87a5c8e06a9f56
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
<<<<<<< HEAD
              <Tooltip title="Unity" arrow>
                <IconButton>
                  <SiUnity className="dark:text-slate-200 text-black" />
=======
              <Tooltip title="Pycharm" arrow>
                <IconButton>
                  <SiPycharm className="dark:text-slate-200 text-black" />
>>>>>>> f0ea6b0927a42735a5ba2d93eb87a5c8e06a9f56
                </IconButton>
              </Tooltip>
            }
            vite={
<<<<<<< HEAD
              <Tooltip title="Adobe Photoshop" arrow>
                <IconButton>
                  <SiAdobephotoshop className="dark:text-slate-200 text-black" />
=======
              <Tooltip title="Django" arrow>
                <IconButton>
                  <SiDjango className="dark:text-slate-200 text-black" />
>>>>>>> f0ea6b0927a42735a5ba2d93eb87a5c8e06a9f56
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Comprehensive Analysis of Naturalistic Driving Data"
            para="Utilized advanced exploratory data analysis and statistical modeling techniques in R to scrutinize the physiological data, resulting in deep insights into driving behaviors and responses."
            img={uh}
            link=""
            github_link=""
            react={
              <Tooltip title="RStudio" arrow>
                <IconButton>
                  <SiRstudio className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="R" arrow>
                <IconButton>
                  <SiR className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Interpolation to Speed-up NUFFT"
            para="Implemented Non-Uniform Fast Fourier Transforms (NUFFTs) to reconstruct irregularly sampled frequency domain data into the physical domain, resulting in 40% reduction."
            img={uh}
            link=""
            github_link=""
            react={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
<<<<<<< HEAD
              <Tooltip title="NumPy" arrow>
                <IconButton>
                  <SiNumpy className="dark:text-slate-200 text-black" />
=======
              <Tooltip title="Pycharm" arrow>
                <IconButton>
                  <SiPycharm className="dark:text-slate-200 text-black" />
>>>>>>> f0ea6b0927a42735a5ba2d93eb87a5c8e06a9f56
                </IconButton>
              </Tooltip>
            }
          />

        </div>
      </div>
    </section>
  );
};
export default Projects;
