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
    return this.http.get(this.authenticationService.apiBaseUrl+'venues/'+userId, this.getHeader())
      .map((response: Response) => response.json());
  }

  deleteVenue(userId: string ): Observable<Venue[]> {
    // delete users from api by id
    return this.http.delete(this.authenticationService.apiBaseUrl+'venues/'+userId, this.getHeader())
      .map((response: Response) => response.json());
  }

  postVenueUpdate(userId: string, params: any):Observable<Venue>{
    return this.http.post(this.authenticationService.apiBaseUrl+'venues/'+userId, params, this.getHeader())
      .map((response: Response) => response.json());
  }

}
