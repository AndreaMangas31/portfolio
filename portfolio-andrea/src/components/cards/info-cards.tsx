import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

interface InfoCardProps {
  boldText?: string;
  text?: string;
  animation?: string;
  animationDelay?: string;
  backText?: string;
  link?: string;
}

export const InfoCard = ({
  boldText = "",
  text = "",
  animation = "",
  animationDelay = "0",
  backText,
  link,
}: InfoCardProps) => {
  const cardId = `card-about-${boldText}-${text}`
    .replace(/\\s+/g, "-")
    .toLowerCase();

  return (
    <div
      id={cardId}
      key={cardId}
      className={`group text-white dark:text-black p-3 sm:p-5 w-[160px] h-[160px]  sm:w-[200px] sm:h-[200px] xl:w-[240px] xl:h-[240px] [perspective:1000px] transition-opacity ${animation ? `opacity-0 ${animation}` : ""}`}
      style={{ animationDelay }}
    >
      <div
        className={`flippled-card relative w-full h-full flex flex-col justify-around rounded-2xl shadow-xl shadow-black/30 dark:shadow-white/20 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)] `}
      >
        {/* Front Face */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 rounded-2xl [backface-visibility:hidden] flipped-card-front">
          <span className="text-xl sm:text-2xl font-bold text-center">
            {boldText}
          </span>
          <span className="text-sm text-center">{text}</span>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 flex flex-col items-center justify-around p-5 rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] flipped-card-back">
          {backText && <span className="text-sm">{backText}</span>}
          <Link to={link || "#"} className="block">
            <Button className="bg-transparent hover:bg-gray-100/40 dark:text-black text-sm">
              <span>Look into it</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
