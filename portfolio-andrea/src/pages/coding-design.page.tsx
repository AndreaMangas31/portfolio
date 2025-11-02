import { SectionTemplate } from "../components/templates/sectionTemplate.layout";
import { GradientTitle } from "../components/gradientText";

export const CodingDesign = () => {
  return (
    <main className="flex flex-col gap-4">
      <SectionTemplate>
        <div className="w-full text-center mb-6">
          <GradientTitle text="Coding & Design" />
        </div>

        {/* intro */}
        <section className="flex flex-col gap-2">
          <p>
            Since I studied <strong>Multimedia Engineering</strong>, I’ve always
            felt a natural connection between technology and aesthetics. At
            first, I wanted to become a designer — but during my first
            internship, I discovered <strong>front-end development</strong> and
            realized I could <strong>bring my own designs to life</strong>. I
            fell in love with that perfect balance between creativity and logic.
          </p>
          <p>
            From that moment, coding and design became inseparable for me.
            They’ve shaped how I think, how I build, and how I lead projects.
          </p>
        </section>

        <hr className="border-gray-700 dark:border-white " />
        {/* In work */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">
            From designing to building experiences
          </h2>
          <p>
            In my first company, I worked closely with a UX/UI designer —
            together, we crafted digital experiences, and I was responsible for{" "}
            <strong>
              turning those concepts into real, interactive interfaces
            </strong>
            . That collaboration taught me to see beyond pixels: to think in
            flow, rhythm, and accessibility.
          </p>
          <p>
            As my career evolved, I began to take on both sides:{" "}
            <strong>designing and developing entire products</strong>. I created
            wireframes and prototypes in Figma, then implemented them with React
            or Vue, ensuring each element felt consistent and purposeful.
          </p>
          <p>
            Now, as a <strong>Lead Front-End Developer</strong>, I review not
            only the code logic but also the <strong>visual coherence</strong> —
            color hierarchy, spacing, typography, and general balance. A visual
            detail out of place is just as important to fix as a functional bug.
          </p>
        </section>

        <hr className="border-gray-700 dark:border-white" />

        {/* Approeaches */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">Coding Approach</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Modular, feature-based architecture for scalability and clarity.
              </li>
              <li>
                Code reviews focused on quality, readability, and accessibility
                (WCAG).
              </li>
              <li>
                Use of <strong>Tailwind CSS</strong> for design consistency and
                speed.
              </li>
              <li>
                <strong>Visual and Code validation during PRs </strong> —
                ensuring proper spacing, typography, and colors.
              </li>
              <li>
                Creation of design systems shared across teams and products.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Design Philosophy</h2>
            <ul className="list-disc pl-6 ">
              <li>Designing for how it feels, not only how it looks.</li>
              <li>
                Rapid prototyping with <strong>Figma</strong> and{" "}
                <strong>Adobe XD</strong> using real UX scenarios.
              </li>
              <li>
                Balanced visuals based on hierarchy, rhythm, and color harmony.
              </li>
              <li>
                Clean, functional, and cohesive designs aligned with the product
                identity.
              </li>
              <li>
                Collaborating closely with developers to maintain visual
                consistency.
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-700 dark:border-white" />

        {/* Both */}
        <section className="sflex flex-col gap-4 ">
          <h2 className="text-xl font-semibold">Why Both?</h2>
          <p>
            Because I can’t imagine a digital product without balance between
            both worlds. Code without design is functional but cold; design
            without code is beautiful but static.
          </p>
          <p>
            My passion lives right in between — in creating interfaces that{" "}
            <strong>work with precision and feel alive</strong>. Where every
            component and every line of code tell the same story.
          </p>
          <p>
            That’s why I love what I do: because I get to think like a designer,
            but build it like a developer, and create as both.
          </p>
        </section>
      </SectionTemplate>
    </main>
  );
};
