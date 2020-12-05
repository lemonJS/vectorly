import React from 'react';

import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { uploadImages } from '../../../lib/project/actions';

const styles = css`
  align-items: center;
  border: 2px dashed var(--secondary-button-border-color);
  border-radius: .25rem;
  color: var(--secondary-button-text-color);
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 1.5rem;
  text-align: center;
  
  &.dragging {
    border-color: var(--primary-accent-color);
  }
  
  i {
    font-size: 2.5rem;
  }
  
  p {
    font-size: 14px;
  }
`;

export function ImageDnd(): JSX.Element {
  const dispatch = useDispatch();
  const [dragging, setDragging] = React.useState(false);
  const status = dragging ? 'dragging' : '';

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(true);
  }

  function handleDragLeave() {
    setDragging(false);
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    if (event.dataTransfer.items) {
      const files = Array
        .from(event.dataTransfer.items)
        .filter(item => item.kind === 'file')
        .map(item => item.getAsFile());

      dispatch(uploadImages(files));
    }

    setDragging(false);
  }

  return (
    <div className={`${styles} ${status}`} onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
      <i className='ri-image-add-line' />
      {dragging
        ? <p>Drop!</p>
        : <p>Drag and drop photos here to upload</p>
      }
    </div>
  );
}
