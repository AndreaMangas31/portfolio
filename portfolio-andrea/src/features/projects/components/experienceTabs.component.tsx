import { useEffect, useState } from "react";
import { CollapsableCard } from "../../../components/cards/collapsableCards";
import { ProjectExperience } from "../services/interfaces";
import { professionalExperience } from "../services/data";

export const ExperienceTabs = () => {
  const { projects, columns, activeIndex, handleClick, handleMouseLeave } =
    ExperienceTabsLogic();

  return (
    <div className="w-full">
      <ul
        className="grid gap-6 py-4 transition-all ease-in-out delay-500"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={`group transition-all duration-700 ease-in-out h-[340px] cursor-pointer ${
              activeIndex === index ? "col-span-2" : "col-span-1"
            }`}
            onClick={() => handleClick(index)}
            onMouseLeave={handleMouseLeave}
          >
            <CollapsableCard
              isExpanded={activeIndex === index}
              card={project}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
const ExperienceTabsLogic = () => {
  const [projects, setProjects] = useState<ProjectExperience[]>(
    professionalExperience
  );
  const [columns, setColumns] = useState<number>(3); // Number of columns shown in window
  const [activeIndex, setActiveIndex] = useState<number | null>(null); //The clicked card

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3);
      } else if (window.innerWidth >= 720) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }
    const isEdge = (index + 1) % columns === 0;
    if (!isEdge) {
      setActiveIndex(index);
      return;
    }

    // If the card is on the edge, we need to reorder
    const newProjects = [...projects];
    const [clicked] = newProjects.splice(index, 1);
    const insertPos = Math.max(0, index - 1);
    newProjects.splice(insertPos, 0, clicked);

    setProjects(newProjects);
    setActiveIndex(insertPos);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return {
    projects,
    columns,
    activeIndex,
    handleClick,
    handleMouseLeave,
  };
};
