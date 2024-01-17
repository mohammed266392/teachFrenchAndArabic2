import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Review } from '../object';

@Injectable({
  providedIn: 'root',
})

export class ReviewsServiceService {

  public getRequest : string = "http://localhost:8080/reviews"

  constructor(private http : HttpClient) { }

  getAllReviews() : Observable<Review[]> {
    // var headers_object = new HttpHeaders();

    // headers_object.append("Vary",  "Origin")
    // headers_object.append("Vary",  "Access-Control-Request-Method")
    // headers_object.append("Vary",  "Access-Control-Request-Headers")
    // headers_object.append("X-Content-Type-Options",  "nosniff")
    // headers_object.append("X-XSS-Protection",  "0")
    // headers_object.append("Cache-Control",   "no-cache, no-store, max-age=0, must-revalidate")
    // headers_object.append("Pragma",  "no-cache")
    // headers_object.append("Expires",   "0")
    // headers_object.append("X-Frame-Options",   "DENY")
    // headers_object.append("Content-Type",  "application/json")
    // headers_object.append("Transfer-Encoding",   "chunked")
    // headers_object.append("Date",  "Wed, 17 Jan 2024 09:02:20 GMT")



    
    // const httpOptions = {
    //   headers: headers_object
    // };

    // return this.http.get<Review[]>(this.getRequest, httpOptions);
    return this.http.get<Review[]>(this.getRequest);
  }
}
