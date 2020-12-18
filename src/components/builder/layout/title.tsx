import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/common/button';
import { Modal } from '@components/common/modal';
import { EditTitle } from '@components/builder/layout/edit-title';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector } from '@lib/projects/selectors';
import { updateProject } from '@lib/projects/actions';

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
  const project = useSelector(projectSelector());

  function handleModalOpen() {
    ref.current.open();
  }

  function handleModalClose() {
    ref.current.close();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const form = new FormData(element);
    dispatch(updateProject({ title: form.get('title').toString() }))
    handleModalClose();
  }

  return (
    <div className={styles}>
      {project && (
        <React.Fragment>
          <Button onClick={handleModalOpen}>
            {project.title}
            <i className='ri-pencil-line' />
          </Button>

          <Modal ref={ref}>
            <EditTitle
              title={project.title}
              handleCancel={handleModalClose}
              handleSubmit={handleSubmit}
            />
          </Modal>
        </React.Fragment>
      )}
    </div>
  );
}
