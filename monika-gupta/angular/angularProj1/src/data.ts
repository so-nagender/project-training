interface authorData{
    id : number
    authorName : string
    country : string
    yearOfBirth : number
    lastBook : string
    star : number
}
interface bookData{
    id : number
    bookName : string
    authorName : string
    price : number
    ispNo : number
    star : number
}
export var author : authorData[] = [ 
    {id : 1,
    authorName: 'Javier Moro',
    country: 'India' , 
    yearOfBirth: 1998 , 
    lastBook : 'Android',
    star : 3
    },
    {id : 2,
    authorName: 'Thornton',
    country: 'China' , 
    yearOfBirth: 1976 , 
    lastBook : 'Angular',
    star : 4
    },
    
    {id : 3,
    authorName: 'The Bird', 
    country: 'US' , 
    yearOfBirth: 1887 , 
    lastBook : 'Physics',
    star : 4
    },
    {id : 4,
    authorName: 'G.D. Pradhan', 
    country: 'Japan' , 
    yearOfBirth: 1987 , 
    lastBook : 'Javascript',
    star : 3
    },
    {id : 5,
    authorName: 'Neel Singh', 
    country: 'India' , 
    yearOfBirth: 1980 , 
    lastBook : 'Typescript',
    star : 2
    }
];
export var book : bookData[] = [ 
    {id : 1,
    bookName : 'The Red Sari',
    authorName : 'Javier Moro',
    price : 600.00,
    ispNo : 567567,
    star : 3
    },
    
    {id : 2,
    bookName : 'Walking With Gaints',
    authorName : 'Thornton',
    price : 567.00,
    ispNo : 534234,
    star : 3
    },
    {id : 3,
    bookName : 'Larry',
    authorName : 'The Bird',
    price : 787.00,
    ispNo : 567225,
    star : 5
    },
    {id : 4,
    bookName : 'My Music My Life',
    authorName : 'G.D. Pradhan',
    price :690.00,
    ispNo : 345567,
    star : 4
    },
    {id : 5,
    bookName : 'One Life is Not Enough',
    authorName : 'Neel Singh',
    price : 707.00,
    ispNo : 544646,
    star : 3
    }
   
 ];
