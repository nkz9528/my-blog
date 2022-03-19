
import Head from "next/head";
function Article() {
  return (
    <main>
    <Head>
        <title>about</title>
    </Head>
    <h1 id="about">About</h1>
<blockquote>
<p>何者にもなれない</p>
</blockquote>
<h2 id="about-1">About</h2>
<ul>
<li>Kazuma Nara, a.k.a nara_k</li>
<li>Software developer</li>
</ul>
<h2 id="skills">Skills</h2>

    </main>
  );
}
export const config = {
  amp: true,
};
export default Article;
