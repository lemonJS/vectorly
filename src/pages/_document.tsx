import React from 'react';

import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <link href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' rel="stylesheet" />
          <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id='modal-container' />
        </body>
      </Html>
    )
  }
}
