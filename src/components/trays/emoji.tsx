import React from 'react';

import type { EmojiData } from '../../types/emoji';
import type { EditorElement } from '../../types/editor';
import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { createProjectElement } from '../../lib/project/actions';

interface Props {
  emoji: EmojiData;
}

const styles = css`
  align-items: center;
  background: var(--sidebar-navigation-background-color);
  border-radius: .25rem;
  cursor: pointer;
  color: white;
  display: flex;
  font-size: 1.75rem;
  height: 50px;
  justify-content: center;
  
  &:hover {
    transform: translate(-2px, -2px);
  }
`;

export function Emoji(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function formatEmojiForCreation(): Omit<EditorElement, 'id'>  {
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
        fontSize: 80
      },
      children: props.emoji.char
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