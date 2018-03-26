import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
        <title>Flashlight</title>
          {/* <link rel="stylesheet" type="text/css" href="/static/style.css" /> */}
          <link rel="stylesheet" type="text/css" href="/static/bootstrap.min.css"/>
          {/* <script src="static/EQCSS-polyfills.min.js" />
          <script src="static/EQCSS.min.js" />
          <script src="static/script.js" /> */}
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}