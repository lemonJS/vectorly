import React from 'react';

import { css } from '@emotion/css';
import { useContext } from '@components/builder/store';

const styles = css`
  display: flex;
  width: 100%;
  
  input {
    display: none;
  }
  
  label {
    background: var(--secondary-button-background-color);
    border: 2px solid var(--secondary-button-border-color);
    border-radius: .25rem;
    color: var(--secondary-button-text-color);
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    height: 42px;
    line-height: 20px;
    padding: .5rem;
    text-align: center;
    width: 100%;
    
    i {
      font-size: 1rem;
      margin-left: .5rem;
      vertical-align: sub;
    }
  }
`;

export function ImageUpload(): JSX.Element {
  const { createImages } = useContext();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files);
    createImages(files);
  }

  return (
    <div className={styles}>
      <input type='file' id='image-upload' accept='image/png, image/jpeg' multiple onChange={handleChange} />
      <label className='button' htmlFor='image-upload'>
        Add Photos
        <i className='ri-add-line' />
      </label>
    </div>
  );
}
