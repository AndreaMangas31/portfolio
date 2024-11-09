import { useQuery } from "react-query";
import { fetchAllCharacters } from "../../../api/calls/charcterApi";

export const useGetCharacters = () => {
  return useQuery(["characters"], () => fetchAllCharacters());
};
