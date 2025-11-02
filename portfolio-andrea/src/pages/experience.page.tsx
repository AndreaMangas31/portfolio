import { SectionTemplate } from "../components/templates/sectionTemplate.layout";
import { GradientTitle } from "../components/gradientText";
import { Tabs } from "@mantine/core";
import { useState } from "react";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<string | null>("overview");
  return (
    <main className="flex flex-col min-w-screen gap-4">
      <SectionTemplate>
        <div className="w-full text-center mb-6">
          <GradientTitle text="Experience" />
        </div>

        <Tabs
          color="green"
          radius="lg"
          defaultValue="overview"
          classNames={{
            list: "flex flex-row items-center w-full justify-center border-b border-gray-700 dark:border-white mb-6 overflow-x-auto",
            tab: "text-gray-800 dark:text-white dark:hover:text-white hover:text-gray-900 transition-colors ",
            tabLabel: "font-medium text-sm sm:text-base whitespace-nowrap",
            tabSection: "flex w-full px-8",
            panel: "flex !min-w-4sxl px-8 flex-shrink-0",
          }}
          value={activeTab}
          onChange={setActiveTab}
        >
          <Tabs.List>
            <Tabs.Tab
              className={`hover:bg-green-400/50 ${activeTab === "overview" && "bg-green-400/40"}`}
              value="overview"
            >
              Overview
            </Tabs.Tab>
            <Tabs.Tab
              className={`hover:bg-green-400/50 ${activeTab === "auditing" && "bg-green-400/40"}`}
              value="auditing"
            >
              Auditing Software Distributor
            </Tabs.Tab>
            <Tabs.Tab
              className={`hover:bg-green-400/50 ${activeTab === "salescaling" && "bg-green-400/40 "}`}
              value="salescaling"
            >
              Salescaling
            </Tabs.Tab>
            <Tabs.Tab
              className={`hover:bg-green-400/50 ${activeTab === "off2on" && "bg-green-400/40"}`}
              value="off2on"
            >
              OFF2ON
            </Tabs.Tab>
            <Tabs.Tab
              className={`hover:bg-green-400/50 ${activeTab === "teaching" && "bg-green-400/40"}`}
              value="teaching"
            >
              IES Laietània
            </Tabs.Tab>
          </Tabs.List>

          {/* OVERVIEW */}
          <Tabs.Panel value="overview">
            <section className="flex flex-col space-y-4 w-full">
              <p>
                As a <strong>Senior Front-End Developer</strong>, I combine
                advanced development, technical leadership, and team management
                to ensure solid, scalable, and impactful product deliveries.
              </p>

              <p>
                I’ve worked with <strong>React</strong>, <strong>Vue 3</strong>,
                and <strong>TypeScript</strong>, leading cross-team
                integrations, establishing coding standards, and promoting a{" "}
                <strong>feature-based architecture</strong> approach to improve
                maintainability. I currently review PRs, manage production
                releases, and handle complex incidents directly.
              </p>

              <p>
                I consider myself a developer with a{" "}
                <strong>global vision</strong>: I understand how technical
                decisions impact design, backend, and business. I enjoy creating
                interfaces that not only work — but truly add value to the end
                user.
              </p>

              <div>
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Key Strengths
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Front-end architecture based on features and reusable
                    components.
                  </li>
                  <li>
                    Technical team management, mentoring, and strategic code
                    reviews.
                  </li>
                  <li>
                    Strong integration knowledge between front and back{" "}
                    <strong>(REST, GraphQL, SSR, CI/CD).</strong>
                  </li>
                  <li>
                    Planning and prioritization skills in{" "}
                    <strong>Agile (SCRUM/Kanban) environments.</strong>
                  </li>
                  <li>
                    Experience designing visual systems with{" "}
                    <strong>
                      Tailwind, Mantine, Shadcn, PrimeVue, and Material UI.
                    </strong>
                  </li>
                </ul>
              </div>
            </section>
          </Tabs.Panel>

          {/* AUDITING SOFTWARE DISTRIBUTOR */}
          <Tabs.Panel className="min-w-full" value="auditing">
            <section className="flex flex-col space-y-4 w-full">
              <h2 className="text-xl font-semibold">
                Team Lead / Lead Front-End Developer
              </h2>
              <p className="italic text-gray-500">
                Barcelona, Spain · 2023 – Present
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Led the transition of the codebase toward a feature-based
                  architecture, increasing scalability and reducing technical
                  debt.
                </li>
                <li>
                  Designed a roadmap that enable the team to increase the
                  productivity to a 70% while maintaining high-quality
                  standards. Focusing on clear objectives and not 5 things at a
                  time.
                </li>
                <li>
                  Implemented <strong>coding standards</strong>, JSDoc comments,
                  and naming conventions to enhance team collaboration.
                </li>
                <li>
                  Introduced and managed the use of{" "}
                  <strong>Tailwind CSS</strong>,<strong>Shadcn</strong>,{" "}
                  <strong>PrimeVue</strong>, and <strong>Material UI</strong>,
                  ensuring visual consistency and performance.
                </li>
                <li>
                  <strong>
                    Review PRs, fix critical bugs, and oversee production{" "}
                  </strong>
                  deployments, ensuring quality in every release.
                </li>
                <li>
                  <strong>Mentoring</strong> junior developers and organize
                  internal workshops to improve practices and communication.
                </li>
                <li>
                  <strong>Coordinate</strong> with design and backend teams to
                  optimize development flows and minimize rework.
                </li>
              </ul>
            </section>
          </Tabs.Panel>

          {/* SALESCALING */}
          <Tabs.Panel className="w-full" value="salescaling">
            <section className="flex flex-col space-y-4 w-full">
              <h2 className="text-xl font-semibold">Front-End Developer</h2>
              <p className="italic text-gray-500">
                Barcelona, Spain · 2023 – Present
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Create from scratch the Saas platform using{" "}
                  <strong>React</strong> with <strong>TypeScript</strong> and{" "}
                  <strong>Tailwind CSS</strong>. From a complete CRM to a what
                  it is now, a complete sales automation tool.
                </li>
                <li>Developed modular components.</li>
                <li>
                  Supervised the design team to ensure alignment between UI and
                  technical implementation.
                </li>
                <li>
                  Actively contributed to CI/CD workflows and{" "}
                  <strong>SCRUM</strong> processes.
                </li>
                <li>
                  Fixed bugs and continuously improved performance and user
                  experience.
                </li>
                <li>
                  Participated in component architecture decisions and naming
                  conventions.
                </li>
              </ul>
            </section>
          </Tabs.Panel>

          {/* OFF2ON */}
          <Tabs.Panel value="off2on">
            <section className="flex flex-col space-y-4 w-full">
              <h2 className="text-xl font-semibold">Front-End Developer</h2>
              <p className="italic text-gray-500">
                Barcelona, Spain · 2022 – 2023
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Built modern interfaces using <strong>React</strong>,{" "}
                  <strong>Tailwind</strong>, and <strong>Node.js</strong>.
                </li>
                <li>
                  Collaborated with designers using <strong>Figma</strong> and{" "}
                  <strong>Adobe XD</strong> to define prototypes and user
                  experience.
                </li>
                <li>
                  Implemented accessibility best practices (WCAG) and responsive
                  design.
                </li>
                <li>
                  Rapid learning in backend areas and RESTful API integration.
                </li>
                <li>
                  Improved performance and code structure in legacy projects.
                </li>
              </ul>
            </section>
          </Tabs.Panel>

          {/* IES LAIETÀNIA */}
          <Tabs.Panel value="teaching">
            <section className="flex flex-col space-y-4 w-full">
              <h2 className="text-xl font-semibold">
                High School & Baccalaureate Teacher
              </h2>
              <p className="italic text-gray-500">Badalona, Spain · 2023</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Taught mathematics, computer science, technology, and physics.
                </li>
                <li>
                  Developed teaching materials to enhance student learning.
                </li>
                <li>
                  Created a video game programming workshop to foster creativity
                  and interest in technology.
                </li>
                <li>
                  Managed large groups (150+ students) and strengthened
                  communication skills.
                </li>
              </ul>
            </section>
          </Tabs.Panel>
        </Tabs>
      </SectionTemplate>
    </main>
  );
};
