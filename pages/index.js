import React from 'react'
import Custom from '../components/custom/index'

export default class Index extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Flashlight</title>
          <script src="static/EQCSS-polyfills.min.js" />
          <script src="static/EQCSS.min.js" />
          <script src="static/script.js" />
          <link rel="stylesheet" type="text/css" href="static/style.css" />
        </head>
        <body>
          <Custom />
        </body>
      </html>
    )
  }
}
