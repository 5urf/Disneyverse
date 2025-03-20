interface DisneyCharacter {
  id: number;
  name: string;
  imageUrl: string;
}

interface DisneyCharacterDetail extends DisneyCharacter {
  films: string[];
  sourceUrl: string;
}
