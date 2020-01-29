interface AuthorInterface {
    authorName: string
    authorCountry: string
    authorLastBook: string
    birthDate: string
    rate: number
    bio: string
}
interface BookInterface {
    bookName: string
    bookAuthorName: string
    bookPrice: number
    bookISPno: number
    rate:number
    //birthDate: string
}
//interface authorInterface extends Array<authorInterface>{}
export var authors: AuthorInterface[] = [
    {authorName: 'Raju Sharma', authorCountry: 'India', authorLastBook: 'Data Structure', birthDate: '01-23-1990', rate: 5, bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam ut fugit blanditiis! Rem asperiores sit optio hic, nesciunt nihil consectetur dolorem soluta debitis harum distinctio ratione amet nam aperiam." },
    {authorName: 'Monika', authorCountry: 'Bangladesh', authorLastBook: 'Kahani', birthDate: '11-12-1996', rate: 4, bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam ut fugit blanditiis! Rem asperiores sit optio hic, nesciunt nihil consectetur dolorem soluta debitis harum distinctio ratione amet nam aperiam."},
    {authorName: 'Shiwani', authorCountry: 'India', authorLastBook: 'StepUp', birthDate: '10-19-2000', rate: 4, bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam ut fugit blanditiis! Rem asperiores sit optio hic, nesciunt nihil consectetur dolorem soluta debitis harum distinctio ratione amet nam aperiam." },
    {authorName: 'Niharika', authorCountry: 'India', authorLastBook: 'One', birthDate: '06-20-1991', rate: 5, bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam ut fugit blanditiis! Rem asperiores sit optio hic, nesciunt nihil consectetur dolorem soluta debitis harum distinctio ratione amet nam aperiam." },
    {authorName: 'Nancy Momoland', authorCountry: 'South Korea', authorLastBook: 'Domkeis', birthDate: '04-24-1997', rate: 0, bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam ut fugit blanditiis! Rem asperiores sit optio hic, nesciunt nihil consectetur dolorem soluta debitis harum distinctio ratione amet nam aperiam." } 
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