import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <div
          style={{
            backgroundColor: "ActiveBorder",
            width: "100%",
            height: 48,
            background: "#161b22",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              paddingLeft: 16,
              fontFamily: "inherit",
              fontWeight: "bold",
            }}
          >
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
              {"Nara in Tokyo"} <span style={{ fontSize: 20 }}>🗼</span>
            </a>
          </span>
        </div>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
