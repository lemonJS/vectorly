import React from 'react';

import { cloneDeep } from 'lodash';
import { Element } from '@type/project';
import { css } from '@emotion/css';
import { Button } from '@components/common/button';
import { Divider } from '@components/common/divider';
import { useContext } from '@components/builder/store';

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
  const { createProjectElement, removeProjectElement } = useContext();

  function handleDelete() {
    removeProjectElement(props.element);
  }

  function handleDuplicate() {
    const element = cloneDeep(props.element);
    element.transform.x += 20;
    element.transform.y += 20;
    createProjectElement(element);
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
