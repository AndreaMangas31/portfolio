import { listStyle, sectionStyle } from "../../utils/styles";

export const MultimediaProjects = () => {
  return (
    <section className={sectionStyle}>
      <div className="flex flex-wrap text-justify">
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
            <strong>Adobe Creative Cloud</strong> and <strong>Figma</strong>,
            designing intuitive and visually appealing interfaces, defining user
            flows, and creating gamified experiences in various educational and
            simulation projects.
          </li>
          <li className={listStyle}>
            <strong>Programming and Front-End:</strong> I worked with{" "}
            <strong>
              C, C++, Java, Python, JavaScript, HTML, CSS, SQL, and PHP
            </strong>
            , developing application logic, interactive interfaces, and complete
            multimedia solutions.
          </li>
          <li className={listStyle}>
            <strong>Multidisciplinary Projects:</strong> I participated in
            interactive physics simulations, educational applications, and other
            multimedia engineering challenges, applying{" "}
            <strong>agile methodologies</strong> and user-centered design
            principles.
          </li>
        </ul>
      </div>
      <a
        href="/laSalle-education.png"
        target="_blank"
        rel="noreferrer"
        className="w-full h-60"
      >
        <img
          src="/laSalle-education.png"
          alt="Education Projects"
          className="w-fit h-60 "
        />
      </a>
    </section>
  );
};
