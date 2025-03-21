import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchDisneyCharacters } from "../api/disneyApi";

const useGetDisneyCharacters = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: fetchDisneyCharacters,
    placeholderData: keepPreviousData,
  });
};

export default useGetDisneyCharacters;
