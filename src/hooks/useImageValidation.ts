import { useQuery } from "@tanstack/react-query";

const useValidImage = (imageUrl: string) => {
  //FIXME - console.error 처리
  return useQuery({
    queryKey: ["imageValidation", imageUrl],
    queryFn: async () => {
      const response = await fetch(imageUrl, { method: "HEAD" });
      return response.ok;
    },
    enabled: !!imageUrl,
  });
};

export default useValidImage;
