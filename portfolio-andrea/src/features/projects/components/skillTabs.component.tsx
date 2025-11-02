import { useState, useEffect } from "react";
import { SemiCircleProgress } from "@mantine/core";
import { motion } from "framer-motion";
import { initialSoftSkills } from "../services/data";

interface Skill {
  name: string;
  percentage: number;
}

/**
 * Hook to animate skill progress sequentially.
 */
const useSequentialProgress = (skills: Skill[], delay = 400) => {
  const [progressValues, setProgressValues] = useState<number[]>(
    skills.map(() => 0)
  );

  useEffect(() => {
    let mounted = true;

    const animate = async () => {
      for (let i = 0; i < skills.length; i++) {
        if (!mounted) break;
        await new Promise((r) => setTimeout(r, delay));
        setProgressValues((prev) => {
          const updated = [...prev];
          updated[i] = skills[i].percentage;
          return updated;
        });
      }
    };

    animate();
    return () => {
      mounted = false;
    };
  }, [skills, delay]);

  return progressValues;
};

export const SkillTabs = () => {
  const softSkills = initialSoftSkills;
  const progressValues = useSequentialProgress(softSkills);

  return (
    <section
      className="w-full  rounded-b-md px-6 sm:px-10 py-10"
      aria-label="Soft skills proficiency chart"
    >
      <ul className="flex flex-wrap justify-center gap-12">
        {softSkills.map((skill, index) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 70 }}
            className="flex flex-col justify-center items-center gap-3 text-center rounded-lg hover:scale-[1.03] transition-transform duration-300"
          >
            <SemiCircleProgress
              fillDirection="left-to-right"
              orientation="up"
              transitionDuration={700}
              filledSegmentColor="rgba(34,197,94,0.7)" // verde-emerald suave
              size={220}
              thickness={16}
              value={progressValues[index]}
              labelPosition="center"
              label={`${progressValues[index]}%`}
              aria-valuenow={progressValues[index]}
              aria-valuemin={0}
              aria-valuemax={100}
              className="text-[28px] dark:text-green-400 select-none"
            />
            <span className="font-semibold dark:text-gray-200 tracking-wide text-lg">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
