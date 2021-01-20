import React from 'react';

import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { Element, createElement } from '@store/project';

interface Props {
  children: React.ReactNode;
  textType: string;
}

const styles = css`
  align-items: center;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  display: flex;
  height: 100px;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  &:hover {
    border-color: var(--primary);
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

export const TextType = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const getFontSize = () => {
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
  };

  const formatTextForCreation = (): Omit<Element, 'id'> => ({
    element: 'text',
    type: 'text',
    transform: {
      x: 50,
      y: 50,
      r: 0,
      s: [1, 1]
    },
    props: {
      dominantBaseline: 'text-before-edge',
      fill: '#283037',
      fontSize: getFontSize(),
      fontFamily: 'Arial',
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 1,
      textAnchor: 'start',
      textDecoration: 'none'
    },
    text: 'Enter your text'
  });

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const text = formatTextForCreation();
    event.dataTransfer.setData('element', JSON.stringify(text));
  };

  const handleClick = () => {
    const text = formatTextForCreation();
    dispatch(createElement(text));
  };

  return (
    <div className={`${styles} ${props.textType}`} draggable onClick={handleClick} onDragStart={handleDragStart}>
      {props.children}
    </div>
  );
};
