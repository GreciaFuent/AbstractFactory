import { Heading1 } from "./heading1";

export default class MarkDownHeading1 implements Heading1{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Heading1 {
        const structure = `# ${infoJSON}\n`
        return new MarkDownHeading1(structure)
    }
}