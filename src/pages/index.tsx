import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@components/common/container';
import { Designs } from '@components/shelf/designs/designs';
import { Featured } from '@components/shelf/designs/featured';
import { designsSelector } from '@lib/designs/selectors';
import { getDesigns } from '@lib/designs/actions';
import { getUser } from '@lib/user/actions';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const designs = useSelector(designsSelector);

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getDesigns());
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Featured />
        <Designs designs={designs} />
      </Container>
    </React.Fragment>
  );
}
