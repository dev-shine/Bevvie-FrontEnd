export class Report {
  _id:string;
  active:boolean;
  userReports: reports;
  userReported: reported;
  reason: string;
}
export class reports{
  _id:string;
  name:string;
}

export class reported{
  _id:string;
  name:string;
}
