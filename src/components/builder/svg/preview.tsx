import React from 'react';

import { css } from '@emotion/css';
import { Project } from '@type/project';
import { Element } from '@components/builder/svg/element';

interface Props {
  project: Project;
}

const styles = css`
  background: var(--foreground-color);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  width: 100%;
  
  svg {
    height: 100%;
    user-select: none;
    width: 100%;
  }
`;

export function Preview(props: Props): JSX.Element {
  return (
    <div className={styles}>
      <svg id='canvas' viewBox='0 0 500 800'>
        {props.project.elements.map(element => (
          <Element key={element.elementId} element={element} />
        ))}
      </svg>
    </div>
  )
}
