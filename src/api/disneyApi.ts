const URL = "https://disney_api.nomadcoders.workers.dev";

export const fetchDisneyCharacters = async (): Promise<DisneyCharacter[]> => {
  const response = await fetch(`${URL}/characters`);
  return response.json();
};

export const fetchDisneyCharacterDetail = async (
  id: string
): Promise<DisneyCharacterDetail> => {
  const response = await fetch(`${URL}/characters/${id}`);
  return response.json();
};
