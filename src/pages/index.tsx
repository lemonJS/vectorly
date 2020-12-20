import React from 'react';

import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@components/common/container';
import { Designs } from '@components/designs/designs';
import { Featured } from '@components/designs/featured';
import { designsSelector } from '@lib/designs/selectors';
import { getDesigns } from '@lib/designs/actions';
import { getUser } from '@lib/user/actions';
import { Paginate } from '@components/designs/paginate';

const RESULTS_PER_PAGE = 16;

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const designs = useSelector(designsSelector);

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getDesigns());
  }, []);

  function handleClick() {
    const nextPage = page + 1;
    dispatch(getDesigns(nextPage * RESULTS_PER_PAGE));
    setPage(nextPage);
  }

  return (
    <React.Fragment>
      <Head>
        <title>Vectorly</title>
      </Head>
      <Container>
        <Featured />
        <Designs designs={designs} />
        <Paginate count={designs.length} handleClick={handleClick} hasNext={true} />
      </Container>
    </React.Fragment>
  );
}
