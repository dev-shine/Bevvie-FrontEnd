export class User {
  id:string;
  name: string;
  age: number;
  country: string;
  about: userAbout;
  languages: string[];
  studies:string;
  images: userImage[];
  banned:boolean;
  about_validated:boolean;
  active:boolean;
  admin:boolean;
}

export class userImage{
  validated : boolean;
}
export class userAbout{
  validated : boolean;
}
