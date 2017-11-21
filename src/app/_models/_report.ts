export class Report {
  _id:string;
  image:string;
  userReported: reported;
  reports: userReports[];
  reason: string;
  count:number;
}
export class userReports{
  _id:string;
  reason: string;
  name:string;
}

export class reported{
  _id:string;
  name:string;
}
