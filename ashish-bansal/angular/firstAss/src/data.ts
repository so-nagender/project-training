interface book1{
    id : number
    name: string
    author: string
    isbn: number
}

interface author1{
    id: number
    name: string
    lastBook : string
}

var book : book1[] =[{id: 1,name: 'We Were Eight Years in Power: An American Tragedyi',author: 'Ta-Nehisi Coates',isbn: 978-0-399-59056-6},
                    {id: 2,name: 'Fly Me',author: 'Daniel Riley',isbn: 978-0-316-36213-9},
                    {id: 3,name: 'Before We Were Yours',author: 'Lisa Wingate',isbn: 978-0-425-28468-1},
                    {id: 4,name: 'Before We Were Yours',author: 'Lisa Wingate',isbn: 978-0-425-28468-1},
                    {id: 5,name: 'Before We Were Yours',author: 'Lisa Wingate',isbn: 978-0-425-28468-1}]


var author : author1[] =[{id: 1,name: 'Ta-Nehisi Coates',lastBook : 'We Were Eight Years in Power: An American Tragedy'},
                         {id: 2,name: 'Daniel Riley',lastBook : 'Fly Me' },
                         {id: 3,name: 'Lisa Wingate',lastBook : 'Before We Were Yours' },
                         {id: 4,name: 'Lisa Wingate',lastBook : 'Before We Were Yours' },
                         {id: 5,name: 'Lisa Wingate',lastBook : 'Before We Were Yours' }]