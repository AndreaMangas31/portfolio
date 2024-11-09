import { Character } from "../../../api/interfaces";

interface CharacterCardProps {
  character: Character;
}
export const CharacterDescription = ({ character }: CharacterCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-2 px-4 z-2 absolute bottom-0 bg-gradient-to-t from-oceanBlue-900 text-white w-full rounded-b-md h-20 group-hover:h-40 ">
      <span className="uppercase text-2xl group-hover:text-xl font-extrabold">
        {character.name}
      </span>
      <div className="text-lg">
        <span className="hidden group-hover:flex">
          <span className="font-bold pr-2">Position: </span> {character.job}
        </span>
        <span className="hidden group-hover:flex">
          <span className="font-bold pr-2">Bounty: </span> {character.bounty}{" "}
          Berries
        </span>
        <span className="hidden group-hover:flex">
          <span className="font-bold pr-2">Height: </span> {character.size}
        </span>
      </div>
    </div>
  );
};
