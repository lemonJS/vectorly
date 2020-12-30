import React from 'react';

import { EmojiLib } from 'emojilib';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { Element } from '@type/project';
import { createProjectElement } from '@lib/projects/actions';

interface Props {
  emoji: EmojiLib;
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
    border-color: var(--primary-accent-color);
  }
`;

export function Emoji(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function formatEmojiForCreation(): Omit<Element, 'id'>  {
    return {
      element: 'text',
      type: 'emoji',
      transform: {
        x: 50,
        y: 50,
        r: 0,
        s: [1, 1]
      },
      props: {
        color: '#283037',
        dominantBaseline: 'text-before-edge',
        fontSize: 80,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 1,
        textAnchor: 'start',
        textDecoration: 'none'
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