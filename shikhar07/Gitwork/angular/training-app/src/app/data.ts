interface Author{
    sr_no: number;
    authorname: string;
    country: string;
    lastbook: string;
    dob?: number; 
}
interface Books{
    serial_no: number;
    bookname: string;
    authornm: string;
    price: number;
    isbn: string;
}
export var authors : Author[] = [
    {sr_no:1, authorname: "Robin", country: "Gotham", lastbook: "Joker"},
    {sr_no:2, authorname: "Zack", country: "Washington", lastbook: "Diplomats"},
    {sr_no:3, authorname: "Trump", country: "Boston", lastbook: "Dumb"},
    {sr_no:4, authorname: "Chetan", country: "India", lastbook: "2 States"},
    {sr_no:5, authorname: "Bhagat", country: "Sri Lanka", lastbook: "Sworn"},
    {sr_no:6, authorname: "Rashid", country: "Afghanistan", lastbook: "Sultan"},
    {sr_no:7, authorname: "Ben", country: "Australia", lastbook: "Overwatch"},
    {sr_no:8, authorname: "Steyn", country: "Africa", lastbook: "Twilight"},
]

export var books : Books[] = [
    {serial_no: 1, bookname: 'Goblet of fire', authornm: 'Rowling', price: 1000, isbn: 'ABCD123'},
    {serial_no: 2, bookname: 'Deadly Hallows', authornm: 'Harry', price: 1500, isbn: 'A12CD123'},
    {serial_no: 3, bookname: 'Prisoner of Azakaban', authornm: 'Eve', price: 2000, isbn: 'QWE123'},
    {serial_no: 4, bookname: 'Half Blood Prince', authornm: 'Jack', price: 1250, isbn: 'AB78123'},
    {serial_no: 5, bookname: 'Soccer Stone', authornm: 'Ryan', price: 1850, isbn: 'AB7878123'},
    {serial_no: 6, bookname: 'Golden Globe', authornm: 'Steve', price: 2550, isbn: 'B78554123'},
    {serial_no: 7, bookname: 'Trapped', authornm: 'Rajkumar', price: 1789, isbn: 'A123'},
    {serial_no: 8, bookname: 'Pitchers', authornm: 'Nel', price: 1478, isbn: 'A78123'},
]