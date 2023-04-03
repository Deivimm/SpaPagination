export interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors: string[];
      description: string;
      publishedDate: string;
    };
  }
  