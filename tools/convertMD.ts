import fs from "fs";
import { Slugger } from "marked";

interface Headline {
  id: string;
  text: string;
}

function convert() {
  const files = fs.readdirSync("docs");

  let articleMetaData = {};

  for (const f of files) {
    const rawData = fs.readFileSync(`docs/${f}`);
    const { html, title, headlines } = parseMD(rawData);

    const { birthtime, mtime } = fs.statSync(`docs/${f}`);

    const fileId = f.split(".")[0];
    const pageComp = createTSX(html, title, headlines);
    fs.writeFileSync(`pages/articles/${fileId}.tsx`, pageComp);

    articleMetaData = {
      ...articleMetaData,
      [fileId]: {
        id: fileId,
        title,
        birthtime,
        mtime,
        headlines,
      },
    };
  }
  fs.writeFileSync("articles.json", JSON.stringify(articleMetaData));
}

function parseMD(rawData: Buffer) {
  const { marked } = require("marked");
  let title = "";
  let headlines: Headline[] = [];

  const renderer = {
    heading(text: string, level: number, raw: string, slug: Slugger) {
      if (headlines.length == 0 && level === 1) {
        title = text;
        return false;
      }
      headlines.push({
        id: slug.slug(text),
        text,
      });
      return false;
    },
    image(href: string, title: string, text: string) {
      const w = text.split("x")[0];
      const h = text.split("x")[1];

      return `<img src=${href} alt="image" width="${w}" height="${h}">`;
    },
  };
  marked.use({ renderer });
  const html = marked.parse(rawData.toString());

  return {
    html,
    title,
    headlines,
  };
}

const createTSX = (body: string, title: string, headlines: Headline[]) => `
import Head from "next/head";
function Article() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 0.8, flexBasis: 0.8 }}>
        <Head>
            <title>${title}</title>
        </Head>
        <div 
          dangerouslySetInnerHTML={{__html: \`${body}\`}}
        />
      </div>
      <div
        style={{
          flexGrow: 0.2,
          flexBasis: 0.2,
          padding: 16,
          position: "relative",
        }}
      >
        <div style={{ position: "fixed" }}>
          <h3>目次</h3>
          <ul style={{ marginLeft: "-1em" }}>
            ${headlines.reduce(
              (acc, h) => acc + `<li><a href="#${h.id}">${h.text}</a></li>`,
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export const config = {
  amp: true,
};
export default Article;
`;

convert();