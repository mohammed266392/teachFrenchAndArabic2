
export class Onglet {
    name : string
    nameNavigate :string

    constructor(name: string, nameNavigate: string) {
        this.name = name;
        this.nameNavigate = nameNavigate;
    }

    getName() : string {
        return this.name
    }
    getNameNavigate() : string {
        return this.nameNavigate
    }
}

export class Review {
    note : number
    username :string
    description:string
    datePublication:string

    constructor(note: number, username: string, description:string, datePublication:string ) {
        this.note = note;
        this.username = username;
        this.description = description;
        this.datePublication = datePublication;
    }
}