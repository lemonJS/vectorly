import React from 'react';

import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { Element } from '@type/project';
import { createProjectElement } from '@lib/projects/actions';

interface Props {
  children: React.ReactNode;
  textType: string;
}

const styles = css`
  align-items: center;
  background: var(--sidebar-navigation-background-color);
  border: 2px solid var(--sidebar-navigation-background-color);
  border-radius: .25rem;
  color: white;
  cursor: pointer;
  display: flex;
  height: 100px;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  &:hover {
    border-color: var(--primary-accent-color);
  }
  
  &.heading {
    font-size: 2.5rem;
  }
  
  &.sub-heading {
    font-size: 1.5rem;
  }
  
  &.regular {
    font-size: 1rem;
  }
  
  &.small {
    font-size: 14px;
  }
`;

export function TextType(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function getFontSize() {
    switch (props.textType) {
      case 'heading':
        return 32;
      case 'sub-heading':
        return 24;
      case 'regular':
        return 16;
      default:
        return 14;
    }
  }

  function formatTextForCreation(): Omit<Element, 'elementId'> {
    return {
      element: 'text',
      type: 'text',
      transform: {
        x: 50,
        y: 50,
        r: 0,
        s: [1, 1]
      },
      props: {
        fill: '#283037',
        fontSize: getFontSize(),
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 1,
        textDecoration: 'none'
      },
      text: 'Enter your text'
    };
  }

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    const text = formatTextForCreation();
    event.dataTransfer.setData('element', JSON.stringify(text));
  }

  function handleClick() {
    const text = formatTextForCreation();
    dispatch(createProjectElement(text));
  }

  return (
    <div className={`${styles} ${props.textType}`} draggable onClick={handleClick} onDragStart={handleDragStart}>
      {props.children}
    </div>
  );
}
