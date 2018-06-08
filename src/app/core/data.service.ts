import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=harrypotter&fields=items/volumeInfo(title,authors,description,averageRating,imageLinks/thumbnail)')
  }
}
