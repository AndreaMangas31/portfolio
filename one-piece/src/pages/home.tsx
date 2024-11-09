import { CharacterCardSection } from "../features/CharacterCardSection";

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
      {/* Nakamas */}
      <CharacterCardSection />
    </div>
  );
};
