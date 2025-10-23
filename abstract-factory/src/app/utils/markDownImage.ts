import { Image } from "./image";

export default class MarkDownImage implements Image{
    public structure: string

    constructor(structure: string){
        this.structure = structure
    }

    translate(infoJSON: string): Image {
        const structure = `![Imagen](${infoJSON})`
        return new MarkDownImage(structure)
    }
}