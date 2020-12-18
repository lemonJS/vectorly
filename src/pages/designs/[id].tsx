import React from 'react';

import { useRouter } from 'next/router';
import { Container } from '@components/common/container';
import { Title } from '@components/shelf/design/title';
import { Details } from '@components/shelf/design/details';
import { useDispatch, useSelector } from 'react-redux';
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
      <Container>
        <Title />
        {design && <Details design={design} />}
      </Container>
    </React.Fragment>
  );
}
