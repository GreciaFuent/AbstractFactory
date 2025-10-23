import { Image } from "./image";

export default class HtmlImage implements Image{
    public infoJson: string

    constructor(infoJson: string){
        this.infoJson = infoJson
    }

    translate(infoJSON: string): Image {
        const structure = `<img src="${infoJSON}">\n`
        return new HtmlImage(structure)
    }
}