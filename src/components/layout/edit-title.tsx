import React from 'react';

import { css } from '@emotion/css';
import { Label } from '../label';
import { Input } from '../input';
import { Button } from '../button';

const styles = css`
  input {
    margin: 1.5rem 0;
  }
`;

interface Props {
  title: string;
  handleCancel: VoidFunction;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function EditTitle(props: Props): JSX.Element {
  return (
    <form className={styles} onSubmit={props.handleSubmit}>
      <Label htmlFor='project-title'>Project Title</Label>
      <Input defaultValue={props.title} id='project-title' name='title' />

      <div className='actions'>
        <Button>Save Changes</Button>
        <Button className='secondary' onClick={props.handleCancel}>Cancel</Button>
      </div>
    </form>
  );
}
