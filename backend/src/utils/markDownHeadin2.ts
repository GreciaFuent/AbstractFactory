import { Heading1 } from "./heading1";

export default class MarkDownHeading2 implements Heading1{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Heading1 {
        const structure = `## ${infoJSON}\n`
        return new MarkDownHeading2(structure)
    }
}