import React from 'react';

import { css } from '@emotion/css';
import { Label } from '@components/common/label';
import { Input } from '@components/common/input';
import { Button } from '@components/common/button';

const styles = css`
  label {
    color: var(--primary-font-color);
  }
  
  input {
    color: var(--primary-font-color);
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
