import { AbstractFactory } from "./abstractFactory";
import HTMLHeading3 from "./htmlHeading3";
import HtmlHeading2 from "./htmlHeading2";
import HtmlHeading1 from "./htmlHeading1";
import HtmlImage from "./htmlImage";
import HTMLParagraph from "./htmlParagraph";
import HTMLQuote from "./htmlQuote";



export default class HtmlFactory implements AbstractFactory {

    createHeading3 (infoJson: string): HTMLHeading3 {
        return new HTMLHeading3(infoJson);
    }

    createHeading2(infoJson: string): HtmlHeading2 {
        return new HtmlHeading2(infoJson);
    }

    createHeading1(infoJson: string): HtmlHeading1 {
        return new HtmlHeading1(infoJson);
    }

    createImage(infoJson: string): HtmlImage {
        return new HtmlImage(infoJson);
    }

    createParagraph(infoJson: string): HTMLParagraph {
        return new HTMLParagraph(infoJson);
    }

    createQuote(infoJson: string): HTMLQuote {
        return new HTMLQuote(infoJson);
    }

}
