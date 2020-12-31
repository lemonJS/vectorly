import React from 'react';

import { clone } from 'lodash';
import { Transform } from '@type/project';
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
  private svg: HTMLElement & SVGSVGElement;
  private parent: HTMLElement & SVGSVGElement;

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
    this.svg = document.getElementById('canvas') as HTMLElement & SVGSVGElement;
    this.parent = document.getElementById(this.props.parent) as HTMLElement & SVGSVGElement;

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);

    document.addEventListener('touchend', this.handleTouchEnd);
    document.addEventListener('touchmove', this.handleTouchMove);
  }

  public componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);

    document.removeEventListener('touchend', this.handleTouchEnd, false);
    document.removeEventListener('touchmove', this.handleTouchMove, false);
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
    return 8 / this.props.transform.s[0];
  }

  private get ry() {
    return 8 / this.props.transform.s[1];
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

  private beginDrag = (clientX: number, clientY: number) => {
    const box = this.parent.getBBox();

    this.setState({
      box: [box.width, box.height],
      offset: [clientX, clientY],
      pressed: true,
      scale: clone(this.props.transform.s)
    });
  };

  private duringDrag = (clientX: number, clientY: number) => {
    if (this.state.pressed) {
      const transform = calculateTransform({
        svg: this.svg,
        box: this.state.box,
        client: [clientX, clientY],
        offset: this.state.offset,
        position: this.props.position,
        scale: this.state.scale,
      });
      this.props.handleTransform(transform);
    }
  };

  private endDrag = () => {
    this.setState({ pressed: false });
  };

  private handleMouseDown = (event: React.MouseEvent<SVGEllipseElement>) => {
    this.beginDrag(event.clientX, event.clientY);
  };

  private handleTouchStart = (event: React.TouchEvent<SVGEllipseElement>) => {
    this.beginDrag(event.touches[0].clientX, event.touches[0].clientY);
  };

  private handleMouseMove = (event: MouseEvent) => {
    this.duringDrag(event.clientX, event.clientY);
  };

  private handleTouchMove = (event: TouchEvent) => {
    this.duringDrag(event.touches[0].clientX, event.touches[0].clientY);
  };

  private handleMouseUp = () => {
    this.endDrag();
  };

  private handleTouchEnd = () => {
    this.endDrag();
  };

  public render(): JSX.Element {
    return (
      <ellipse
        cx={this.cx}
        cy={this.cy}
        cursor={this.cursor}
        fill='var(--primary-accent-color)'
        rx={this.rx}
        ry={this.ry}
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleTouchStart}
      />
    );
  }
}
