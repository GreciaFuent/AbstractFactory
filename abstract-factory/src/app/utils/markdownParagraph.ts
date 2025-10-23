import Paragraph from "./paragraph";

export default class MarkdownParagraph implements Paragraph{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Paragraph {
        const structure = `${infoJSON}`
        return new MarkdownParagraph(structure)
    }
}