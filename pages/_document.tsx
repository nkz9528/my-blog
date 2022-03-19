import Document, { Html, Head, Main, NextScript } from "next/document";
// @ts-ignore
import css from "!!raw-loader!../styles/globals.css";
// @ts-ignore
import home from "!!raw-loader!../styles/Home.css";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps: any = await Document.getInitialProps(ctx);
    const styles = [
      ...initialProps.styles,
      <style
        key="css"
        dangerouslySetInnerHTML={{
          __html: `${css}\n${home}`,
        }}
      />,
    ];
    return {
      ...initialProps,
      styles,
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
