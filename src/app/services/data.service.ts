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

  getStarships(page: number): Observable<any> {
    return this.http.get(env.apiUrl + 'starships', {
      params: { page: page.toString() }
    });
  }
}
