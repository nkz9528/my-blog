
import Head from "next/head";
function Article() {
  return (
    <div style={{ display: "flex" }}>
      <main style={{ flexGrow: 0.8, flexBasis: 0.8 }}>
        <Head>
            <title>Rust 学習ロードマップ</title>
        </Head>
        <h1 id="rust-学習ロードマップ-1">Rust 学習ロードマップ</h1>
<h2 id="rust-やるぜ-2">Rust やるぜ</h2>
<ul>
<li>やるぜ</li>
<li>やるぜ</li>
</ul>
<h3 id="やるんだぜ-2">やるんだぜ</h3>
<h3 id="やるんだぜ-5">やるんだぜ</h3>

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
            <li><a href="#rust-やるぜ">Rust やるぜ</a></li><li><a href="#やるんだぜ">やるんだぜ</a></li><li><a href="#やるんだぜ-3">やるんだぜ</a></li>
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
