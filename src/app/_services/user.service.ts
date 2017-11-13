import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';

@Injectable()
export class UserService {

  private getHeader(): RequestOptions{
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    return new RequestOptions({ headers: headers });

  }

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getUsers(): Observable<User[]> {
    // get users from api
    return this.http.get('users', this.getHeader())
      .map((response: Response) => response.json());
  }

  getUserById(userId: string): Observable<User[]> {
    // get users from api
    return this.http.get('users/'+userId, this.getHeader())
      .map((response: Response) => response.json());
  }

  deleteUser(userId: string ): Observable<User[]> {
    return this.http.delete('users/'+userId, this.getHeader())
      .map((response: Response) => response.json());
  }

  postUsersValidate(userId: string, params: Object): Observable<User[]>{
    return this.http.post('users/'+userId+'/validate', params, this.getHeader())
      .map((response: Response) => response.json());
  }

  getAvenues(): Observable<User[]> {
    // get avenues from api
    return this.http.get('venues', this.getHeader())
      .map((response: Response) => response.json());
  }

  getReports(): Observable<User[]> {
    // get reports from api
    return this.http.get('reports', this.getHeader())
      .map((response: Response) => response.json());
  }


}
