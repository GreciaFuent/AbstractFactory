import Quote from "./quote";

export default class HTMLQuote implements Quote{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Quote {
        const structure = `<q>${infoJSON}</q>`
        return new HTMLQuote(structure)
    }
}