import React from "react";
import PojectSummary from "../poject_summary/poject_summary";

const PojectList = (props) => {
  const { projects } = props;

  return (
    <div className="project-list section">
      {projects && projects.map(project => { return <PojectSummary project={project} key={project.id} /> })}

    </div>
  );
};

export default PojectList;
