import React from 'react';

import type { SVG, Transform } from '../../types/editor';
import { css } from '@emotion/css';

interface Props {
  parent: string;
  position: string;
  handleTransform: (transform: Partial<Transform>) => void;
}

interface State {
  pressed: boolean;
}

const styles = css`
  background: var(--primary-accent-color);
  border-radius: 50%;
  height: 1rem;
  position: absolute;
  width: 1rem;
  
  &.top-left {
    left: -.5rem;
    top: -.5rem;
  }
  
  &.top-right {
    right: -.5rem;
    top: -.5rem;
  }
  
  &.bottom-right {
    bottom: -.5rem;
    right: -.5rem;
  }
  
  &.bottom-left {
    bottom: -.5rem;
    left: -.5rem;
  }
`;

export class Scale extends React.Component<Props, State> {
  private svg: SVG;
  private parent: HTMLElement;
  private offset: { x: number, y: number };

  public constructor(props: Props) {
    super(props);

    this.state = { pressed: false };
  }

  private handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {

  }

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  public render(): JSX.Element {
    return (
      <div className={`${styles} ${this.props.position}`} onMouseDown={this.handleMouseDown} />
    );
  }
}