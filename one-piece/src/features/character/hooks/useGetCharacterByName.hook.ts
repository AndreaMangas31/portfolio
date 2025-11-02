import { useQuery } from "react-query";
import { fetchCharacterByName } from "../../../api/calls/charcterApi";
import { deformatCharacterName } from "../../../shared/helpers";

export const useGetCharacterByName = (name: string | undefined) => {
  return useQuery(["characters", name], () =>
    fetchCharacterByName(name ? deformatCharacterName(name) : undefined)
  );
};
