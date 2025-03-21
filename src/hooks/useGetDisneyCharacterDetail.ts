import { useQuery } from "@tanstack/react-query";
import { fetchDisneyCharacterDetail } from "../api/disneyApi";

const useGetDisneyCharacterDetail = (id: string) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchDisneyCharacterDetail(id),
    enabled: !!id,
  });
};

export default useGetDisneyCharacterDetail;
