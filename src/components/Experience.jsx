"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  tcs,
  uh,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={uh}
              title="University of Houston"
              subtitle="Instructional Assistant (Developer)"
              date="May 2023 - May 2024"
              para={["- Utilized React for Front-end development and proficiently maintained and optimized the UH Law Web Page, ensuring its seamless functionality and responsiveness resulting in a 20% increase in page loading speed.", " - Used cloud integration solutions to efficiently store and manage classroom recordings, enhancing accessibility and scalability for the educational content, resulting in a 5x increase in overall storage capacity."]}
            />
            <Exp_prop
              img={tcs}
              title="Tata Consultancy Services"
              subtitle="Assistant Systems Engineer"
              date="May 2021 - August 2022"
              para={["- Created and launched an interactive multi-page web application named WUPOS, customized to client requirements using React for Front-end, Java for back-end integration, and SQL for data administration.", " - Competently designed and maintained intricate SQL database schemas, adeptly crafting, and executing complex queries, this helped in reducing the average response time by 60% informing database performance."]}
            />

          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
