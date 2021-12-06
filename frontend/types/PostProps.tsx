// Types
export type PostProps = {
  dogBreed: string;
  price: number;
  dogAge: Date;
  postAge: Date;
  description: string;
  picture: string[];
}

export type FilterState = {
  myFavorites: boolean;
  priceInterval: number[];
  onlyPuppies: boolean;
  certifiedBreeders: boolean;
  dogBreeds: string[];
  //area: GeoJSON
}

export type SearchState = {
  displayType: number;
  searchQuery: string;
  searchResults: PostProps[];
}

// Standard objects and values, move to Redux later
export const startFilter = {
  myFavorites: false,
  priceInterval:[0,1000000],
  onlyPuppies: false,
  certifiedBreeders: false,
  dogBreeds:[],
  //area: GeoJSON
}
