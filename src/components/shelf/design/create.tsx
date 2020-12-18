import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/common/button';

const styles = css`
  margin-top: 1.5rem;
`;

export function Create(): JSX.Element {

  async function handleCreate() {
    // const response = await createProject();
    // location.href = `/projects/${response.data.createProject.id}`;
    // TODO
  }

  return (
    <Button onClick={handleCreate} className={styles}>Create Project</Button>
  );
}
