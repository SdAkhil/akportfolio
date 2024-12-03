import Project_prop from "./Project_prop";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiPython,
  SiReact,
  SiTableau,
  SiSqlite,
  SiCsharp,
  SiUnity,
  SiAdobephotoshop,
} from "react-icons/si";
import { 
  VscAzureDevops,
  VscAzure,
  VscDatabase,
 } from "react-icons/vsc";
import {
  uh,
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
            title="Eventify – Dynamic Event Management Web Application"
            para="Built a full-stack event management application using React.js for the front-end and ASP.NET Core for back-end logic, allowing users to create, manage, and RSVP for events seamlessly."
            img={uh}
            link=""
            github_link=""
            react={
              <Tooltip title="Azure DevOps" arrow>
                <IconButton>
                  <VscAzureDevops className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Database" arrow>
                <IconButton>
                  <VscDatabase className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Comprehensive Game Development Project"
            para="Developed a game by creating art assets, including main and enemy characters, using Clip Studio Paint. Integrated assets and backgrounds into Unity, programmed player movements and animations using C#."
            img={uh}
            link=""
            github_link=""
            react={
              <Tooltip title="C#" arrow>
                <IconButton>
                  <SiCsharp className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="Unity" arrow>
                <IconButton>
                  <SiUnity className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Adobe Photoshop" arrow>
                <IconButton>
                  <SiAdobephotoshop className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Smart Campus – University Data Visualization and Analytics Platform"
            para="Developed a comprehensive platform to analyze and visualize university data such as student enrollment, faculty performance, and course feedback using Power BI and Tableau."
            img={uh}
            link=""
            github_link=""
            react={
              <Tooltip title="Tableau" arrow>
                <IconButton>
                  <SiTableau className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="Azure" arrow>
                <IconButton>
                  <VscAzure className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Sport Stats – AI-Powered Sports Analytics Platform"
            para="Engineered a platform to analyze player and team performance by processing match data and video feeds using Python Flask and advanced machine learning models."
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
              <Tooltip title="SQLite" arrow>
                <IconButton>
                  <SiSqlite className="dark:text-slate-200 text-black" />
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
