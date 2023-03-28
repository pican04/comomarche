import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  apiURL = 'http://localhost:8000/';

  constructor(private _http : HttpClient) { }

  getProduits() : Observable<any> {
    return this._http.get(`${this.apiURL}product/all`);
  }
}
