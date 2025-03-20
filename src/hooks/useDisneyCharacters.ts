import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchDisneyCharacters } from "../api/disneyApi";

const useDisneyCharacters = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: fetchDisneyCharacters,
    placeholderData: keepPreviousData,
  });
};

export default useDisneyCharacters;
