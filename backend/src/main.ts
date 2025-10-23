import Client from "./utils/client";
import HtmlFactory from "./utils/htmlFactory";
import MarkDownFactory from "./utils/markdownFactory";

const json = {
  data: {
    title1: "Bienvenido",
    title2: "Introducción",
    title3: "Detalles",
    paragraph: "Este es un párrafo de ejemplo.",
    quote: "La simplicidad es la máxima sofisticación.",
    image: "https://example.com/imagen.jpg"
  },
  convert: "markdown"
};

let factory: any;

switch (json.convert.toLowerCase()) {
  case "html":
    factory = new HtmlFactory();
    break;
  case "markdown":
    factory = new MarkDownFactory();
    break;
  default:
    throw new Error("Invalid format: " + json.convert);
}

const client = new Client(factory);
const result = client.sendJSON(json);

console.log(result);
