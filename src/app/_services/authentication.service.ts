import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  public token: string;
  public develop: boolean = false;
  public apiBaseUrl: string = this.develop ? 'http://develapps.hopto.org:82/api/v1/' : 'http://35.176.99.13/';
  public apiBaseToken: string = '0948cb8e2637cf5f5b6ea6353733d1fd';


  constructor(private http: Http) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {

    let headers = new Headers({ 'register-token': this.apiBaseToken });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiBaseUrl+'login', { adminLogin: true, accessKey: password, accessType: 'password' }, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      })

  }

  public logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
