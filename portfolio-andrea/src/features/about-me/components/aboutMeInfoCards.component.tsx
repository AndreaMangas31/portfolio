import InfoCard from "../../../components/cards/info-cards";
import { ScrollAnimationComponent } from "../../../components/templates/scrollAnimatedComponent";
export const AboutMeInfoCards = () => (
  <ScrollAnimationComponent>
    <div className="flex flex-wrap h-full justify-center gap-8 px-4 md:px-16 md:pl-0 lg:pr-0">
      <InfoCard
        boldText="Multimedia Engineering"
        text="graduated"
        animation="animate-grow"
        animationDelay="1600ms"
        link="/multimedia-engineering"
      />
      <InfoCard
        boldText="+4 years"
        text="of experience"
        animation="animate-grow"
        animationDelay="1000ms"
        link="/experience"
      />
      <InfoCard
        boldText="3 "
        text="company work experiences"
        animation="animate-grow"
        animationDelay="1300ms"
        backText={`Devio(OFF2ON)\n Salescaling\n Auditing Software Distributor`}
        link="/experience"
      />
      <InfoCard
        boldText="Coding & Design"
        text=""
        animation="animate-grow"
        animationDelay="1900ms"
        link="/coding-design"
      />
    </div>
  </ScrollAnimationComponent>
);
