import { AbstractFactory } from "./abstractFactory";
import MarkdownHeading3 from "./markdownHeading3";
import MarkDownHeading2 from "./markDownHeadin2";
import MarkDownHeading1 from "./markDownHeading1";
import MarkDownImage from "./markDownImage";
import MarkdownParagraph from "./markdownParagraph";
import MarkdownQuote from "./markdownQuote";



export default class MarkDownFactory implements AbstractFactory {

    createHeading3(infoJson: string): MarkdownHeading3 {
        return new MarkdownHeading3(infoJson);
    }

    createHeading2(infoJson: string): MarkDownHeading2 {
        return new MarkDownHeading2(infoJson);
    }

    createHeading1(infoJson: string): MarkDownHeading1 {
        return new MarkDownHeading1(infoJson);
    }

    createImage(infoJson: string): MarkDownImage {
        return new MarkDownImage(infoJson);
    }

    createParagraph(infoJson: string): MarkdownParagraph {
        return new MarkdownParagraph(infoJson);
    }

    createQuote(infoJson: string): MarkdownQuote {
        return new MarkdownQuote(infoJson);
    }
}
