import React from 'react';

import { gql, useQuery } from '@apollo/client';
import { Carousel } from '@components/common/carousel';
import { Container } from '@components/common/container';
import { Designs } from '@components/shelf/designs/designs';

const QUERY = gql`
  query Designs($select: PaginationInput!) {
    designs(select: $select) {
      body {
        id
        title
      }
    }
  }
`;

export default function Home(): JSX.Element {
  const select = { limit: 32, offset: 0 };
  const { loading, data } = useQuery(QUERY, { variables: { select } });

  return (
    <React.Fragment>
      <Container>
        <Carousel slides={[<p>Slide 1</p>, <p>Slide 2</p>, <p>Slide 3</p>]} />
        <Designs loading={loading} designs={data?.designs?.body} />
      </Container>
    </React.Fragment>
  );
}
