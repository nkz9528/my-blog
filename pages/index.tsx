import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import fs from "fs";
import dayjs from "dayjs";

interface Article {
  id: string;
  title: string;
  path: string;
  birthtime: string;
}
interface Props {
  articles: Article[];
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
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
            <div style={{ fontSize: 12 }}>{a.birthtime}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const rawData = fs.readFileSync("articles.json");
  const data = JSON.parse(rawData.toString());
  const rawArticles = Object.values(data) as Article[];

  return {
    props: {
      articles: rawArticles
        .sort(
          (a1: Article, a2: Article) =>
            new Date(a2.birthtime).getTime() - new Date(a1.birthtime).getTime()
        )
        .map((s: Article) => ({
          ...s,
          path: "articles/" + s.id,
          birthtime: dayjs(s.birthtime).format("YYYY/MM/DD ddd"),
        })),
    },
  };
};

export const config = {
  amp: true,
};

export default Home;
