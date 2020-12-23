import React from 'react';

import { css } from '@emotion/css';
import { Element } from '@type/project';
import { useDispatch } from 'react-redux';
import { updateProjectElement } from '@lib/projects/actions';

interface Props {
  element: Element;
  height: number;
  width: number;
}

const styles = css`
  textarea {
    background: transparent;
    border: none;
    color: red;
    height: 100%;
    margin: -1px 0 0 .5px;
    padding: .5rem;
    resize: none;
    scrollbar-width: none;
    width: 100%;
  }
`;

export function TextEditor(props: Props): JSX.Element {
  const dispatch = useDispatch();

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const element = event.target as HTMLTextAreaElement;
    dispatch(updateProjectElement(props.element.elementId, { text: element.value }));
  }

  function handleFocus(event: React.FocusEvent<HTMLTextAreaElement>) {
    const element = event.target as HTMLTextAreaElement;
    element.setSelectionRange(999999, 999999);
  }

  const style: React.CSSProperties = {
    color: props.element.props.fill,
    fontFamily: props.element.props.fontFamily,
    fontSize: props.element.props.fontSize + 'px',
    fontStyle: props.element.props.fontStyle as string,
    fontWeight: props.element.props.fontWeight as any,
    lineHeight: (props.element.props.fontSize as number) + 4 + 'px',
    letterSpacing: props.element.props.letterSpacing,
    textDecoration: props.element.props.textDecoration
    // TODO
  };

  if (props.element.type !== 'text') return null;

  return (
    <foreignObject className={styles} height={props.height} width={props.width}>
      <textarea
        autoFocus
        value={props.element.text}
        onChange={handleChange}
        onFocus={handleFocus}
        style={style}
      />
    </foreignObject>
  );
}
