import { SectionTemplate } from "../components/templates/sectionTemplate.layout";
import { GradientTitle } from "../components/gradientText";
import { MultimediaIntro } from "../features/look-into-it/components/multimedia/multimedia-intro.component";
import { MultimediaProjects } from "../features/look-into-it/components/multimedia/multimedia-projects.component";
import { MultimediaTFG } from "../features/look-into-it/components/multimedia/multimedia-tfg";
import { MultimediaProfessionalJustification } from "../features/look-into-it/components/multimedia/multimedia-professional-justification";
// TODO: Remember to add photos of projects and TFG
export const MultimediaEngineering = () => {
  return (
    <main className="flex flex-col gap-4">
      <SectionTemplate>
        <div className="w-full text-center">
          <GradientTitle text="Multimedia Engineering" />
        </div>

        <MultimediaIntro />
        <hr className="border-gray-700 dark:border-white" />

        <MultimediaProjects />
        <hr className="border-gray-700 dark:border-white" />

        <MultimediaTFG />
        <hr className="border-gray-700 dark:border-white" />

        <MultimediaProfessionalJustification />
      </SectionTemplate>
    </main>
  );
};
