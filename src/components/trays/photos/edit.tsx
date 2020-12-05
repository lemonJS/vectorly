import React from 'react';

import type { Element } from '../../../types/project';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { Close } from '../close';
import { Actions } from '../actions';
import { Positioning } from '../positioning';
import { updateProjectElement } from '../../../lib/project/actions';

interface Props {
  element: Element;
}

const styles = css`
  > div:nth-of-type(2) {
    hr {
      display: none; // TODO
    }
  }
`;

export function Edit(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function handleUpdate(update: Partial<Element>) {
    dispatch(updateProjectElement(props.element.id, update));
  }

  return (
    <div className={styles}>
      <Close title='Edit Photo' />
      <Positioning element={props.element} handleUpdate={handleUpdate} />
      <Actions element={props.element} />
    </div>
  );
}
