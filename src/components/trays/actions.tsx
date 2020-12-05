import React from 'react';

import type { Element } from '../../types/project';
import { cloneDeep } from 'lodash';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { Button } from '../button';
import { Divider } from '../divider';
import { createProjectElement, deleteProjectElement } from '../../lib/project/actions';

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

export function Actions(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteProjectElement(props.element.id));
  }

  function handleDuplicate() {
    const element = cloneDeep(props.element);
    element.transform.x += 20;
    element.transform.y += 20;
    dispatch(createProjectElement(element));
  }

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
}
