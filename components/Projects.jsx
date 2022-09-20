import React from "react";
import pos from "../public/assets/projects/pos.jpg";
import CRWD from "../public/assets/projects/CRWD.jpeg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-screen-lg px-2 py-16 mx-auto">
        {/* <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p> */}
        <h2 className="py-4">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <ProjectItem
            title="Point of Sales"
            backgroundImg={pos}
            projectUrl="/pos"
          />

          <ProjectItem
            title="Crowdsourcing Website"
            backgroundImg={CRWD}
            projectUrl="/crwd"
          />

          {/* <ProjectItem
            title="Property Finder"
            backgroundImg={cryptoImg}
            projectUrl="/netflix"
          />

          <ProjectItem
            title="Property Finder"
            backgroundImg={cryptoImg}
            projectUrl="/twitch"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
