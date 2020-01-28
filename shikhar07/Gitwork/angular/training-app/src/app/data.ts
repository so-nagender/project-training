interface Author{
    authorname: string;
    country: string;
    lastbook: string;
    dob?: number; 
}
interface Books{
    bookname: string;
    authornm: string;
    price: number;
    isbn: string;
}
var obj1 : Author[] = [
    {authorname: "Robin", country: "Gotham", lastbook: "Joker"},
    {authorname: "Zack", country: "Washington", lastbook: "Diplomats"},
    {authorname: "Trump", country: "Boston", lastbook: "Dumb"},
    {authorname: "Chetan", country: "India", lastbook: "2 States"},
]

var obj2 : Books[] = [
    {bookname: 'Goblet of fire', authornm: 'Rowling', price: 1000, isbn: 'ABCD123'},
    {bookname: 'Deadly Hallows', authornm: 'Harry', price: 1500, isbn: 'A12CD123'},
    {bookname: 'Prisoner of Azakaban', authornm: 'Eve', price: 2000, isbn: 'QWE123'},
    {bookname: 'Soccer Stone', authornm: 'Jack', price: 1250, isbn: 'AB78123'},
]