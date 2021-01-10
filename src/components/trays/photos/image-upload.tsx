import React from 'react';

import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { uploadImages } from '@lib/projects/actions';

const styles = css`
  align-items: center;
  background: #F2F2F2;
  border: 1px dashed #bbb;
  border-radius: .5rem;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
  
  &.dragging {
    border-color: var(--primary-accent-color);
  }
  
  p {
    margin: 1rem 0 0 0;
    padding: 0 1.5rem;
    
    &.small {
      font-size: 14px;
    }

    label {
      color: var(--primary-accent-color);
      cursor: pointer;
      text-decoration: underline;
    }
  }

  input {
    display: none;
  }
  
  i {
    color: var(--primary-accent-color);
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
    const files = Array.from(event.target.files);
    dispatch(uploadImages(files));
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (event.dataTransfer.items) {
      const files = Array
        .from(event.dataTransfer.items)
        .filter(item => item.kind === 'file')
        .map(item => item.getAsFile());

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
