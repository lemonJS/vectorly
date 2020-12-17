import React from 'react';

import { css } from '@emotion/css';
import { Button } from '@components/common/button';
import { Modal } from '@components/common/modal';
import { EditTitle } from '@components/builder/layout/edit-title';
import { useContext } from '@components/builder/store';

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
  const ref = React.useRef(null);
  const { state, setState } = useContext();

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
    const data = { title: form.get('title').toString() };
    setState({ project: {...state.project, ...data } });
    handleModalClose();
  }

  return (
    <div className={styles}>
      {state.project && (
        <React.Fragment>
          <Button onClick={handleModalOpen}>
            {state.project.title}
            <i className='ri-pencil-line' />
          </Button>

          <Modal ref={ref}>
            <EditTitle
              title={state.project.title}
              handleCancel={handleModalClose}
              handleSubmit={handleSubmit}
            />
          </Modal>
        </React.Fragment>
      )}
    </div>
  );
}
