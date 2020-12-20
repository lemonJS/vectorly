import React from 'react';

import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { api } from '@lib/api';
import { Button } from '@components/common/button';
import { Design } from '@type/design';
import { Size } from '@components/design/size';
import { Paper } from '@components/design/paper';
import { Trim } from '@components/design/trim';
import { Envelope } from '@components/design/envelope';
import { Quantity } from '@components/design/quantity';
import { userSelector } from '@lib/user/selectors';

interface Props {
  design?: Design;
}

const styles = css`
  background: var(--foreground-color);
  border-radius: .25rem;
  flex-shrink: 0;
  padding: 1.5rem;
  width: 360px;
  
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
  
  label {
    color: var(--primary-text-color);
    margin-top: 1.5rem;
    
    &:first-of-type {
      margin-top: 0;
    }
  }
  
  button {
    margin-top: 1.5rem;
    width: 100%;
  }
`;

export function Create(_props: Props): JSX.Element {
  const user = useSelector(userSelector);
  const [loading, setLoading] = React.useState(false);

  async function handleCreate() {
    setLoading(true);
    const response = await api.post('/projects');
    location.href = `/projects/${response.projectId}`;
  }

  return (
    <div className={styles}>
      <Size />
      <Paper />
      <Trim />
      <Envelope />
      <Quantity />

      <Button disabled={!user} loading={loading} onClick={handleCreate}>Create Project</Button>
    </div>
  );
}
