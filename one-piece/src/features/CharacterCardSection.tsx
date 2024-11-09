import { CharacterCard } from "../ui/cards/CharacterCard";
import { useGetCharacterByCrew } from "./character/hooks/useGetCharacterByCrew.hook";

export const CharacterCardSection = () => {
  const { data: mugiwaraCharacters } = useGetCharacterByCrew(
    "The Chapeau de Paille crew"
  );
  console.log("CHARACTERS", mugiwaraCharacters);
  return (
    <section className="h-screen bg-oceanBlue-700 max-w-screen flex flex-col justify-center items-center">
      <div className="flex flex-wrap gap-4 justify-center items-end ">
        {mugiwaraCharacters &&
          mugiwaraCharacters.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
      </div>
    </section>
  );
};
