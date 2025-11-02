import { Tabs } from "@mantine/core";
import { GradientTitle } from "../../../components/gradientText";
import { SectionTemplate } from "../../../components/templates/sectionTemplate.layout";
import { useState } from "react";
import { SkillTabs } from "../components/skillTabs.component";
import { ExperienceTabs } from "../components/experienceTabs.component";
import { InterestsTabs } from "../components/interestsTabs.component";

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<string | null>("experience");

  return (
    <SectionTemplate>
      <div className="w-full text-center">
        <GradientTitle text="Experience & Skills" />
      </div>

      <div className="flex flex-col lg:flex-row w-full items-start md:items-center h-full gap-8">
        <Tabs
          color="green"
          radius="lg"
          value={activeTab}
          onChange={setActiveTab}
        >
          <Tabs.List>
            <Tabs.Tab
              value="experience"
              className={`hover:bg-green-400/50 ${activeTab === "experience" && "bg-green-400/20"}`}
            >
              Experience
            </Tabs.Tab>

            <Tabs.Tab
              value="skills"
              className={`hover:bg-green-400/50 ${activeTab === "skills" && "bg-green-400/20"}`}
            >
              Skills
            </Tabs.Tab>

            <Tabs.Tab
              value="interests"
              className={`hover:bg-green-400/50 ${activeTab === "interests" && "bg-green-400/20"}`}
            >
              Interests
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="experience">
            <ExperienceTabs />
          </Tabs.Panel>

          <Tabs.Panel value="skills">
            {activeTab === "skills" && <SkillTabs />}
          </Tabs.Panel>

          <Tabs.Panel value="interests">
            {activeTab === "interests" && <InterestsTabs />}
          </Tabs.Panel>
        </Tabs>
      </div>
    </SectionTemplate>
  );
};
