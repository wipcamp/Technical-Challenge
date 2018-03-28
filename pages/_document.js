import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  
  render () {
    return (
      <html>
        <Head>
          <title>Flashlight</title>
          <link rel="stylesheet" type="text/css" href="/static/bootstrap.min.css"/>
          {this.props.styleTags}
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