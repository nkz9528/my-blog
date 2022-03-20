
import Head from "next/head";
function Article() {
  return (
    <div style={{ display: "flex" }}>
      <main style={{ flexGrow: 0.8, flexBasis: 0.8 }}>
        <Head>
            <title>漫画史に残る名画</title>
        </Head>
        <div 
          dangerouslySetInnerHTML={{__html: `<h1 id="漫画史に残る名画-1">漫画史に残る名画</h1>
<h2 id="美しい-2">美しい...</h2>
<p><img src=https://animanch.com/wp/wp-content/uploads/thumbnail/20375625.jpg alt="image" width="200" height="undefined"></p>
`}}
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
            <li><a href="#美しい">美しい...</a></li>
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
