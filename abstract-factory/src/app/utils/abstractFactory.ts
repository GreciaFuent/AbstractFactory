import { Heading3 } from "./heading3";
import { Heading2 } from "./heading2";
import { Heading1 } from "./heading1";
import { Image } from "./image";
import { Paragraph } from "./paragraph";
import { Quote } from "./quote";



export interface AbstractFactory {

    createHeading3(infoJson: string): Heading3;
    createHeading2(infoJson: string): Heading2;
    createHeading1(infoJson: string): Heading1;
    createImage(infoJson: string): Image;
    createParagraph(infoJson: string): Paragraph;
    createQuote(infoJson: string): Quote;

}
