import { CharacterCard } from "../../../ui/cards/CharacterCard";
import { useGetCharacterByCrew } from "../hooks/useGetCharacterByCrew.hook";
import { useState, useEffect, useRef } from "react";

export const CharacterCardSection = () => {
  const { data: mugiwaraCharacters } = useGetCharacterByCrew(
    "The Chapeau de Paille crew"
  );
  const [showScrollHint, setShowScrollHint] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollContainerRef.current &&
        scrollContainerRef.current.scrollLeft > 0
      ) {
        setShowScrollHint(false);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative p-16 h-screen bg-oceanBlue-700 max-w-screen flex flex-col justify-center items-center">
      <span className="flex w-full text-start text-white text-3xl uppercase font-bold">
        Mugiwara's Crews
      </span>
      <div
        ref={scrollContainerRef}
        className="flex flex-row overflow-x-auto gap-4 p-4 max-w-full h-full scrollbar-hide items-end mb-36 overflow-visible"
      >
        {mugiwaraCharacters &&
          mugiwaraCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>
      {showScrollHint && (
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "0%",
            transform: "translate(-50%, -50%)",
          }}
          className=" text-white font-semibold"
        >
          {`Desplaza para ver más > >`}
        </div>
      )}
    </section>
  );
};
