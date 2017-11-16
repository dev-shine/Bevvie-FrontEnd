import * as moment from "moment";
import _date = moment.unitOfTime._date;

export class User {
  _id:string;
  name: string;
  age: number;
  country: string;
  about: userAbout;
  birthday: Date;
  languages: string[];
  studies:string;
  images: userImage[];
  banned:boolean;
  about_validated:boolean;
  active:boolean;
  admin:boolean;
}

export class userImage{
  _id: string;
  validated? : boolean;
}
export class userAbout{
  validated? : boolean;
}
