interface Books {
  book_name: string;
  Price: number;
  Book_author: string;
  ISBN: number;
  stars: number;
}

interface Authors {
  author_name: string;
  Date_of_birth: any;
  Country: string;
  Famous_books: string;
  stars: number;
}

export const books: Books[] = [
  {
    book_name: 'five on treasure island',
    Price: 147,
    Book_author: 'Enid Blyton',
    ISBN: 9781581180671,
    stars: 5
  },
  {
    book_name: 'The Book of Why',
    Price: 517,
    Book_author: 'Judia Pearl',
    ISBN: 9781581180671,
    stars: 4
  },
  {
    book_name: 'Adventures of Sherlock Holmes',
    Price: 147,
    Book_author: 'Sir Arthur Conan Doyale',
    ISBN: 9781581180671,
    stars: 3
  },
  {
    book_name: 'Adventures of Tom Sawyeer',
    Price: 749,
    Book_author: 'Mark Twain',
    ISBN: 9781581180671,
    stars: 2
  }
];

export const authors: Authors[] = [
  {
    author_name: 'Enid Blyton',
    Date_of_birth: '11 August 1897',
    Country: 'United Kingdom',
    Famous_books: 'The Enchanted ',
    stars: 5
  },
  {
    author_name: 'Judia Pearl',
    Date_of_birth: ' 4 September 1936',
    Country: 'Israel',
    Famous_books: ' Casuality',
    stars: 3
  },
  {
    author_name: ' Sir Arthur Conan Doyale',
    Date_of_birth: '22 May 1859',
    Country: 'United Kingdom',
    Famous_books: ' The Lost World',
    stars: 4
  },
  {
    author_name: 'Mark Twain',
    Date_of_birth: '30 November 1835',
    Country: 'United States',
    Famous_books: ' etc',
    stars: 1
  }
];
