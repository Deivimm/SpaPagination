import { Component, OnInit } from '@angular/core';
import { ApiGoogleBooksService } from 'src/services/ApiGoogleBooks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any[] = [];

  constructor(private apiGoogleBooksService: ApiGoogleBooksService) { }

  ngOnInit(): void {
    const query = 'Angular';

    this.apiGoogleBooksService.searchBooks(query).subscribe((data) => {
      this.books = data.map((item) => {
        return {
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || [],
          thumbnail: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150x200.png',
        };
      });
    });
  }
}
