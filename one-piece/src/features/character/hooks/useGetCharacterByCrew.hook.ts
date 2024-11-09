import { useQuery, UseQueryResult } from "react-query";
import { fetchCharacterByCrewName } from "../../../api/calls/charcterApi";
import { Character } from "../../../api/interfaces";
export const useGetCharacterByCrew = (
  crewName: string
): UseQueryResult<Character[]> => {
  return useQuery(["characters", crewName], () =>
    fetchCharacterByCrewName(crewName)
  );
};
