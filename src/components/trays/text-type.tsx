import React from 'react';

import type { EditorElement } from '../../types/editor';
import { useDispatch } from 'react-redux';
import { createProjectElement } from '../../lib/project/actions';

interface Props {
  children: React.ReactNode;
  textType: string;
}

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

  function formatTextForCreation(): Omit<EditorElement, 'id'> {
    return {
      element: 'text',
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
    <div className={`text ${props.textType}`} draggable onClick={handleClick} onDragStart={handleDragStart}>
      {props.children}
    </div>
  );
}