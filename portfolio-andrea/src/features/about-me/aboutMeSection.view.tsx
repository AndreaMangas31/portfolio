import { GradientTitle } from "../../components/gradientText";
import { SectionTemplate } from "../../components/templates/sectionTemplate.layout";
import { AboutMeInfoCards } from "./aboutMeInfoCards.component";
import { AboutMeSalutation } from "./aboutMeSalutation.component";

export const AboutMeSection = () => {
  return (
    <SectionTemplate>
      <div className="w-full text-center">
        <GradientTitle text="About Me" />
      </div>

      <div className="flex flex-col lg:flex-row w-full items-start md:items-center  h-full gap-8">
        <AboutMeSalutation />
        {/* Info Cards */}
        <AboutMeInfoCards />
      </div>
    </SectionTemplate>
  );
};
