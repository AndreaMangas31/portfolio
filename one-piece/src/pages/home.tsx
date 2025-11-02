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
      <section className="bg-oceanBlue-700 flex flex-col gap-10 p-16">
        <span className="flex w-full text-start text-white text-3xl uppercase font-bold">
          What is One Piece?
        </span>
        <div className="flex flex-col lg:flex-row xl:justify-between items-center gap-14 lg:gap-20 text-white">
          <span className="text-xl text-justify">
            One Piece is set in a vast and vibrant world where mighty pirates,
            fearless adventurers, and mysterious creatures roam the endless seas
            in pursuit of dreams, glory, and freedom. At the heart of this world
            lies the ultimate prize: the legendary treasure known as the “One
            Piece.” Hidden somewhere deep within the Grand Line —a perilous and
            unpredictable sea filled with strange islands, powerful enemies, and
            countless wonders— the treasure was said to be left behind by the
            legendary Pirate King, Gol D. Roger. Before his execution, Roger’s
            final words ignited an era of chaos and excitement, inspiring
            countless people across the world to take to the seas and chase
            their own destiny. It marked the beginning of the Great Pirate Era,
            where crews from every corner of the globe now compete, clash, and
            form alliances in search of the treasure that promises unimaginable
            wealth, power, and eternal fame. Whoever discovers the One Piece
            will inherit the will of Roger himself, becoming the next Pirate
            King —a symbol of ultimate freedom upon the seas. But the path is
            treacherous, filled with ancient mysteries, powerful rivals, and the
            unpredictable forces of the world’s three great powers. For those
            daring enough to embark on this grand adventure, the sea offers both
            danger and the chance to make history.
          </span>
          <img
            alt="treasure"
            className="transform h-[450px] object-cover"
            src="./images/description-photo.png"
          />
        </div>
      </section>
      {/* Nakamas */}
      <CharacterCardSection />
    </div>
  );
};
