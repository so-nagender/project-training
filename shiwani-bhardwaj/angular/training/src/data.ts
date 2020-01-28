interface Book
    {
        book_name: string,
        author_name:string,
        publishing_date:string,
        book_code:number,
        book_type:string,
        star:number
    }
export const Books_data : Book[]= [
       {
        book_name: "Three mistakes of my life",
        author_name:"chetan baghat",
        publishing_date:"may",
        book_code:5200,
        book_type:"thrill",
        star:5
},
{      
         book_name: "Three mistakes of my life",
        author_name:"chetan baghat",
        publishing_date:"may",
        book_code:5200,
        book_type:"thrill",
        star:2
},
{       book_name: "You were my crush",
        author_name:"chetan baghat",
        publishing_date:"may",
        book_code:5200,
        book_type:"thrill",
        star:5
},
{       book_name: "Three mistakes of my life",
        author_name:"chetan baghat",
        publishing_date:"may",
        book_code:5200,
        book_type:"thrill",
        star:4
},
{       book_name: "Three mistakes of my life",
        author_name:"chetan baghat",
        publishing_date:"may",
        book_code:5200,
        book_type:"thrill",
        star:3
}
]
interface Author
    {
        
        serial_number:number,
        author_name:string,
        country:string,
        last_book:string,
        year_of_birth:number,
        star:number
    }
  export  const Author_details : Author[]= [
        {
        
            serial_number:1,
            author_name:"Jaswant Singh",
            country:"india",
            last_book:"India at Risk",
            year_of_birth:1910,
            star:3
        },
        {
        
            serial_number:2,
            author_name:"Jawahar Lal Nehru",
            country:"india",
            last_book:"The Discovery of India",
            year_of_birth:1930,
            star:3
        },
        {
        
            serial_number:3,
            author_name:"Jawahar Lal Nehru",
            country:"india",
            last_book:"The Discovery of India",
            year_of_birth:1930,
            star:3
        },
        {
        
            serial_number:1,
            author_name:"Jaswant Singh",
            country:"india",
            last_book:"India at Risk",
            year_of_birth:1910,
            star:3
        },
        {
        
            serial_number:5,
            author_name:"Jawahar Lal Nehru",
            country:"india",
            last_book:"The Discovery of India",
            year_of_birth:1930,
            star:2
        },
    ]