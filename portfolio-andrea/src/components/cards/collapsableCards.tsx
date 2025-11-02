import { Button } from "@mantine/core";
import { Card } from "../../utils/interfaces";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface CollapsableCardProps {
  card: Card;
  isExpanded: boolean;
}
export const CollapsableCard = ({ card, isExpanded }: CollapsableCardProps) => {
  const hasVideos = card?.shortVideo && card.shortVideo?.length > 0;
  return (
    <div
      className={`flex group bg-slate-200  dark:bg-gray-800/40 shadow-md h-full rounded-lg border border-gray-600 group-hover:shadow-2xl group-hover:shadow-green-400/40  group-hover:border-green-700 group-hover:border-2 group-hover:scale-105 ${
        isExpanded ? "flex-row" : "flex-col"
      }`}
      style={{
        flexDirection: isExpanded ? "row" : "column",
      }}
    >
      <img
        src={card.photo}
        alt={card.name}
        className={`w-full h-48 object-cover rounded-t-lg ${
          isExpanded &&
          ` group-hover:rounded-l-md group-hover:rounded-tr-none group-hover:h-full h-full group-hover:w-60`
        }`}
      />
      {/* Text content */}
      <div className="flex flex-col gap-4 p-4">
        <h2 className={`text-lg font-bold mb-2 dark:text-white `}>
          {card.name}
        </h2>
        <p className={`dark:text-gray-400 ${!isExpanded && "line-clamp-2"}`}>
          {card.description}
        </p>
        {isExpanded && (
          <div className="flex flex-col gap-4 mt-auto">
            {/* Posts carrousel */}
            {hasVideos && (
              <div className="flex overflow-x-auto gap-4 py-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {card?.shortVideo?.map((videoUrl, id) => {
                  const thumbnail = card?.shortVideoThumbnails?.[id] ?? "";

                  return (
                    <motion.a
                      key={id}
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" relative min-w-[200px] h-20 gap-2 rounded-lg flex flex-row items-center  overflow-hidden group/link bg-gradient-to-br from-gray-700 to-gray-800"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {thumbnail && (
                        <img
                          src={thumbnail}
                          alt={`LinkedIn post ${id + 1}`}
                          className="w-[60%] h-full object-cover"
                          loading="lazy"
                        />
                      )}

                      <div className="flex flex-col items-center text-center text-white">
                        <IconBrandLinkedin
                          size={28}
                          className="text-blue-400 "
                        />
                        <span className="text-sm font-medium">View Post</span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            )}
            {/* Link to webs */}
            <Button
              className="green-button !w-fit"
              component="a"
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Learn More</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
