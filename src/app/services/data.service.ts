import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env }  from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Correct way to get data from API is typing the response in custom Interfaces
  // but in this case we are using any type because we are using few values of the response
  // and we don't care about the rest of the data. So it gonna be a huge effort just for control 
  // 3 or 4 values of the response.
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


