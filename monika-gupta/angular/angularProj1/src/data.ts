interface authorData{
    id : number
    authorName : string
    country : string
    yearOfBirth : string
    lastBook : string
    star : number
    bio : string
}
interface bookData{
    id : number
    bookName : string
    authorName : string
    price : number
    ispNo : number
    star : number
    bio : string
}

export var author : authorData[] = [ 
    {id : 1,
    authorName: 'Javier Moro',
    country: 'India' , 
    yearOfBirth: '01-05-1998' , 
    lastBook : 'Android',
    star : 3,
    bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {id : 2,
    authorName: 'Thornton',
    country: 'China' , 
    yearOfBirth: '07-09-1976' , 
    lastBook : 'Angular',
    star : 4,
    bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    
    {id : 3,
    authorName: 'The Bird', 
    country: 'US' , 
    yearOfBirth: '03-26-1887' , 
    lastBook : 'Physics',
    star : 4,
    bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {id : 4,
    authorName: 'G.D. Pradhan', 
    country: 'Japan' , 
    yearOfBirth: '07-19-1987' , 
    lastBook : 'Javascript',
    star : 3,
    bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {id : 5,
    authorName: 'Neel Singh', 
    country: 'India' , 
    yearOfBirth: '04-03-1980' , 
    lastBook : 'Typescript',
    star : 2,
    bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    }
];
export var book : bookData[] = [ 
    {id : 1,
    bookName : 'The Red Sari',
    authorName : 'Javier Moro',
    price : 600.00,
    ispNo : 567567,
    star : 3,
     bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    
    {id : 2,
    bookName : 'Walking With Gaints',
    authorName : 'Thornton',
    price : 567.00,
    ispNo : 534234,
    star : 3,
     bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {id : 3,
    bookName : 'Larry',
    authorName : 'The Bird',
    price : 787.00,
    ispNo : 567225,
    star : 5,
     bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {id : 4,
    bookName : 'My Music My Life',
    authorName : 'G.D. Pradhan',
    price :690.00,
    ispNo : 345567,
    star : 4,
    bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {id : 5,
    bookName : 'One Life is Not Enough',
    authorName : 'Neel Singh',
    price : 707.00,
    ispNo : 544646,
    star : 3,
    bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    }
   
 ];
//  export var authorDetailData : authorsdetail[] = [ 
//     {
//     authorName: 'Javier Moro',
//     country: 'India' , 
//     yearOfBirth: '01-05-1998' , 
//     bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
//     lastBook : 'Android',
//     star : 3
//     },
//     {
//     authorName: 'Thornton',
//     country: 'China' , 
//     yearOfBirth: '07-09-1976' , 
//     bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
//     lastBook : 'Angular',
//     star : 4
//     },
    
//     {
//     authorName: 'The Bird', 
//     country: 'US' , 
//     yearOfBirth : '03-26-1887' , 
//     bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
//     lastBook : 'Physics',
//     star : 4
//     },
//     {
//     authorName: 'G.D. Pradhan', 
//     country: 'Japan' , 
//     yearOfBirth : '07-19-1987' ,
//     bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 
//     lastBook : 'Javascript',
//     star : 3
//     },
//     {
//     authorName: 'Neel Singh', 
//     country: 'India' , 
//     yearOfBirth: '04-03-1980' , 
//     bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
//     lastBook : 'Typescript',
//     star : 2
//     }
// ];

