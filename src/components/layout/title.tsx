import React from 'react';

import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button';
import { Modal } from '../modal';
import { EditTitle } from './edit-title';
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
      <Button onClick={handleModalOpen}>
        {title}
        <i className='ri-pencil-line' />
      </Button>

      <Modal ref={ref}>
        <EditTitle
          title={title}
          handleCancel={handleModalClose}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
}
