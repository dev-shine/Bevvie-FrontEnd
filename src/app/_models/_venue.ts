export class Venue {
  id: string;
  name: string;
  image: string;
  radius: number;
  location: object;
  type: string;
  coordinates: venueCoordinates;
  latitude: number;
  longitude: number;
  schedule: object[];
  weekday: number;
  openTime: number;
  closetime: number;
}

export class venueCoordinates{
  latitude: number;
  longitude: number;
}
