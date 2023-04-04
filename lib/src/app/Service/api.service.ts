import { Injectable } from '@angular/core';
//importing libraries for making HTTP calls
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  /**
   * 0- Going to Routes and Putting them In Routes File
   * 1- Making the Interceptor
   * 2- Making the Service With the URLS
   * 3-Observable<any>  <<< Save me alot of errors
   *
   */

  signup(model: any): Observable<any> {
    return this.httpClient.post(
      'http://127.0.0.1:8080/temp/admin-signup',
      model
    );
  } // Sign up

  login(model: any): Observable<any> {
    return this.httpClient.post(
      'http://127.0.0.1:8080/login/basicAdmin',
      model
    );
  } // Log in

  addBook(model: any): Observable<any> {
    return this.httpClient.post(
      'http://127.0.0.1:8080/book/',
      model
    );
  } // Log in

}
