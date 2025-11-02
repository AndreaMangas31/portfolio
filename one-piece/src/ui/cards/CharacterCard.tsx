import { Character } from "../../api/interfaces";
import { CharacterDescription } from "../../features/character/components/CharcterDescription";
import { getFolderName } from "../../shared/helpers";

interface CharacterCardProps {
  character: Character;
}
export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div
      id={"card_" + character.name}
      className="group relative flex flex-col shadow justify-center items-center rounded-md bg-gradient-to-t from-oceanBlue-400 min-w-80 min-h-80 hover:from-oceanBlue-600 hover:min-h-72 transition-all cursor-pointer"
    >
      {/* Images */}
      <img
        alt={character.name + "_iddle"}
        className="absolute group-hover:hidden bottom-0 z-1 h-[500px]   object-cover group-hover:h-[450px] ease-in-out duration-800 transition-all"
        src={`/images/characters/${getFolderName(
          character.name
        )}/${getFolderName(character.name)}-iddle.png`}
      ></img>
      <img
        alt={character.name + "_pose"}
        className="absolute hidden group-hover:flex bottom-0 z-1 h-80 transition-all duration-800 ease-in-out group-hover:h-[450px] "
        src={`/images/characters/${getFolderName(
          character.name
        )}/${getFolderName(character.name)}-attack.png`}
      ></img>
      {/* Description */}
      <CharacterDescription character={character} />
    </div>
  );
};
