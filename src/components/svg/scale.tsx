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

  public componentDidMount() {
    this.svg = document.getElementById('canvas') as SVG;
    this.parent = document.getElementById(this.props.parent) as HTMLElement;
    this.offset = { x: 0, y: 0 };

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  public componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);
  }

  private handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;
    const { x: x1, y: y1 } = element.getBoundingClientRect();
    const { x: x2, y: y2 } = this.parent.getBoundingClientRect();

    // Store where exactly the user grabbed the handle
    // so it can be subtracted later. Otherwise it will
    // jump around all over the place
    this.offset = { x: x1 - x2, y: y1 - y2 };

    this.setState({ pressed: true });
  }

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  private handleMouseMove = (event: MouseEvent) => {
    if (this.state.pressed) {
      const { x, y } = this.svg.getBoundingClientRect();

      const position = {
        x: Math.ceil(event.clientX - x - this.offset.x),
        y: Math.ceil(event.clientY - y - this.offset.y)
      };

      console.log(position);
    }
  }

  public render(): JSX.Element {
    return (
      <div className={`${styles} ${this.props.position}`} onMouseDown={this.handleMouseDown} />
    );
  }
}
