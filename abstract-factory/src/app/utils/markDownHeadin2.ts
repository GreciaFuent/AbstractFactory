import { Heading1 } from "./heading1";

export default class MarkDownHeading2 implements Heading1{
    public structure: string

    constructor(structure: string){
        this.structure = structure
    }

    translate(infoJSON: string): Heading1 {
        const structure = `## ${infoJSON}`
        return new MarkDownHeading2(structure)
    }
}