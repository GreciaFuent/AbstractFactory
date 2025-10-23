import type { AbstractFactory } from "./abstractFactory";

export default class Client {
    private readonly factory: AbstractFactory;

    constructor(factory: AbstractFactory) {
        this.factory = factory;
    }

    public sendJSON(jsonData: any): string {
        const data = jsonData.data;
        let output = "";

        if (data.title1) {
        const heading1 = this.factory.createHeading1(data.title1);
        const translated = heading1.translate(data.title1);
        output += (translated as any).infoJson || "";
        }

        if (data.title2) {
        const heading2 = this.factory.createHeading2(data.title2);
        const translated = heading2.translate(data.title2);
        output += (translated as any).infoJson || "";
        }

        if (data.title3) {
        const heading3 = this.factory.createHeading3(data.title3);
        const translated = heading3.translate(data.title3);
        output += (translated as any).infoJson || "";
        }

        if (data.paragraph) {
        const paragraph = this.factory.createParagraph(data.paragraph);
        const translated = paragraph.translate(data.paragraph);
        output += (translated as any).infoJson || "";
        }

        if (data.quote) {
        const quote = this.factory.createQuote(data.quote);
        const translated = quote.translate(data.quote);
        output += (translated as any).infoJson || "";
        }

        if (data.image) {
        const image = this.factory.createImage(data.image);
        const translated = image.translate(data.image);
        output += (translated as any).infoJson || "";
        }

        return output;
    }
}
