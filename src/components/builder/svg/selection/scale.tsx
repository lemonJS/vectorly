import React from 'react';

import { SVG, Transform } from '@type/editor';
import { calculateTransform } from '@lib/scaling';

interface Props {
  height: number;
  parent: string;
  padding: number;
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
  transform: Transform;
  handleTransform: (transform: Partial<Transform>) => void;
  width: number;
}

interface State {
  pressed: boolean;
}

export class Scale extends React.Component<Props, State> {
  private svg: SVG;
  private parent: SVG;
  private offset: { x: number, y: number };
  private box: { width: number, height: number };

  public constructor(props: Props) {
    super(props);

    this.state = { pressed: false };
  }

  public componentDidMount() {
    this.svg = document.getElementById('canvas') as SVG;
    this.parent = document.getElementById(this.props.parent) as SVG;

    this.offset = { x: 0, y: 0 };
    this.box = { width: 0, height: 0 };

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  public componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);
  }

  private get cx() {
    switch(this.props.position) {
      case 'top-right':
      case 'bottom-right':
        return this.props.width;
      default:
        return 0;
    }
  }

  private get cy() {
    switch(this.props.position) {
      case 'bottom-right':
      case 'bottom-left':
        return this.props.height;
      default:
        return 0;
    }
  }

  private get rx() {
    return this.props.padding / this.props.transform.s[0];
  }

  private get ry() {
    return this.props.padding / this.props.transform.s[1];
  }

  private get cursor() {
    switch (this.props.position) {
      case 'top-left':
        return 'nw-resize';
      case 'top-right':
        return 'ne-resize';
      case 'bottom-right':
        return 'se-resize';
      case 'bottom-left':
        return 'sw-resize';
      default:
        return 'default';
    }
  }

  private handleMouseDown = (event: React.MouseEvent<SVGEllipseElement>) => {
    const box = this.parent.getBBox();

    this.offset = { x: event.clientX, y: event.clientY };
    this.box = { width: box.width, height: box.height };

    this.setState({ pressed: true });
  }

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  private handleMouseMove = (event: MouseEvent) => {
    if (this.state.pressed) {
      const transform = calculateTransform({
        svg: this.svg,
        clientX: event.clientX,
        clientY: event.clientY,
        height: this.box.height,
        offsetX: this.offset.x,
        offsetY: this.offset.y,
        position: this.props.position,
        transform: this.props.transform,
        width: this.box.width
      });
      this.props.handleTransform(transform);
    }
  }

  public render(): JSX.Element {
    return (
      <ellipse
        cx={this.cx}
        cy={this.cy}
        cursor={this.cursor}
        fill='var(--primary-accent-color)'
        onMouseDown={this.handleMouseDown}
        rx={this.rx}
        ry={this.ry}
      />
    );
  }
}
