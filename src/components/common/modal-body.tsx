import React from 'react';

import { css } from '@emotion/css';

interface Props {
  children: React.ReactNode;
  handleClose: VoidFunction;
  hasCloseButton?: boolean;
}

const styles = css`
  align-items: center;
  background: rgba(0, 0, 0, .5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  
  .modal-body {
    background: var(--foreground-color);
    border-radius: .25rem;
    max-width: 600px;
    padding: 1.5rem;
    position: relative;
    width: 100%;
  }
  
  .close-button {
    background: none;
    border: none;
    color: var(--primary-text-color);
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1.5rem 1.5rem 0 0;
    position: absolute;
    right: 0;
    top: 0;
    
    &:hover {
      color: var(--primary-accent-color);
    }
  }
  
  .actions {
    display: flex;
    margin-top: 1rem;
    
    button {
      margin-right: .5rem;
    }
  }
`;

export function ModalBody(props: Props): JSX.Element {
  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const element = event.target as Element;

    if (element.classList.contains('modal')) {
      props.handleClose();
    }
  }

  return (
    <div className={`${styles} modal`} onClick={handleClick}>
      <div className='modal-body'>
        {props.hasCloseButton && (
          <button className='close-button' onClick={props.handleClose}>
            <i className='ri-close-line' />
          </button>
        )}

        {props.children}
      </div>
    </div>
  );
}
