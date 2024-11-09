import { Character } from "../../api/interfaces";
import { CharacterDescription } from "../../features/character/components/CharcterDescription";
import { getFolderName } from "../../shared/helpers";

interface CharacterCardProps {
  character: Character;
}
export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="group relative flex flex-col shadow justify-center items-center rounded-md bg-gradient-to-t from-oceanBlue-400  w-80 h-80 hover:h-72 transition-all">
      {/* Images */}
      <img
        alt={character.name + "_iddle"}
        className="absolute group-hover:hidden bottom-0 z-1 h-80 group-hover:h-[450px] transition-all"
        src={`/images/characters/${getFolderName(
          character.name
        )}/${getFolderName(character.name)}-iddle.png`}
      ></img>
      <img
        alt={character.name + "_pose"}
        className="absolute hidden group-hover:flex bottom-0 z-1 h-80 group-hover:h-[450px] transition-all"
        src={`/images/characters/${getFolderName(
          character.name
        )}/${getFolderName(character.name)}-attack.png`}
      ></img>
      {/* Description */}
      <CharacterDescription character={character} />
    </div>
  );
};
