import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/common/button';

interface Props {
  count: number;
  hasNext: boolean;
  handleClick: VoidFunction;
}

const styles = css`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  
  button {
    width: 100px;
  }
`;

export function Paginate(props: Props): JSX.Element {
  const [loading, setLoading] = React.useState(false);

  function handleClick() {
    setLoading(true);
    props.handleClick();
  }

  React.useEffect(() => {
    setLoading(false);
  }, [props.count]);

  return (
    <div className={styles}>
      <Button loading={loading} onClick={handleClick}>Load more</Button>
    </div>
  );
}
