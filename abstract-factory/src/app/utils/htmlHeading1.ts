import { Heading1 } from "./heading1";

export default class HtmlHeading1 implements Heading1{
    public structure: string

    constructor(structure: string){
        this.structure = structure
    }

    translate(infoJSON: string): Heading1 {
        const structure = `<h1>${infoJSON}</h1>`
        return new HtmlHeading1(structure)
    }
}