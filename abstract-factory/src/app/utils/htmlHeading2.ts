import { Heading2 } from "./heading2"

export default class HtmlHeading2 implements Heading2{
    public structure: string

    constructor(structure: string){
        this.structure = structure
    }

    translate(infoJSON: string): Heading2 {
        const structure = `<h2>${infoJSON}</h2>`
        return new HtmlHeading2(structure)
    }
}