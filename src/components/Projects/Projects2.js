import React from "react";
import logomora from "../../Assets/Projects/mora/mora.png";
import logotesmo from "../../Assets/Projects/tesmo/thesmophoria.png";
import logometavero from "../../Assets/Projects/metavero/metavero.png";
import pikestore from "../../Assets/Projects/pikestore/pikestore.png";
import logopikestore from "../../Assets/Projects/pikestore/logopikestore.png";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Projects() {
  const ProjectCard = ({ name, year, img, id, detail, type, tech, link }) => {
    const [test, setTest] = React.useState('');
    const navigate = useNavigate();
    return (
      <div
        id={`#${id}`}
        className="relative"
        onMouseEnter={() => setTest(id)}
        onMouseLeave={() => setTest('')}
      >
        <div
          className={`${
            test === id ? "opacity-100" : "opacity-0"
          } cursor-pointer transition-all 2s ease-in w-full absolute bg-white h-full hover:shadow-lg hover:cursor-pointer`}
        >
          <div
            onClick={() => navigate(`/project/${name}`)}
            className="p-4  flex flex-col justify-between h-full cursor-pointer"
          >
            <h1 className="text-[1rem] text-left font-bold text-blue-500">
              {name} - <span className="text-black">{year}</span>
            </h1>
            <p className=" rounded-lg text-left text-black">{detail}</p>
            <div className="grid grid-cols-3 w-full  items-center font-bold text-[0.8rem]">
              {tech &&
                tech.map((a) => (
                  <p className="bg-purple-400 rounded-lg mr-2 py-2 text-white">
                    {a}
                  </p>
                ))}
              {/* 
              <button
                onClick={() => navigate(`/project/${name}`)}
                className="border-2 rounded-lg border-blue-500 bg-white  text-blue-500 cursor-pointer "
              >
                View details
              </button>

              <a
                href={link}
                className=" border-2 cursor-pointer rounded-lg no-underline border-blue-500 bg-blue-500   text-white "
              >
                Visit web
              </a> */}
            </div>
          </div>
        </div>
        <div className="w-full h-full shadow-md rounded-lg">
          <img src={img} alt="logo" />
        </div>
      </div>
    );
  };
  return (
    <div className="w-full h-[79vh] flex items-center mt-[30vh] md:mt-[10vh] px-4 md:px-20">
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 ">
        <ProjectCard
          id={1}
          name="Thesmophoria"
          detail="Website for a recognized NFT collection in Solana Blockchain."
          tech={["React Js", "Landing Page"]}
          year={2023}
          img={logotesmo}
          link="https://www.thesmophoria.io/"
        />
        <ProjectCard
        id={2}
        name="Pikestore"
        detail="Ecommerce & Dashboard for Pikestore."
        tech={[
          "React Js",
          "Firebase",
          "Tailwind CSS",
          "Node Js",
          "ZetaSoftware API",
          "Ecommerce",
        ]}
        year={2023}
        img={logopikestore}
        link="https://www.morafit.uy/"
         />
        <ProjectCard
          id={3}
          name="Mora"
          detail="Ecommerce & Dashboard for Morafit Clothes."
          tech={[
            "React Js",
            "Firebase",
            "Tailwind CSS",
            "Node Js",
            "Mercadopago API",
            "Ecommerce",
          ]}
          year={2022}
          img={logomora}
          link="https://www.morafit.uy/"
        />
        <ProjectCard id={4}
          name="Metavero"
          detail="Augmented reality Forniture Web App."
          tech={[
            "React Js",
            "Bootstrap",
            "Node Js",
            "Wordpress Backend",
            "Rebranding",
            "Augmented Reality",
          ]}
          year={2022}
          img={logometavero}
          link="https://www.morafit.uy/" />
      </div>
      {/*    <Fullpage/> */}
    </div>
  );
}

export default Projects;
