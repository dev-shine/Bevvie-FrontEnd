import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/authentication.service';
import { Venue } from '../_models/_venue';

@Injectable()
export class VenueService {

  private getHeader(): RequestOptions {
    // add authorization header with jwt token
    let headers = new Headers({'register-token': this.authenticationService.apiBaseToken});
    return new RequestOptions({ headers: headers, params: null});
  }

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getVenues(): Observable<any> {
    // get users from api
    return this.http.get(this.authenticationService.apiBaseUrl+'venues', this.getHeader())
      .map((response: Response) => response.json());
  }

  getVenuesWithParams(params: any): Observable<any> {
    // get users from api with offset

    let headers = new Headers({'register-token': this.authenticationService.apiBaseToken});
    let options = new RequestOptions({ headers: headers, params: params });

    return this.http.get(this.authenticationService.apiBaseUrl+'venues', options)
      .map((response: Response) => response.json());
  }

  getVenueById(userId: string): Observable<Venue> {
    // get usersfrom api by id
    let headers = new Headers({'Authorization': 'Bearer '+this.authenticationService.token});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.authenticationService.apiBaseUrl+'venues/'+userId, options)
      .map((response: Response) => response.json());
  }

  deleteVenue(userId: string ): Observable<Venue[]> {
    // delete users from api by id
    let headers = new Headers({'Authorization': 'Bearer '+this.authenticationService.token});
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.authenticationService.apiBaseUrl+'venues/'+userId, options)
      .map((response: Response) => response.json());
  }

  postVenueUpdate(userId: string, params: any):Observable<Venue>{
    let headers = new Headers({'Authorization': 'Bearer '+this.authenticationService.token});
    let options = new RequestOptions({ headers: headers, params: params });

    return this.http.post(this.authenticationService.apiBaseUrl+'venues/'+userId, params, options)
      .map((response: Response) => response.json());
  }
  postNewVenue(params: any):Observable<Venue>{
    let headers = new Headers({'Authorization': 'Bearer '+this.authenticationService.token});
    let options = new RequestOptions({ headers: headers, body: params });

    return this.http.post(this.authenticationService.apiBaseUrl+'venues', params, options)
      .map((response: Response) => response.json());
  }

  postNewImage(image:any):Observable<any>{
    var formData = new FormData();
    formData.append('file', image, image.name);

    let headers = new Headers({'Authorization': 'Bearer '+this.authenticationService.token});
    let options = new RequestOptions({ headers: headers, body: formData });

    return this.http.post(this.authenticationService.apiBaseUrl+'images', formData, options)
      .map((response: Response) => response.json());
  }
  logOut(){
    this.authenticationService.logout();
  }
}
