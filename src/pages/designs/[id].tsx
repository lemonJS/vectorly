import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@components/common/container';
import { Title } from '@components/design/title';
import { Details } from '@components/design/details';
import { designSelector } from '@lib/designs/selectors';
import { getUser } from '@lib/user/actions';
import { getDesigns } from '@lib/designs/actions';

export default function Products(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  const design = useSelector(designSelector(router.query.id));

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getDesigns());
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Vectorly - {design?.title || 'Design'}</title>
      </Head>
      <Container>
        <Title />
        <Details design={design} />
      </Container>
    </React.Fragment>
  );
}
