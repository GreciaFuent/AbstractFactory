import { Heading3 } from "./heading3"

export default class HTMLHeading3 implements Heading3{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Heading3 {
        const structure = `<h3>${infoJSON}</h3>\n`
        return new HTMLHeading3(structure)
    }
}