export type User = {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  phoneNr: string;
  verifiedBreeder: boolean;
  pictures: string[];
  dogBreeds: string[];
  prevSearch: string[];
};

export default User;
