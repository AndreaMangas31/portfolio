import { ScrollAnimationComponent } from "./scrollAnimatedComponent";

interface SectionTemplateProps {
  children: React.ReactNode;
}
export const SectionTemplate = ({ children }: SectionTemplateProps) => {
  return (
    <section className="flex flex-col py-20 w-full pt-20 justify-center items-center">
      <ScrollAnimationComponent>
        <div className="flex flex-col gap-8  h-full text-black dark:text-white w-full max-w-9xl min-h-[800px] animate-fadeIn px-8 sm:px-16">
          {children}
        </div>
      </ScrollAnimationComponent>
    </section>
  );
};
