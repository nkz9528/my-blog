const fs = require("fs");

function convert() {
  const files = fs.readdirSync("docs");

  let articleMetaData = {};

  for (const f of files) {
    const { marked } = require("marked");

    let title = "";
    let headlines = [];
    const renderer = {
      heading(text, level, raw, slug) {
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
      image(href, title, text) {
        const w = text.split("x")[0];
        const h = text.split("x")[1];

        return `<img src=${href} alt="image" width="${w}" height="${h}">`;
      },
    };
    marked.use({ renderer });

    const data = fs.readFileSync(`docs/${f}`);
    const { birthtime, mtime } = fs.statSync(`docs/${f}`);

    const html = marked.parse(data.toString());
    const fileId = f.split(".")[0];
    const page = createTSX(html, title, headlines);
    fs.writeFileSync(`pages/articles/${fileId}.tsx`, page);

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

const createTSX = (body, title, headlines) => `
import Head from "next/head";
function Article() {
  return (
    <div style={{ display: "flex" }}>
      <main style={{ flexGrow: 0.8, flexBasis: 0.8 }}>
        <Head>
            <title>${title}</title>
        </Head>
        <div 
          dangerouslySetInnerHTML={{__html: \`${body}\`}}
        />
      </main>
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
