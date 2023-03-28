import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiURL = 'http://localhost:8000/';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    }),
  };

  constructor(private _http : HttpClient) { }

  getPosts() : Observable<any> {
    return this._http.get(`${this.apiURL}post/all`);
  }

  recherchePost(data: any) : Observable<any> {
    return this._http.post('http://localhost:8000/post/search', data);
  }

}
