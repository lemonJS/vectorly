import React from 'react';

import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { SVG } from '@components/builder/svg/svg';
import { Wrapper } from '@components/builder/layout/wrapper';
import { useRouter } from 'next/router';
import { useContext } from '@components/builder/store';

const QUERY = gql`
  query Project($where: ProjectWhereInput!) {
    project(where: $where) {
      id,
      title
      images {
        id
        height
        name
        url
        width
      }
      elements {
        id
        type
        element
        transform {
          x
          y
          r
          s
        }
        props
        text
      }
    }
    user {
      id
      firstName
      lastName
    }
  }
`;

export default function Project(): JSX.Element {
  const router = useRouter();
  const where = { id: router.query.id };

  const { setState } = useContext();
  const { data } = useQuery(QUERY, { variables: { where } });

  console.log(data);

  React.useEffect(() => {
    if (data) setState(data);
  }, [data]);

  return (
    <Wrapper>
      <Head>
        <title>Vectorly</title>
      </Head>
      <SVG />
    </Wrapper>
  );
}

