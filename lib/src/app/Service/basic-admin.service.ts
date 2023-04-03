import { HttpBackend, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { BasicAdmin } from '../Model/basic-admin';  

@Injectable({
  providedIn: 'root'
})
export class BasicAdminService {
  httpOption;

  constructor(private HttpClient:HttpClient ) { 

    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };

  }
  // function to handle responce erroes
  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    // Return an observable with a user-facing error message.
    return throwError(
      ()=>new Error('Error occured, please try again')
    )
  }

  getAllBasicAdmins():Observable<BasicAdmin[]>
  {
    return this.HttpClient.get<BasicAdmin[]>(`http://localhost:8080/basicAdmin`);
  }

  addBasicAdmin(newBasicAdmin: BasicAdmin):Observable<BasicAdmin[]>
  {
    return this.HttpClient.post<BasicAdmin[]>(`http://localhost:8080/basicAdmin`,JSON.stringify(newBasicAdmin),this.httpOption)
    .pipe(
      retry(2), // if any error happened go request twice, maybe it;'s a problem a internet connection
      catchError(this.handleError)// calling handle error function
    );
  }

  updateBasicAdmin()
  {

  }

  deleteBasicAdmin()
  {

  }
}
