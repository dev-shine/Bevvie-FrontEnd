export class Venue {
  _id: string;
  name: string;
  image: venueImage;
  radius: number;
  location: venueLocation;
  schedule: venueSchedule[];
}
export class venueLocation{
  coordinates: number[];
  type:string;
}
export class venueSchedule{
  weekday:number;
  openTime:Date;
  closeTime:Date;
  isClose:boolean;
}
export class venueImage{
  _id: string;
}
