import { motion } from "framer-motion";
import { Card, Text, Badge, Group } from "@mantine/core";
import { IconSparkles } from "@tabler/icons-react";
import { personalInterests } from "../services/data";

export const InterestsTabs = () => {
  return (
    <div className="w-full flex flex-col gap-8 mt-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
          What Drives Me
        </h2>
        <p className="dark:text-gray-400 mt-2">
          A few areas I’m truly passionate about — inside and outside of code.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {personalInterests.map((interest, index) => (
          <motion.div
            key={interest.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 60 }}
          >
            <Card
              shadow="md"
              radius="md"
              withBorder
              className="bg-white dark:bg-zinc-900/60 backdrop-blur-md border-green-600 dark:border-zinc-700/60 hover:border-green-400/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 min-h-[150px]"
            >
              <Group mb="sm">
                <Badge
                  color="green"
                  leftSection={<IconSparkles size={16} />}
                  variant="light"
                  className="items-center px-2 h-fit"
                >
                  <span> {interest.name}</span>
                </Badge>
              </Group>

              <Text className="dark:text-gray-300 text-sm leading-relaxed">
                {interest.description}
              </Text>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
