import { CharacterCard } from "../ui/cards/CharacterCard";

export const CharacterCardSection = () => {
  const characters = [
    "luffy",
    "zoro",
    "nami",
    "ussop",
    "sanji",
    "robin",
    "chopper",
  ];
  return (
    <section className="h-screen bg-oceanBlue-700 max-w-screen flex flex-col justify-center items-center">
      <div className="flex flex-wrap gap-4 justify-center items-end ">
        {characters.map((character) => {
          return (
            // <div className="group relative flex flex-col shadow justify-center items-center rounded-md bg-gradient-to-t from-oceanBlue-400  w-80 h-80 hover:h-72 transition-all">
            //   <img
            //     alt={character}
            //     className="absolute group-hover:hidden bottom-0 z-1 h-80 group-hover:h-[450px] transition-all"
            //     src={`/images/characters/${character}/${character}-iddle.png`}
            //   ></img>
            //   <img
            //     alt={character}
            //     className="absolute hidden group-hover:flex bottom-0 z-1 h-80 group-hover:h-[450px] transition-all"
            //     src={`/images/characters/${character}/${character}-attack.png`}
            //   ></img>
            //   <div className="flex flex-col gap-4 p-2 px-4 z-2 absolute bottom-0 bg-gradient-to-t from-oceanBlue-900 text-white w-full rounded-b-md h-20 group-hover:h-40 ">
            //     <span className="uppercase text-2xl group-hover:text-xl font-extrabold">
            //       {character}
            //     </span>
            //     <span className="hidden group-hover:flex">
            //       Lorem Ipsum is simply dummy text of the printing and
            //       typesetting industry. Lorem Ipsum has been the industry's.
            //     </span>
            //   </div>
            // </div>
            <CharacterCard key={character} character={character} />
          );
        })}
      </div>
    </section>
  );
};
