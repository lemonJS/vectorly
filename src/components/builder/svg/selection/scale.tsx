import React from 'react';

import { clone } from 'lodash';
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
  box: [number, number];
  offset: [number, number];
  pressed: boolean;
  scale: [number, number];
}

export class Scale extends React.Component<Props, State> {
  private svg: SVG;
  private parent: SVG;

  public constructor(props: Props) {
    super(props);

    this.state = {
      box: [0, 0],
      offset: [0, 0],
      pressed: false,
      scale: [1, 1]
    };
  }

  public componentDidMount() {
    this.svg = document.getElementById('canvas') as SVG;
    this.parent = document.getElementById(this.props.parent) as SVG;

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

    this.setState({
      box: [box.width, box.height],
      offset: [event.clientX, event.clientY],
      pressed: true,
      scale: clone(this.props.transform.s)
    });
  }

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  private handleMouseMove = (event: MouseEvent) => {
    if (this.state.pressed) {
      const transform = calculateTransform({
        svg: this.svg,
        box: this.state.box,
        client: [event.clientX, event.clientY],
        offset: this.state.offset,
        position: this.props.position,
        scale: this.state.scale,
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
