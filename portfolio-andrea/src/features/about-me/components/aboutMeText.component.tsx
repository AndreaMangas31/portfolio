export const AboutMeText = () => (
  <div
    className="flex flex-col items-center opacity-0 animate-fadeIn "
    style={{ animationDelay: "2500ms" }}
  >
    <article className="text-justify text-lg">
      I am dedicated developer with a passion for creating seamless and engaging
      user experiences. With expertise in <strong>React</strong>,{" "}
      <strong>Vue.js</strong>, <strong>JavaScript</strong>,{" "}
      <strong>TypeScript</strong>, <strong>HTML</strong>, and{" "}
      <strong>CSS</strong>, I specialize in turning ideas into reality through
      intuitive and responsive design. My professional journey is defined by:
      <ul className="list-disc pl-10 py-4">
        <li>
          Crafting scalable, maintainable, and accessible components following
          industry best practices.
        </li>
        <li>
          Thriving in <strong>Agile</strong> team environments, utilizing tools
          like <strong>Git</strong> and CI/CD pipelines for efficient
          collaboration.
        </li>
        <li>
          Delivering high-quality solutions optimized for performance,{" "}
          <strong>accessibility</strong> (WCAG standards), and{" "}
          <strong>user satisfaction</strong>.
        </li>
        {/* <li>
          Creative <strong>problem-solving</strong> and critical thinking to
          tackle challenges effectively.
        </li> */}
      </ul>
      {/* Whether you're looking to enhance an existing product or build something
      groundbreaking, I bring a blend of technical expertise and creativity to
      help achieve your goals.*/}{" "}
      Let’s create something extraordinary together!
    </article>
  </div>
);
