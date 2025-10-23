import { Heading2 } from "./heading2"

export default class HtmlHeading2 implements Heading2{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Heading2 {
        const structure = `<h2>${infoJSON}</h2>\n`
        return new HtmlHeading2(structure)
    }
}