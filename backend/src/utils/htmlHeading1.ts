import { Heading1 } from "./heading1";

export default class HtmlHeading1 implements Heading1{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Heading1 {
        const structure = `<h1>${infoJSON}</h1>\n`
        return new HtmlHeading1(structure)
    }
}