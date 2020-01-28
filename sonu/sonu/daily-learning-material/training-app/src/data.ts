interface Author{
    name: string;
    author: string;
    price: number;
    isbd: number;
    star:number;
}
interface Books{
    publication: string;
    country: string;
    last_book: string;
    DOB: number;
    star:number;
}

export var authordata:Author[] = [
    {name: "Physics" , author: "Chan" , price: 46 , isbd: 1098 , star: 5},
    {name: "Databases" , author: "Patel" , price: 34.8 , isbd: 1256 , star: 5},
    {name: "DAA" , author: "Amrendra Tripathi" , price: 60, isbd: 1036 , star: 5},
    {name: "Machine Learning" , author: "Aviral Sharma" , price: 57 , isbd: 45263 , star: 5} 
]

export var bookData:Books[] = [
    {publication:"BudgetBook" , country:"California" , last_book:"Relative Motion" , DOB: 1980 , star: 5},
    {publication:"Universal" , country:"India" , last_book:"Normal Form" , DOB: 1960 , star: 5},
    {publication:"Bharti" , country:"South Africa" , last_book:"Prims_law" , DOB: 1985 , star: 5},
    {publication:"balajee" , country:"Russia" , last_book:"CNN" , DOB: 1990 , star: 5}
]