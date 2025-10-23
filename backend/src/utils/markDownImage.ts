import { Image } from "./image";

export default class MarkDownImage implements Image{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Image {
        const structure = `![Imagen](${infoJSON})\n`
        return new MarkDownImage(structure)
    }
}