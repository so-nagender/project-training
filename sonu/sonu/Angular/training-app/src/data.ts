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
    DOB: string;
    star:number;
}

export var bookdata:Author[] = [
    {name: "physics" , author: "Chan" , price: 46 , isbd: 1098 , star: 3},
    {name: "databases" , author: "Patel" , price: 34.8 , isbd: 1236 , star: 3},
    {name: "DAA" , author: "Amrendra Tripathi" , price: 60, isbd: 1036 , star: 3},
    {name: "Machine learning" , author: "Aviral Sharma" , price: 37 , isbd: 43263 , star: 3} 
]

export var authorData:Books[] = [
    {publication:"BudgetBook" , country:"California" , last_book:"Relative Motion" , DOB: "jun/23/1980" , star: 5},
    {publication:"Universal" , country:"India" , last_book:"Normal Form" , DOB: "jan/5/1990" , star: 5},
    {publication:"Bharti" , country:"South Africa" , last_book:"Prims_law" , DOB: "aug/3/1880" , star: 5},
    {publication:"balajee" , country:"Russia" , last_book:"CNN" , DOB: "dec/8/1875" , star: 5}
]