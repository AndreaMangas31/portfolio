import { Divider } from "@mantine/core";
import { GradientTitle } from "../components/gradientText";
import { SectionTemplate } from "../components/templates/sectionTemplate.layout";

export const MultimediaEngineering = () => {
  const listStyle = " list-disc pl-5";
  const sectionStyle = "flex flex-col md:flex-row items-center gap-6 my-8";
  // TODO: Separte it in multiple components inside this file or create a feature folder, or a common feature of deep-about-me, all with names maybe like multimedia-engineering-projects.component.tsx
  return (
    <main>
      <SectionTemplate>
        <div className="w-full text-center mb-8">
          <GradientTitle text="Multimedia Engineering" />
        </div>

        <section className={sectionStyle}>
          <div className="flex-1">
            <p>
              As a graduate in{" "}
              <strong>
                Multimedia Engineering from La Salle Campus Barcelona
              </strong>
              , I have developed a comprehensive profile over{" "}
              <strong>four years of study</strong>, combining{" "}
              <strong>
                interface design, user experience, and front-end development
              </strong>
              , with solid back-end knowledge that allows me to understand and
              optimize the entire interaction flow in digital applications.
            </p>
          </div>
        </section>
        <Divider my="sm" className="!my-0" />

        {/* Projects */}
        <section className={sectionStyle}>
          <div className="flex-1">
            <h3 className="text-white-400 font-bold mb-2">
              Education and Projects During the Degree
            </h3>
            <p>
              Throughout my degree, I gained experience in multiple key areas of
              multimedia engineering:
            </p>
            <ul>
              <li className={listStyle}>
                <strong>UX/UI Expertise:</strong> I mastered tools such as{" "}
                <strong>Adobe Creative Cloud</strong> and <strong>Figma</strong>
                , designing intuitive and visually appealing interfaces,
                defining user flows, and creating gamified experiences in
                various educational and simulation projects.
              </li>
              <li className={listStyle}>
                <strong>Programming and Front-End:</strong> I worked with{" "}
                <strong>
                  C, C++, Java, Python, JavaScript, HTML, CSS, SQL, and PHP
                </strong>
                , developing application logic, interactive interfaces, and
                complete multimedia solutions.
              </li>
              <li className={listStyle}>
                <strong>Multidisciplinary Projects:</strong> I participated in
                interactive physics simulations, educational applications, and
                other multimedia engineering challenges, applying{" "}
                <strong>agile methodologies</strong> and user-centered design
                principles.
              </li>
            </ul>
          </div>
          {/* TODO: Add image in education projects */}
          <div className="flex-1">
            <img src="#" alt="Education Projects" />
          </div>
        </section>
        <Divider my="sm" className="!my-0" />

        {/* TFG */}
        <section className={sectionStyle}>
          <div className="flex-1">
            <h3 className="text-white-400 font-bold mb-2">
              Final Degree Project (TFG)
            </h3>
            <p>
              My{" "}
              <strong>
                Final Degree Project consisted of developing a serious game for
                children
              </strong>
              , designed to teach mathematics in a playful and engaging way,
              avoiding content being perceived as boring or strictly academic.
              In this project, I took full responsibility for the front-end and
              user experience.
            </p>
            <p>Key aspects of the project included:</p>
            <ul>
              <li className={listStyle}>
                <strong>User-Centered Design:</strong> I created{" "}
                <strong>personas</strong> and <strong>user journeys</strong> for
                a child audience, segmenting by age and interests, ensuring each
                interaction promoted motivation, exploration, and positive
                reinforcement.
              </li>
              <li className={listStyle}>
                <strong>UX/UI Design:</strong> I designed the entire interface
                and user experience using <strong>Adobe Creative Cloud</strong>{" "}
                and <strong>Figma</strong>, creating child-friendly visuals,
                clear graphic elements, and gamification mechanics such as
                rewards and visible progression.
              </li>
              <li className={listStyle}>
                <strong>Technical Implementation:</strong> I programmed the game
                logic and interactions using <strong>GDevelop</strong>, managing
                events, adaptive difficulty levels, and a system for tracking
                children’s progress.
              </li>
              <li className={listStyle}>
                <strong>Evaluation and Continuous Improvement:</strong> I
                conducted tests with real users, collecting qualitative and
                quantitative feedback, refining the logic, interface, and
                educational tone to ensure the game met its learning goals while
                remaining fun and engaging.
              </li>
              <li className={listStyle}>
                <strong>Results:</strong> The project resulted in a fully
                deployable product, demonstrating my ability to lead a complete
                multimedia development process from concept to delivery,
                integrating <strong>UX/UI, programming, and pedagogy</strong>.
              </li>
            </ul>
          </div>
          {/* TODO: Add image in education projects */}

          <div className="flex-1">
            <img src="#" alt="Final Degree Project" />
          </div>
        </section>
        <Divider my="sm" className="!my-0" />

        {/* How it makes me a complete front-end developer */}
        <section className={sectionStyle}>
          <div className="flex-1">
            <h3 className="text-white-400 font-bold mb-2">
              Professional Profile
            </h3>
            <p>
              This combination of skills makes me a{" "}
              <strong>complete front-end developer</strong>, capable of creating{" "}
              <strong>visually appealing and functional interfaces</strong>,
              with strong user empathy and technical understanding of the entire
              system. I am ready to bring{" "}
              <strong>intuitive design, quality code, and creativity</strong> to
              any digital project.
            </p>
          </div>
        </section>
      </SectionTemplate>
    </main>
  );
};
