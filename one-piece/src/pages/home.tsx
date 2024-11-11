import { CharacterCardSection } from "../features/character/views/CharacterCardSection";

export const MainPage = () => {
  return (
    <div className="max-w-screen">
      <section className="flex flex-col justify-center items-center">
        <div className="relative h-full w-full">
          <img
            alt="background"
            className="h-full w-full z-1 object-cover blur-xs"
            src="./images/background.png"
          ></img>
          {/* Colocar una animación de aparición del logo */}
          <img
            alt="logo"
            className="flex z-2 absolute top-[calc(50%-250px)] left-[15%] justify-center items-center w-[1000px]   px-20 "
            src="./images/logo.png"
          ></img>
        </div>
      </section>
      {/* Description */}
      <section className="bg-oceanBlue-700 flex flex-col p-16">
        <span className="flex w-full text-start text-white text-3xl uppercase font-bold">
          What is One Piece?
        </span>
        <div className="flex flex-row justify-between items-center gap-[300px] text-white">
          <span className="text-xl text-justify">
            One Piece is set in a world where powerful pirates sail the seas in
            search of adventure, treasure, and, most famously, the legendary
            treasure known as the "One Piece." This treasure, hidden somewhere
            in the Grand Line (an incredibly dangerous and mysterious part of
            the world), is rumored to be left behind by the legendary Pirate
            King, Gol D. Roger. The treasure promises unimaginable wealth,
            power, and fame to whoever finds it, and the person who does will be
            crowned the next Pirate King.
          </span>
          <img
            alt="treasure"
            className="transform scale-x-[-1] w-80 "
            src="./images/treasure.png"
          />
        </div>
      </section>
      {/* Nakamas */}
      <CharacterCardSection />
    </div>
  );
};
