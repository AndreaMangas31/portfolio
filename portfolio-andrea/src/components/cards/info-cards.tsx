// import { Button } from "@mantine/core";

// interface InfoCardProps {
//   boldText?: string;
//   text?: string;
//   animation?: string;
//   animationDelay?: string;
// }
// export const InfoCard = ({
//   boldText,
//   text,
//   animation,
//   animationDelay = "0",
// }: InfoCardProps) => {
//   return (
//     <div
//       id={`card-about- ${boldText && boldText + text && text} `}
//       key={`card-about- ${boldText && boldText + text && text} `}
//       className={`group dark:text-black text-white p-3 w-[130px] h-[130px] sm:m-2 sm:p-5 sm:flex-col sm:w-[200px] sm:h-[200px] [perspective:1000px] ${animation && "opacity-0 " + animation} `}
//       style={{ animationDelay: animationDelay }}
//     >
//       <div className=" flex flex-col w-[130px] h-[130px]  sm:w-[200px] sm:h-[200px] relative justify-around dark:bg-green-400 bg-[#3d582e] size-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]  shadow-xl shadow-black/30 dark:shadow-white/20">
//         <div className="front flex flex-col p-5 justify-center items-center rounded-2xl absolute inset-0 size-full">
//           <span className="font-bold text-3xl text-center">{boldText}</span>
//           <span className="text-sm text-center">{text}</span>
//         </div>
//         <div className="back dark:bg-green-200 bg-[#293c1f]  flex flex-col p-5 justify-around rounded-2xl absolute inset-0 size-full [transform:rotateY(180deg)] [backface-visibility:hidden] ">
//           <Button className="w-fit bg-transparent hover:bg-gray-100/40 dark:text-black !text-sm">
//             <span className="text-sm">Look into it</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default InfoCard;
import { Button } from "@mantine/core";

interface InfoCardProps {
  boldText?: string;
  text?: string;
  animation?: string;
  animationDelay?: string;
  backText?: string;
}

export const InfoCard = ({
  boldText = "",
  text = "",
  animation = "",
  animationDelay = "0",
  backText,
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
          <Button className="bg-transparent hover:bg-gray-100/40 dark:text-black text-sm">
            <span>Look into it</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
