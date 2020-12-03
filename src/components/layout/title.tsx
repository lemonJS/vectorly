import React from 'react';

import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';
import { Modal } from '../modal';
import { projectSelector } from '../../lib/project/selectors';
import { updateProject } from '../../lib/project/actions';

const styles = css`
  align-items: center;
  display: flex;
  
  button {
    background: none;
    border: none;
    color: var(--secondary-text-color);
  }
`;

export function Title(): JSX.Element {
  const dispatch = useDispatch();
  const ref = React.useRef(null);
  const { title } = useSelector(projectSelector);

  function handleModalOpen() {
    ref.current.open();
  }

  function handleModalClose() {
    ref.current.close();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    dispatch(updateProject({ title: data.get('title').toString() }));
    handleModalClose();
  }

  return (
    <div className={styles}>
      <Button onClick={handleModalOpen}>{title}</Button>

      <Modal ref={ref}>
        <form onSubmit={handleSubmit}>
          <Label htmlFor='project-title'>Project Title</Label>
          <Input defaultValue={title} id='project-title' name='title' />

          <div className='actions'>
            <Button>Save Changes</Button>
            <Button className='secondary' onClick={handleModalClose}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
