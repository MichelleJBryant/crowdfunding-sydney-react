import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { oneProject } from "../data";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: []});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URL}projects/${id}`)
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      setProjectData(data);
    })
  }, []);

  console.log(projectData)
  return (
    <div>
      <h2>{projectData.title}</h2>
      <h3>Created at: {projectData.date_created}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ProjectPage;
