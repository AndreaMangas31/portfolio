import { AboutMeSection } from "../features/about-me/view/aboutMeSection.view";
import { ProjectsSection } from "../features/projects/view/experienceSection.view";

export const MainPage = () => {
  return (
    <main className="flex flex-col bg-white dark:bg-dark-background w-full  h-full  justify-center items-center overflow-hidden">
      {/* <section className="bg-white dark:bg-dark-background h-full flex justify-center items-center overflow-hidden"> */}
      {/* Main */}
      <div className="relative w-full min-h-screen flex justify-center items-center">
        <div className="text-slide-wrapper text-black dark:text-white gap-4 z-2 ">
          <h1 style={{ fontSize: "25rem" }} className=" text-slide px-4 ">
            FRONT-END DEVELOPER{" "}
          </h1>
          <h1 style={{ fontSize: "25rem" }} className=" text-slide">
            {" "}
            FRONT-END DEVELOPER{" "}
          </h1>
        </div>
        <div className={`absolute bottom-0 left-[1/2 - 0.5] z-10`}>
          <img
            className="w-[500px] h-[700px]"
            src="../my-anime-portrait.png"
            alt="icon-representation-about-me"
          ></img>
        </div>
      </div>
      {/* About me */}
      <AboutMeSection />
      {/* Projects */}
      <ProjectsSection />
      {/* Contact */}
    </main>
  );
};
