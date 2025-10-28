import { useEffect, useState } from "react";
import { Project } from "./interfaces";
import { initialProjects } from "./data";
import { CollapsableCard } from "../../components/cards/collapsableCards";

export const ProjectsTabs = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [columns, setColumns] = useState<number>(3); // Set the initial number of columns for the grid (e.g., grid-cols-2 means 2 columns)

  useEffect(() => {
    // Function to update the number of columns based on the window width
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3); // Large screens (lg:grid-cols-3)
      } else if (window.innerWidth >= 720) {
        setColumns(2); // Medium screens (sm:grid-cols-2)
      } else {
        setColumns(1); // Small screens (grid-cols-1)
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns); // Clean up the event listener on component unmount
  }, []);

  const handleHover = (hoveredProject: Project, index: number) => {
    // Check if the project is in the last position of a row (right edge)
    const isEdgeCase = (index + 1) % columns === 0;
    if (!isEdgeCase) return; // If not on the right edge, do nothing

    const reorderedProjects = projects.filter(
      (project) => project.id !== hoveredProject.id
    );
    if (index > 0) {
      // Insert the hoveredProject one position before its current position
      reorderedProjects.splice(index - 1, 0, hoveredProject);
    }
    setProjects(reorderedProjects);
  };

  const handleMouseLeave = () => {
    // Restore the original order when the mouse leaves the project
    setProjects(initialProjects);
  };

  return (
    <div className="w-full">
      <ul className={`grid grid-cols-${columns} gap-6 py-4`}>
        {projects.map((project, index) => (
          <li
            key={project.id}
            className="group col-span-1 hover:col-span-2 transition-all duration-1000 ease-in-out delay-500 h-[340px]"
            onMouseEnter={() => handleHover(project, index)} // Trigger hover effect on mouse enter
            onMouseLeave={handleMouseLeave} // Trigger reset on mouse leave
          >
            <CollapsableCard card={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};
