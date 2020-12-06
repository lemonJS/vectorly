import React from 'react';

import type { EmojiData } from '../../../types/emoji';
import type { Element } from '../../../types/project';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { createProjectElement } from '../../../lib/project/actions';

interface Props {
  emoji: EmojiData;
}

const styles = css`
  align-items: center;
  background: var(--sidebar-navigation-background-color);
  border: 2px solid var(--sidebar-navigation-background-color);
  border-radius: .25rem;
  cursor: pointer;
  color: white;
  display: flex;
  font-size: 1.75rem;
  height: 50px;
  justify-content: center;
  
  &:hover {
    border-color: white;
  }
`;

export function Emoji(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function formatEmojiForCreation(): Omit<Element, 'id'>  {
    return {
      element: 'text',
      type: 'emoji',
      transform: {
        x: 0,
        y: 0,
        r: 0,
        s: [1, 1]
      },
      props: {
        alignmentBaseline: 'hanging',
        color: '#283037',
        dominantBaseline: 'hanging',
        fontSize: 80
      },
      text: props.emoji.char
    };
  }

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    const emoji = formatEmojiForCreation();
    event.dataTransfer.setData('element', JSON.stringify(emoji));
  }

  function handleClick() {
    const emoji = formatEmojiForCreation();
    dispatch(createProjectElement(emoji));
  }

  return (
    <div className={styles} draggable key={props.emoji.char} onClick={handleClick} onDragStart={handleDragStart}>
      {props.emoji.char}
    </div>
  );
}
