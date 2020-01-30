interface book1{
    id : number
    name: string
    author: string
    isbn: string
    star : number
}

interface author1{
    id: number
    name: string
    lastBook : string
    DateofBirth : string,
    Bio : string,
    country : string
}

export var book : book1[] =[{id: 1,name: 'We Were Eight Years in Power: An American Tragedyi',author: 'Ta-Nehisi Coates',isbn: '978-0-399-59056',star :3},
                    {id: 2,name: 'Fly Me',author: 'Daniel Riley',isbn: '978-0-316-36213-9',star : 4},
                    {id: 3,name: 'Before We Were Yours',author: 'Lisa Wingate',isbn: '978-0-425-28468-1',star :5},
                    {id: 4,name: 'Before We Were Yours',author: 'Lisa Wingate',isbn: '978-0-425-28468-1',star : 1},
                    {id: 5,name: 'Before We Were Yours',author: 'Lisa Wingate',isbn: '978-0-425-28468-1',star :2}]


export var author : author1[] =[{id: 1,name: 'Ta-Nehisi Coates',lastBook : 'We Were Eight Years in Power: An American Tragedy',DateofBirth : '05-01-1998',Bio : 'lorem fvnkfvnkfvnfk divikcjrtvkrj ktrbyhtkjvrkn tvtkyjbykj btrjyrtjbyj',country : 'America' },
                         {id: 2,name: 'Daniel Riley',lastBook : 'Fly Me' ,DateofBirth : '05-01-1998',Bio : 'lorem fvnkfvnkfvnfk divikcjrtvkrj ktrbyhtkjvrkn tvtkyjbykj btrjyrtjbyj',country : 'America' },
                         {id: 3,name: 'Lisa Wingate',lastBook : 'Before We Were Yours' ,DateofBirth : '05-01-1998',Bio : 'lorem fvnkfvnkfvnfk divikcjrtvkrj ktrbyhtkjvrkn tvtkyjbykj btrjyrtjbyj',country : 'America' },
                         {id: 4,name: 'Lisa Wingate',lastBook : 'Before We Were Yours' ,DateofBirth : '05-01-1998',Bio : 'lorem fvnkfvnkfvnfk divikcjrtvkrj ktrbyhtkjvrkn tvtkyjbykj btrjyrtjbyj',country : 'America' },
                         {id: 5,name: 'Lisa Wingate',lastBook : 'Before We Were Yours' ,DateofBirth : '05-01-1998',Bio : 'lorem fvnkfvnkfvnfk divikcjrtvkrj ktrbyhtkjvrkn tvtkyjbykj btrjyrtjbyj',country : 'America' }];