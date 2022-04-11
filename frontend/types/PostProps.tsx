// Types

export type UserProps = {
  firstname: string;
  lastname: string;
  "age": number;
  "email": string;
  "phoneNr": number;
  "verifiedBreeder": boolean;
  "pictures": string[];
  "dogBreeds": string[];
  "prevSearch": string[];
}

export type BreederProps = {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  phoneNr: string;
  verifiedBreeder: boolean;
  pictures: string[];
  dogBreeds: string[];
}

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
export const InitialFilter:FilterState = {
  myFavorites: false,
  priceInterval:[0,26000],
  onlyPuppies: false,
  certifiedBreeders: false,
  dogBreeds:[],
  //area: GeoJSON
}
