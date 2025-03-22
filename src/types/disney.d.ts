interface IDisneyCharacter {
  id: number;
  name: string;
  imageUrl: string;
}

interface IDisneyCharacterDetail extends IDisneyCharacter {
  films: string[];
  sourceUrl: string;
}
