export interface Book {
    id: string;
    volumeInfo: {
      imageLinks: any;
      title: string;
      authors: string[];
      description: string;
      publishedDate: string;
    };
  }
  