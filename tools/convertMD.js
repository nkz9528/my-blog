const marked = require("marked");
const fs = require("fs");

function convert() {
  const files = fs.readdirSync("docs");

  files.forEach((f) => {
    const data = fs.readFileSync(`docs/${f}`);
    const html = marked.marked.parse(data.toString());
    const fileName = f.split(".")[0];
    const page = createTSX(html.replace("<br>", "<br />"), fileName);
    fs.writeFileSync(`pages/articles/${fileName}.tsx`, page);
  });
}

const createTSX = (body, title) => `
import Head from "next/head";
function Article() {
  return (
    <main>
    <Head>
        <title>${title}</title>
    </Head>
    ${body}
    </main>
  );
}
export const config = {
  amp: true,
};
export default Article;
`;

convert();
