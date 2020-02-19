interface Author{
    sr_no: number;
    authorname: string;
    country: string;
    lastbook: string;
    dob: string; 
    famousbooks: string;
    bio: string;
    path: string;
}
interface Books{
    serial_no: number;
    bookname: string;
    authornm: string;
    price: number;
    isbn: string;
    path: string;
}
export var authors : Author[] = [
    {sr_no:1, authorname: "Robin", country: "Gotham", lastbook: "Joker", dob: "02-01-1998", famousbooks: "LoveStory, Life, Fault in our stars", bio: "A talent with a great sense in literature", path: "/assets/images/iron.jpg"},
    {sr_no:2, authorname: "Zack", country: "Washington", lastbook: "Diplomats", dob: "02-02-1998", famousbooks: "LoveStory, Life, Fault in our stars", bio: "A talent with a great sense in literature", path: '/assets/images/chris.jpg'},
    {sr_no:3, authorname: "Trump", country: "Boston", lastbook: "Dumb", dob: "12-11-1988", famousbooks: "LoveStory, Life, Fault in our stars", bio: "A talent with a great sense in literature", path: "/assets/images/step.jpg"},
    {sr_no:4, authorname: "Chetan", country: "India", lastbook: "2 States", dob: "10-25-1898", famousbooks: "LoveStory, Life, Fault in our stars", bio: "A talent with a great sense in literature", path: "/assets/images/thor.jpg"},
    {sr_no:5, authorname: "Bhagat", country: "Sri Lanka", lastbook: "Sworn", dob: "09-11-1798", famousbooks: "LoveStory, Life, Fault in our stars", bio: "A talent with a great sense in literature", path: "/assets/images/black.jfif"},
    {sr_no:6, authorname: "Rashid", country: "Afghanistan", lastbook: "Sultan", dob: "08-21-1758", famousbooks: "LoveStory, Life, Fault in our stars", bio: "A talent with a great sense in literature", path: "/assets/images/hulk.webp"},
    {sr_no:7, authorname: "Ben", country: "Australia", lastbook: "Overwatch", dob: "06-06-1958", famousbooks: "LoveStory, Life, Fault in our stars", bio: "A talent with a great sense in literature", path: "/assets/images/ant.png"},
    {sr_no:8, authorname: "Steyn", country: "Africa", lastbook: "Twilight", dob:"11-06-1928", famousbooks: "LoveStory, Life, Fault in our stars", bio: "A talent with a great sense in literature", path: "/assets/images/spi.jfif"},
]

export var books : Books[] = [
    {serial_no: 1, bookname: 'goblet fire', authornm: 'Rowling', price: 1000, isbn: 'ABCD123', path: "/assets/images/gof.jpg"},
    {serial_no: 2, bookname: 'deadly Hallows', authornm: 'Harry', price: 1500, isbn: 'A12CD123', path: "/assets/images/dh.jpg"},
    {serial_no: 3, bookname: 'prisoner Azakaban', authornm: 'Eve', price: 2000, isbn: 'QWE123', path: "/assets/images/poa.svg"},
    {serial_no: 4, bookname: 'half Blood Prince', authornm: 'Jack', price: 1250, isbn: 'AB78123', path: "/assets/images/hbp.png"},
    {serial_no: 5, bookname: 'soccer Stone', authornm: 'Ryan', price: 1850, isbn: 'AB7878123', path: "/assets/images/ss.svg"},
    {serial_no: 6, bookname: 'golden Globe', authornm: 'Steve', price: 2550, isbn: 'B78554123', path: "/assets/images/gg.png"},
    {serial_no: 7, bookname: 'trapped', authornm: 'Rajkumar', price: 1789, isbn: 'A123', path: "/assets/images/trap.jpg"},
    {serial_no: 8, bookname: 'pitchers', authornm: 'Nel', price: 1478, isbn: 'A78123', path: "/assets/images/hp.jpg"},
]