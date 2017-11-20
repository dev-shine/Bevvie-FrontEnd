import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';

@Injectable()
export class UserService {

  private getHeader(): RequestOptions {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
    return new RequestOptions({ headers: headers, params: null});
  }

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getUsers(): Observable<any> {
    // get users from api
    return this.http.get(this.authenticationService.apiBaseUrl+'users', this.getHeader())
      .map((response: Response) => {
        if(response.status == 401){
          this.authenticationService.logout();
        }
        return response.json()
      });
  }

  getUsersWithParams(params: any): Observable<any> {
    // get users from api with offset

    let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});

    let options = new RequestOptions({ headers: headers, params: params });

    return this.http.get(this.authenticationService.apiBaseUrl+'users', options)
      .map((response: Response) => {
        if(response.status == 401){
          this.authenticationService.logout();
        }
        return response.json()
      });
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

  deleteUser(userId: string ): Observable<User[]> {
    // delete users from api by id
    return this.http.delete(this.authenticationService.apiBaseUrl+'users/'+userId, this.getHeader())
      .map((response: Response) => {
        if(response.status == 401){
          this.authenticationService.logout();
        }
        return response.json()
      });
  }

  postUsersValidate(userId: string, params: any): Observable<User>{
    // update validation field for a user
    return this.http.post(this.authenticationService.apiBaseUrl+'users/'+userId+'/validate', params, this.getHeader())
      .map((response: Response) => {
        if(response.status == 401){
          this.authenticationService.logout();
        }
        return response.json()
      });
  }
  postUsersBan(userId: string):Observable<User>{
    return this.http.post(this.authenticationService.apiBaseUrl+'users/'+userId+'/ban', {id: userId}, this.getHeader())
      .map((response: Response) => {
        if(response.status == 401){
          this.authenticationService.logout();
        }
        return response.json()
      });
  }
  postUsersUpdate(userId: string, params: any):Observable<User>{
    return this.http.post(this.authenticationService.apiBaseUrl+'users/'+userId, params, this.getHeader())
      .map((response: Response) => {
        if(response.status == 401){
          this.authenticationService.logout();
        }
        return response.json()
      });
  }

}
