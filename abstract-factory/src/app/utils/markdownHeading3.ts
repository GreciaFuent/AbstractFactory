import { Heading3 } from "./heading3"

export default class MarkdownHeading3 implements Heading3{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Heading3 {
        const structure = `### ${infoJSON}`
        return new MarkdownHeading3(structure)
    }
}