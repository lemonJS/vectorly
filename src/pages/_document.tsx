import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  public render(): JSX.Element {
    return (
      <Html>
        <Head>
        <script dangerouslySetInnerHTML={{ __html: `
            (function(s,q,e,a,u,k,y){
              s._sqSettings={site_id:'c3d8cd48-73cd-482f-96c9-3d78bc31cd60'};
              u=q.getElementsByTagName('head')[0];
              k=q.createElement('script');
              k.src=e+s._sqSettings.site_id;
              u.appendChild(k);
            })(window,document,'https://cdn.squeaky.ai/g/0.4.0/script.js?');
        `}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
