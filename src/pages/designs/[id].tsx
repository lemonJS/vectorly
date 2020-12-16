import React from 'react';

import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { Container } from '@components/common/container';
import { Title } from '@components/shelf/design/title';
import { Details } from '@components/shelf/design/details';
import { Spinner } from '@components/common/spinner';

const QUERY = gql`
  query Design($where: DesignWhereInput!) {
    design(where: $where) {
      id
      title
      description
      image {
        height
        name
        url
        width
      }
    }
  }
`;

export default function Products(): JSX.Element {
  const router = useRouter();
  const where = { id: router.query.id };
  const { loading, data } = useQuery(QUERY, { variables: { where } });

  return (
    <React.Fragment>
      <Container>
        <Title />
        {loading
          ? <Spinner />
          : <Details design={data?.design} />
        }
      </Container>
    </React.Fragment>
  );
}
