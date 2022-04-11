import {BreederProps, PostProps} from "../../../types/PostProps";


export const MockBreederData:BreederProps = {
  firstname: "Torvald",
  lastname: "Johannesen",
  age: 57,
  email: "torvald.johannesen@bark.no",
  phoneNr: "90102110",
  verifiedBreeder: true,
  pictures: [""],
  dogBreeds: [""],
}

export const MockPostData:PostProps = {
      picture: ['../assets/mock/picture/post-image.jpg'],
      price: 3500,
      dogAge: new Date(200002002),
      dogBreed: 'Golden Retriver',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      postAge: new Date()
    }

export const MockData:PostProps[] = [{
    picture: ['../../assets/mock/picture/post-image.jpg'],
    price: 3500,
    dogAge: new Date(200002002),
    dogBreed: 'Golden Retriver',
    description: 'Pluto is the best dog in the world!',
    postAge: new Date()
},
  {
    picture: ['../../assets/mock/picture/post-image.jpg'],
    price: 2000,
    dogAge: new Date(200002002),
    dogBreed: 'Golden Retriver',
    description: 'Pluto is the best dog in the world!',
    postAge: new Date()
  },
  {
    picture: ['../../assets/mock/picture/post-image.jpg'],
    price: 1500,
    dogAge: new Date(200002002),
    dogBreed: 'Golden Retriver',
    description: 'Pluto is the best dog in the world!',
    postAge: new Date()
  },
  {
    picture: ['../../assets/mock/picture/post-image.jpg'],
    price: 7500,
    dogAge: new Date(200002002),
    dogBreed: 'Golden Retriver',
    description: 'Pluto is the best dog in the world!',
    postAge: new Date()
  },
  {
    picture: ['../../assets/mock/picture/post-image.jpg'],
    price: 5500,
    dogAge: new Date(200002002),
    dogBreed: 'Golden Retriver',
    description: 'Pluto is the best dog in the world!',
    postAge: new Date()
  },
  {
    picture: ['../../assets/mock/picture/post-image.jpg'],
    price: 3500,
    dogAge: new Date(200002002),
    dogBreed: 'Golden Retriver',
    description: 'Pluto is the best dog in the world!',
    postAge: new Date()
  },
  {
    picture: ['../../assets/mock/picture/post-image.jpg'],
    price: 500,
    dogAge: new Date(200002002),
    dogBreed: 'Golden Retriver',
    description: 'Pluto is the best dog in the world!',
    postAge: new Date()
  },
  {
    picture: ['../../assets/mock/picture/post-image.jpg'],
    price: 3500,
    dogAge: new Date(200002002),
    dogBreed: 'Golden Retriver',
    description: 'Pluto is the best dog in the world!',
    postAge: new Date()
  }
]