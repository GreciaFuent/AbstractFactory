import { Paragraph } from "./paragraph";

export default class HTMLParagraph implements Paragraph{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Paragraph {
        const structure = `<p>${infoJSON}</p>`
        return new HTMLParagraph(structure)
    }
}