
import Head from "next/head";
function Article() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 0.8, flexBasis: 0.8 }}>
        <Head>
            <title>About</title>
        </Head>
        <div 
          dangerouslySetInnerHTML={{__html: `<h1 id="about">About</h1>
<blockquote>
<p>何者にもなれない</p>
</blockquote>
<h2 id="about-2">About</h2>
<ul>
<li>Kazuma Nara, a.k.a nara_k</li>
<li>Software developer</li>
</ul>
<h2 id="skills-1">Skills</h2>
`}}
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
            <li><a href="#about-1">About</a></li><li><a href="#skills">Skills</a></li>
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
