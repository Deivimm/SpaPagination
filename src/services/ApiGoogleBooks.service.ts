import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../app/Book';

@Injectable({
  providedIn: 'root'
})
export class ApiGoogleBooksService {

  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<Book[]> {
    const url = `${this.apiUrl}?q=${query}`;
    return this.http.get<{ items: Book[] }>(url).pipe(
      map(response => response.items || [])
    );
  }
}
