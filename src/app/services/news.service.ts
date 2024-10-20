import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://api.npoint.io/d275425a434e02acf2f7';
  private newsCategoryApiUrl = 'https://api.npoint.io/91298d970c27e9a06518';

  constructor(private http: HttpClient) { }

  getNewsList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getNewsItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/News/${id}`);
  }

  getNewsCategories(): Observable<any> {
    return this.http.get<any>(this.newsCategoryApiUrl);
  }
}
