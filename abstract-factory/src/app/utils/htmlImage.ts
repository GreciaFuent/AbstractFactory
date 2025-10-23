import { Image } from "./image";

export default class HtmlImage implements Image{
    public structure: string

    constructor(structure: string){
        this.structure = structure
    }

    translate(infoJSON: string): Image {
        const structure = `<img src="${infoJSON}">`
        return new HtmlImage(structure)
    }
}