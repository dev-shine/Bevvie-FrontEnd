import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/authentication.service';
import { Report } from '../_models/_report';
import { User} from "../_models/user";

@Injectable()
export class ReportService{

  private getHeader(): RequestOptions {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': 'Bearer '+this.authenticationService.token});
    return new RequestOptions({ headers: headers, params: null});
  }

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getReports(): Observable<any> {
    // get users from api

    let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});

    let options = new RequestOptions({ headers: headers, params: {statistics : true}});

    return this.http.get(this.authenticationService.apiBaseUrl+'reports', options)
      .map((response: Response) => response.json());
  }
  getReportsDetail(userId:string): Observable<any> {
    // get users from api

    let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});

    let options = new RequestOptions({ headers: headers, params: {userReported : userId}});

    return this.http.get(this.authenticationService.apiBaseUrl+'reports', options)
      .map((response: Response) => response.json());
  }

  getReportsWithParams(params: any): Observable<any> {
    // get users from api with offset

    let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});

    let options = new RequestOptions({ headers: headers, params: params });

    return this.http.get(this.authenticationService.apiBaseUrl+'users', options)
      .map((response: Response) => {
        return response.json()
      });
  }

  getReportById(reportId: string): Observable<Report> {
    // get usersfrom api by id

    return this.http.get(this.authenticationService.apiBaseUrl+'reports/'+reportId, this.getHeader())
      .map((response: Response) => response.json());
  }

  getUserById(userId: string): Observable<User> {
    // get usersfrom api by id
    return this.http.get(this.authenticationService.apiBaseUrl+'users/'+userId, this.getHeader())
      .map((response: Response) => {
        if(response.status == 401){
          this.authenticationService.logout();
        }
        return response.json()
      });
  }

  logOut(){
    this.authenticationService.logout();
  }
}
