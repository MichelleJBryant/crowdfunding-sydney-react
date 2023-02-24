import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { allProjects } from "../data";

function HomePage() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
    setProjectList(allProjects);
  }, []);

  return (
    <div>
      {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}

export default HomePage;
