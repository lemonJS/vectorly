import React from 'react';

import type { SVG, Transform } from '../../types/editor';

interface Props {
  parent: string;
  handleTransform: (transform: Partial<Transform>) => void;
}

interface State {
  pressed: boolean;
}

export class Move extends React.Component<Props, State> {
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

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  private handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;
    const { x: x1, y: y1 } = element.getBoundingClientRect();
    const { x: x2, y: y2 } = this.parent.getBoundingClientRect();

    // Store where exactly the user grabbed the handle
    // so it can be subtracted later. Otherwise it will
    // jump around all over the place
    this.offset = { x: x1 - x2, y: y1 - y2 };

    this.setState({ pressed: true });
  };

  private handleMouseMove = (event: MouseEvent) => {
    if (this.state.pressed) {
      const { x, y } = this.svg.getBoundingClientRect();

      this.props.handleTransform({
        x: event.clientX - x - this.offset.x,
        y: event.clientY - y - this.offset.y
      });
    }
  };

  public render(): JSX.Element {
    return (
      <div className='handle top' onMouseDown={this.handleMouseDown}>
        <i className='ri-drag-move-2-line' />
      </div>
    );
  }
}