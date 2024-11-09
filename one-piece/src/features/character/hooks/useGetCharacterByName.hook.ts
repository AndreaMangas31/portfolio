import { useQuery } from "react-query";
import { fetchCharacterByName } from "../../../api/calls/charcterApi";

export const useGetCharacterByName = (name: string) => {
  return useQuery(["characters", name], () => fetchCharacterByName(name));
};
