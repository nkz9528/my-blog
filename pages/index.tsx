import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import fs from "fs";

interface Article {
  title: string;
  path: string;
  birthtime: Date;
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
            <a href={a.path} style={{ fontSize: 20 }}>
              {a.title}
            </a>
            <div style={{ fontSize: 12 }}>
              {" created at "}
              {a.birthtime}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const rawData = fs.readFileSync("articles.json");
  const data = JSON.parse(rawData.toString());
  return {
    props: {
      articles: Object.values(data).map((d: any) => ({
        ...d,
        path: "articles/" + d.fileId,
      })),
    },
  };
};

export const config = {
  amp: true,
};

export default Home;
