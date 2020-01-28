interface Book{
    serial_Number: number,
    book_Name: string,
    author_Name: string,
    price: number,
    ISBN_Number: number,
    rating: number
}

export const book: Book[] =[
    {   serial_Number: 1,
        book_Name: "Jinnah- India, Partition, Independence",
        author_Name: "Jaswant Singh",
        price: 500,
        ISBN_Number: 0-4445-1215-6,
        rating: 7.6
    },
    {   serial_Number: 2,
        book_Name: "A Day in the Life of Kathmandu",
        author_Name: "Javed Ashraf",
        price: 300,
        ISBN_Number: 0-4545-1215-6,
        rating: 7.7
    },
    {   serial_Number: 3,
        book_Name: "The Discovery of India",
        author_Name: "Jawahar Lal Nehru",
        price: 400,
        ISBN_Number: 0-5245-1215-6,
        rating: 7.8
    },
    {   serial_Number: 4,
        book_Name: "Arms and the Man",
        author_Name: "G.B.Shaw",
        price: 450,
        ISBN_Number: 0-7845-6315-6,
        rating: 7.6
    },
    {   serial_Number: 5,
        book_Name: "Kanterbary Tells",
        author_Name: "Geofray Chosar",
        price: 650,
        ISBN_Number: 0-8545-4315-6,
        rating: 7.6
    },

]

interface Author {
    serial_Number: number,    
    author_Name: string,  
    country: string,  
    last_Book: string,
    year_of_Birth:number      
}

export const authors: Author[] =[
    { 
    serial_Number: 1,    
    author_Name: "Jaswant Singh",  
    country: "India",  
    last_Book: "India at Risk",
    year_of_Birth: 1910
    },
    { 
        serial_Number: 2,    
        author_Name: "Javed Ashraf",  
        country: "Pakistan",  
        last_Book: "A Day in the Life of Kathmandu",
        year_of_Birth: 1926
    },
    { 
        serial_Number: 3,    
        author_Name: "Jawahar Lal Nehru",  
        country: "India",  
        last_Book: "The Discovery of India",
        year_of_Birth: 1930
    },
    { 
        serial_Number: 4,    
        author_Name: "G.B.Shaw",  
        country: "London",  
        last_Book: "Arms and the Man",
        year_of_Birth: 1895
    },
    { 
        serial_Number: 5,    
        author_Name: "Geofray Chosar",  
        country: "London",  
        last_Book: "Kanterbary Tells",
        year_of_Birth: 1924
    }
]