import React from 'react';

import { clone } from 'lodash';
import { Transform } from '@type/project';
import { calculateTransform } from '@lib/scaling';

interface Props {
  height: number;
  parent: string;
  padding: number;
  position: 'top-left' | 'top-center' | 'top-right' | 'center-right' | 'bottom-right' | 'bottom-center' | 'bottom-left' | 'center-left';
  transform: Transform;
  handleTransform: (transform: Partial<Transform>) => void;
  width: number;
}

interface State {
  box: [number, number];
  offset: [number, number];
  pressed: boolean;
  scale: [number, number];
  shift: boolean;
}

export class Scale extends React.Component<Props, State> {
  private parent: HTMLElement & SVGSVGElement;

  public constructor(props: Props) {
    super(props);

    this.state = {
      box: [0, 0],
      offset: [0, 0],
      pressed: false,
      scale: [1, 1],
      shift: false
    };
  }

  public componentDidMount() {
    this.parent = document.getElementById(this.props.parent) as HTMLElement & SVGSVGElement;

    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('keydown', this.handleKeyDown);

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);

    document.addEventListener('touchend', this.handleTouchEnd);
    document.addEventListener('touchmove', this.handleTouchMove);
  }

  public componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('keydown', this.handleKeyDown, false);

    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);

    document.removeEventListener('touchend', this.handleTouchEnd, false);
    document.removeEventListener('touchmove', this.handleTouchMove, false);
  }

  private get cx() {
    switch(this.props.position) {
      case 'top-right':
      case 'bottom-right':
      case 'center-right':
        return this.props.width;
      case 'top-center':
      case 'bottom-center':
        return this.props.width / 2;
      default:
        return 0;
    }
  }

  private get cy() {
    switch(this.props.position) {
      case 'bottom-right':
      case 'bottom-left':
      case 'bottom-center':
        return this.props.height;
      case 'center-left':
      case 'center-right':
        return this.props.height / 2;
      default:
        return 0;
    }
  }

  private get rx() {
    return 6 / this.props.transform.s[0];
  }

  private get ry() {
    return 6 / this.props.transform.s[1];
  }

  private get cursor() {
    switch (this.props.position) {
      case 'top-left':
        return 'nw-resize';
      case 'top-center':
        return 'n-resize';
      case 'top-right':
        return 'ne-resize';
      case 'center-right':
        return 'e-resize';
      case 'bottom-right':
        return 'se-resize';
      case 'bottom-center':
        return 's-resize';
      case 'bottom-left':
        return 'sw-resize';
      case 'center-left':
        return 'w-resize';
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
        svg: window.canvas,
        box: this.state.box,
        client: [clientX, clientY],
        offset: this.state.offset,
        position: this.props.position,
        scale: this.state.scale,
        shift: this.state.shift
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
    if (event.touches[0]) {
      this.beginDrag(event.touches[0].clientX, event.touches[0].clientY);
    }
  };

  private handleMouseMove = (event: MouseEvent) => {
    this.duringDrag(event.clientX, event.clientY);
  };

  private handleTouchMove = (event: TouchEvent) => {
    if (event.touches[0]) {
      this.duringDrag(event.touches[0].clientX, event.touches[0].clientY);
    }
  };

  private handleMouseUp = () => {
    this.endDrag();
  };

  private handleTouchEnd = () => {
    this.endDrag();
  };

  private handleKeyUp = () => {
    this.setState({ shift: false });
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ shift: event.shiftKey });
  };

  public render(): JSX.Element {
    return (
      <ellipse
        cx={this.cx}
        cy={this.cy}
        cursor={this.cursor}
        fill='var(--primary)'
        rx={this.rx}
        ry={this.ry}
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleTouchStart}
      />
    );
  }
}
