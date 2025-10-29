import { Tabs } from "@mantine/core";
import { GradientTitle } from "../../../components/gradientText";
import { SectionTemplate } from "../../../components/templates/sectionTemplate.layout";
import { useState } from "react";
import { ProjectsTabs } from "../components/projectsTabs.component";
import { SkillTabs } from "../components/skillTabs.component";

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<string | null>("projects");

  return (
    <SectionTemplate>
      <div className="w-full text-center">
        <GradientTitle text="Projects" />
      </div>

      <div className="flex flex-col lg:flex-row w-full items-start md:items-center  h-full gap-8">
        <Tabs
          color="green"
          radius="lg"
          value={activeTab}
          onChange={setActiveTab}
        >
          <Tabs.List>
            <Tabs.Tab
              value="projects"
              className={`hover:bg-green-400/50 ${activeTab === "projects" && "bg-green-400/20"}`}
            >
              My Projects
            </Tabs.Tab>
            <Tabs.Tab
              value="skills"
              className={`hover:bg-green-400/50 ${activeTab === "skills" && "bg-green-400/20"}`}
            >
              Skills
            </Tabs.Tab>
            <Tabs.Tab
              value="settings"
              className={`hover:bg-green-400/50 ${activeTab === "settings" && "bg-green-400/20"}`}
            >
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="projects" className=" ">
            <ProjectsTabs />
          </Tabs.Panel>

          <Tabs.Panel value="skills">
            {activeTab === "skills" && <SkillTabs />}
          </Tabs.Panel>

          <Tabs.Panel value="settings">
            {" "}
            <img src="/public/anime-portrait.png" alt=""></img>
          </Tabs.Panel>
        </Tabs>
      </div>
    </SectionTemplate>
  );
};
