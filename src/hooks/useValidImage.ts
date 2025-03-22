import { useQuery } from "@tanstack/react-query";
import { fetchValidImage } from "../utils/validateImage";

const useValidImage = (imageUrl: string) => {
  return useQuery({
    queryKey: ["imageValidation", imageUrl],
    queryFn: () => fetchValidImage(imageUrl),
    enabled: !!imageUrl,
  });
};

export default useValidImage;
