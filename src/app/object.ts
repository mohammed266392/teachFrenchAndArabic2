
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
    note : string
    username :string
    description:string
    datePublication:string
    too_left:boolean=false
    left:boolean=false
    main:boolean=false
    right:boolean=false
    too_right:boolean=false

    constructor(note: string, username: string, description:string, datePublication:string ) {
        this.note = note;
        this.username = note;
        this.description = note;
        this.datePublication = note;
    }

    getTooLeft():boolean{
        return this.too_left
    }
    getLeft():boolean{
        return this.left
    }
    getMain():boolean{
        return this.main
    }
    getRight():boolean{
        return this.right
    }
    getTooRight() : boolean{
        return this.too_right
    }
    setTooLeft(value : boolean){
        this.too_left = value
    }
    setLeft(value : boolean){
        this.left = value
    }
    setMain(value : boolean){
        this.main = value
    }
    setRight(value : boolean){
        this.right = value
    }
    setTooRight(value : boolean){
        this.too_right = value
    }
}