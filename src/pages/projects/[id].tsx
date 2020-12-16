import React from 'react';

import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { SVG } from '@components/builder/svg/svg';
import { ContextProvider } from '@components/builder/store';
import { Wrapper } from '@components/builder/layout/wrapper';
import { useRouter } from 'next/router';

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
  }
`;

export default function Project(): JSX.Element {
  const router = useRouter();
  const where = { id: router.query.id };
  const { loading, data } = useQuery(QUERY, { variables: { where } });

  console.log(loading, data);

  return (
    <ContextProvider>
      <Wrapper>
        <Head>
          <title>Vectorly</title>
        </Head>
        <SVG />
      </Wrapper>
    </ContextProvider>
  );
}

