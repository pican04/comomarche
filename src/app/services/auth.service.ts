import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  logIn(data: any) : Observable<any> {
    return this.http.post(`${this.apiURL}api/login_check`, data);
  }


}
