import React from 'react';

import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { uploadImages } from '@store/project';

const styles = css`
  align-items: center;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
  
  &.dragging {
    border-color: var(--primary);
  }
  
  p {
    margin: 1rem 0 0 0;
    padding: 0 1.5rem;
    
    &.small {
      font-size: 14px;
    }

    label {
      color: var(--primary);
      cursor: pointer;
      text-decoration: underline;
    }
  }

  input {
    display: none;
  }
  
  i {
    color: var(--primary);
    font-size: 2.5rem;
  }
`;

export const ImageUpload = (): JSX.Element => {
  const dispatch = useDispatch();

  const [dragging, setDragging] = React.useState(false);
  const status = dragging ? 'dragging' : '';

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      dispatch(uploadImages(Array.from(files)));
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (event.dataTransfer.items) {
      const files: File[] = [];
      const items = Array.from(event.dataTransfer.items);

      items.forEach(item => {
        const file = item.getAsFile();
        if (file) files.push(file);
      });

      dispatch(uploadImages(files));
    }

    setDragging(false);
  };

  return (
    <div className={`${styles} ${status}`} onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
      <i className='ri-upload-cloud-line' />

      {dragging && (
        <p>Drop!</p>
      )}

      {!dragging && (
        <React.Fragment>
          <p>Drag and drop images here</p>
          <p className='small'>
            <span>or </span>
            <input type='file' id='image-upload' accept='image/png, image/jpeg' multiple onChange={handleChange} />
            <label className='button' htmlFor='image-upload'>browse computer</label>
          </p>
        </React.Fragment>
      )}
    </div>
  );
};
