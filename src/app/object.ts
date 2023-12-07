
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