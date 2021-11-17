import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env }  from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDataList(endpoint: string, page: number): Observable<any> {
    return this.http.get(env.apiUrl + endpoint, {
      params: { page: page.toString() }
    });
  }
  
  getDataDetail(endpoint: string, id: number): Observable<any> {
    return this.http.get(env.apiUrl + endpoint + '/' + id);
  }

  getStarship(id: number): Observable<any> {
    return this.http.get(env.apiUrl + 'starships/' + id);
  }

  getFilm(id: number): Observable<any> {
    return this.http.get(env.apiUrl + 'films/' + id);
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get(env.apiUrl + 'people/' + id);
  }
}


