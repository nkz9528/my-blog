import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import fs from "fs";

interface Article {
  title: string;
  path: string;
}
interface Props {
  articles: Article[];
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <main>
      <Head>
        <title>Nara in Tokyo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Nara in Tokyo</h1>
      <blockquote>
        <p>東京の奈良の備忘録</p>
      </blockquote>

      <h2>このブログについて</h2>
      <ul>
        <li>Next.jsの習作がてら作成</li>
        <li>Full AMP対応なので全ページ爆速!!</li>
        <li>.mdをpushするだけでデプロイ可能</li>
      </ul>
      <h2>記事リスト</h2>
      <ul>
        {articles.map((a) => (
          <li key={a.title}>
            <a href={a.path}>{a.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const articles = fs.readdirSync("pages/articles");

  return {
    props: {
      articles: articles.map((a) => ({
        title: a.split(".")[0],
        path: `articles/${a.split(".")[0]}`,
      })),
    },
  };
};

export const config = {
  amp: true,
};

export default Home;
