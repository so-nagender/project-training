interface AuthorCheck{
    authorname:string
    country:string
    lastbook:string
    dob:string
    star:number
}
interface BookCheck{
    bookname:string
    price:number
    author:string
}

export const authordata:AuthorCheck[]=[
    {authorname:'Shikhar',country:'Israel',lastbook:'Java',dob:'01-01-2019',star:3},
    {authorname:'raju',country:'India',lastbook:'php',dob:'01-02-2019',star:2},
    {authorname:'nishant',country:'US',lastbook:'javascript',dob:'01-03-2019',star:4},
    {authorname:'Monika',country:'Pakistan',lastbook:'Java',dob:'01-02-2019',star:4}
]
export const bookdata:BookCheck[]=[
    {bookname:'java',price:100,author:'raju'},
    {bookname:'php',price:100,author:'shiwani'},
    {bookname:'c++',price:200,author:'rajat'},
    {bookname:'angular',price:100,author:'shikhar'},
    {bookname:'c',price:100,author:'shubham'}
    
]