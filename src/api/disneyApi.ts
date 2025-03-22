const URL = "https://disney_api.nomadcoders.workers.dev";

export const fetchDisneyCharacters = async (): Promise<IDisneyCharacter[]> => {
  const response = await fetch(`${URL}/characters`);
  return response.json();
};

export const fetchDisneyCharacterDetail = async (
  id: string
): Promise<IDisneyCharacterDetail> => {
  const response = await fetch(`${URL}/characters/${id}`);
  return response.json();
};
