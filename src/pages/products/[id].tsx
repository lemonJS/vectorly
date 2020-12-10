import React from 'react';

import { NextPageContext } from 'next';
import { Container } from '@components/common/container';
import { Title } from '@components/shelf/product/title';
import { Create } from '@components/shelf/product/create';

interface Props {

}

export default function Products(_props: Props): JSX.Element {
  return (
    <React.Fragment>
      <Container>
        <Title />
        <Create />
      </Container>
    </React.Fragment>
  );
}

Products.getInitialProps = async (_ctx: NextPageContext) => {
  return {};
};
