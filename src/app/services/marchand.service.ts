import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarchandService {
  apiURL = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  createMarchand(data: any) : Observable<any> {
    return this.http.post(`${this.apiURL}marchand/add`, data);
  }

  creerPost(data: any) : Observable<any> {
    return this.http.post(`${this.apiURL}post/add`, data);
  }

}
