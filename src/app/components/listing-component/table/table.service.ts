import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private apiUrl = "https://dummyjson.com/products";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.apiUrl);
  }
  getDetails(id: string) {
    return this.http.get<any>(this.apiUrl + "/" + id)
  }
}
