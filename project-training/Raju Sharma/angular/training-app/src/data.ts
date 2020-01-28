interface AuthorInterface {
    authorName: string
    authorCountry: string
    authorLastBook: string
    authorAge: number
    rate: number
}
interface BookInterface {
    bookName: string
    bookAuthorName: string
    bookPrice: number
    bookISPno: number
    rate:number
}
//interface authorInterface extends Array<authorInterface>{}
export var authors: AuthorInterface[] = [
    {authorName: 'Raju Sharma', authorCountry: 'India', authorLastBook: 'Data Structure', authorAge: 22, rate: 5 },
    {authorName: 'Monika', authorCountry: 'Bangladesh', authorLastBook: 'Kahani', authorAge: 33, rate: 4 },
    {authorName: 'Shiwani', authorCountry: 'India', authorLastBook: 'StepUp', authorAge: 30, rate: 5 },
    {authorName: 'Niharika', authorCountry: 'India', authorLastBook: 'One', authorAge: 22, rate: 5 },
    {authorName: 'Nancy Momoland', authorCountry: 'South Korea', authorLastBook: 'Domkeis', authorAge: 19, rate: 0 } 
];    

export var books: BookInterface[] = [
    {bookName: 'Half girlfriend', bookAuthorName: 'Chetan Bhagat', bookPrice: 400, bookISPno: 1232, rate: 3},
    {bookName: 'EveryWhere', bookAuthorName: 'Nency', bookPrice: 3421, bookISPno: 3332, rate: 4},
    {bookName: 'Guilt', bookAuthorName: 'John Son', bookPrice: 290, bookISPno: 5232, rate: 5},
    {bookName: 'Chappak', bookAuthorName: 'Deependra', bookPrice: 1400, bookISPno: 2332, rate: 2},
    {bookName: 'Kill Bill', bookAuthorName: 'Raman Raghav', bookPrice: 4400, bookISPno: 1152, rate:3}
];








    //   interface IenumServiceGetOrderBy {
    //     authorName: string
    // authorCountry: string
    // authorLastBook: string
    // authorDOB: number
    // }

    // // notice i am not using the []
    // //var oneResult: IenumServiceGetOrderBy = { id: 0, label: 'CId', key: 'contentId'};

    // //notice i am using []
    // // it is read like "array of IenumServiceGetOrderBy"
    // var ArrayOfResult: IenumServiceGetOrderBy[] = 
    // [
    //     { authorName: 'Raju Sharma',
    //     authorCountry: 'India',
    //     authorLastBook: 'Data Structure',
    //     authorDOB: 22},
        
    // ];