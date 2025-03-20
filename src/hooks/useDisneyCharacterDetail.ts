import { useQuery } from "@tanstack/react-query";
import { fetchDisneyCharacterDetail } from "../api/disneyApi";

const useDisneyCharacterDetail = (id: string) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchDisneyCharacterDetail(id),
  });
};

export default useDisneyCharacterDetail;
