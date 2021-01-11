import React from 'react';

import { cloneDeep } from 'lodash';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Element } from '@type/project';
import { css } from '@emotion/css';
import { Button } from '@components/button';
import { Divider } from '@components/divider';
import { createElement, deleteElement } from '@lib/projects/actions';

interface Props {
  element: Element;
}

const styles = css`
  hr {
    margin: 2rem 0;
  }
  
  button {
    margin-bottom: 1rem;
    width: 100%;
    
    i {
      margin: 0 .25rem 0 0;
    }
  }
`;

export const Actions = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteElement(props.element.id));

  const handleDuplicate = () => {
    const element = cloneDeep(props.element);
    element.id = uuid();
    element.transform.x += 20;
    element.transform.y += 20;
    dispatch(createElement(element));
  };

  return (
    <div className={styles}>
      <Divider />

      <Button className='secondary' onClick={handleDuplicate}>
        <i className='ri-file-copy-line' />
        Duplicate
      </Button>

      <Button className='tertiary' onClick={handleDelete}>
        <i className='ri-delete-bin-2-line' />
        Delete
      </Button>
    </div>
  );
};
