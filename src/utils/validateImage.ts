export const fetchValidImage = async (imageUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(imageUrl, { method: "HEAD" });
    return response.ok;
  } catch (error: unknown) {
    console.error(error);
    return false;
  }
};
