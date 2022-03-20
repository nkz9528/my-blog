
import Head from "next/head";
function Article() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 0.8, flexBasis: 0.8 }}>
        <Head>
            <title>歩くのススメ</title>
        </Head>
        <div 
          dangerouslySetInnerHTML={{__html: `<h1 id="歩くのススメ-3">歩くのススメ</h1>
<h2 id="歩くのは楽しい-4">歩くのは楽しい</h2>
<p>飽きっぽい私にとって、数少ない長年の趣味に「歩くこと」がある。<br>敢えて「散歩」や「ウォーキング」としていないのは、</p>
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
            <li><a href="#歩くのは楽しい">歩くのは楽しい</a></li>
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
