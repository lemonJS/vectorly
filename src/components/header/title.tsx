import React from 'react';

import { css } from '@emotion/css';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, updateProject } from '@store/project';

const styles = css`
  align-items: center;
  display: flex;
  margin: 0 1rem;
  
  .edit {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 128px;
  }
`;

export const Title = (): JSX.Element => {
  const dispatch = useDispatch();
  const project = useSelector(projectSelector);
  const title = project.title;

  const [edit, setEdit] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(updateProject({ title: value }));
  };

  const handleBlur = () => setEdit(false);

  const handleStartEdit = () => setEdit(true);

  return (
    <div className={styles}>
      {!edit && (
        <button className='edit' onClick={handleStartEdit}>{title}</button>
      )}

      {edit && (
        <input className='edit' autoFocus defaultValue={title} onChange={handleChange} onBlur={handleBlur} />
      )}
    </div>
  );
};
