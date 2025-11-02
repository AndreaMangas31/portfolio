import { sectionStyle, listStyle } from "../../utils/styles";

export const MultimediaTFG = () => {
  const drivelink = import.meta.env.VITE_DRIVE_TFG_LINK || "";
  return (
    <section className={sectionStyle}>
      <div className="flex flex-wrap text-justify">
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
          avoiding content being perceived as boring or strictly academic. In
          this project, I took full responsibility for the front-end and user
          experience.
        </p>
        <p>Key aspects of the project included:</p>
        <ul>
          <li className={listStyle}>
            <strong>User-Centered Design:</strong> I created{" "}
            <strong>personas</strong> and <strong>user journeys</strong> for a
            child audience, segmenting by age and interests, ensuring each
            interaction promoted motivation, exploration, and positive
            reinforcement.
          </li>
          <li className={listStyle}>
            <strong>UX/UI Design:</strong> I designed the entire interface and
            user experience using <strong>Adobe Creative Cloud</strong> and{" "}
            <strong>Figma</strong>, creating child-friendly visuals, clear
            graphic elements, and gamification mechanics such as rewards and
            visible progression.
          </li>
          <li className={listStyle}>
            <strong>Technical Implementation:</strong> I programmed the game
            logic and interactions using <strong>GDevelop</strong>, managing
            events, adaptive difficulty levels, and a system for tracking
            children’s progress.
          </li>
          <li className={listStyle}>
            <strong>Evaluation and Continuous Improvement:</strong> I conducted
            tests with real users, collecting qualitative and quantitative
            feedback, refining the logic, interface, and educational tone to
            ensure the game met its learning goals while remaining fun and
            engaging.
          </li>
          <li className={listStyle}>
            <strong>Results:</strong> The project resulted in a fully deployable
            product, demonstrating my ability to lead a complete multimedia
            development process from concept to delivery, integrating{" "}
            <strong>UX/UI, programming, and pedagogy</strong>.
          </li>
        </ul>
      </div>
      <div className="group relative flex flex-col justify-center items-center">
        <a href={drivelink} target="_blank" rel="noopener noreferrer">
          <img src="/tfg-image.png" alt="Final Degree Project" />
          <div className="absolute flex top-0 left-0 group-hover:h-full transition-all justify-center items-center w-full h-30 green-button">
            Click to see a preview
          </div>
        </a>
      </div>
    </section>
  );
};
