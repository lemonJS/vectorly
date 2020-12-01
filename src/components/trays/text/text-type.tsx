import React from 'react';

import type { Element } from '../../../types/project';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { createProjectElement } from '../../../lib/project/actions';

interface Props {
  children: React.ReactNode;
  textType: string;
}

const styles = css`
  align-items: center;
  background: var(--sidebar-navigation-background-color);
  border-radius: .25rem;
  color: var(--secondary-text-color);
  cursor: pointer;
  display: flex;
  height: 100px;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  &:hover {
    transform: translate(-2px, -2px);
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

  function formatTextForCreation(): Omit<Element, 'id'> {
    return {
      element: 'text',
      type: 'text',
      transform: {
        x: 0,
        y: 0,
        r: 0
      },
      props: {
        alignmentBaseline: 'hanging',
        color: '#283037',
        dominantBaseline: 'hanging',
        fontSize: getFontSize()
      },
      children: 'Enter your text'
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