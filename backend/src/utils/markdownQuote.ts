import { Quote } from "./quote";

export default class MarkdownQuote implements Quote{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Quote {
        const structure = `> ${infoJSON}\n`
        return new MarkdownQuote(structure)
    }
}