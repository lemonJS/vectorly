import React from 'react';

import { clone } from 'lodash';
import { Transform } from '@store/project';
import { calculateTransform } from '@lib/scaling';

interface Props {
  height: number;
  parent: string;
  padding: number;
  location: 'top-left' | 'top-center' | 'top-right' | 'center-right' | 'bottom-right' | 'bottom-center' | 'bottom-left' | 'center-left';
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

  public componentDidMount(): void {
    this.parent = document.getElementById(this.props.parent) as HTMLElement & SVGSVGElement;

    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('keydown', this.handleKeyDown);

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);

    document.addEventListener('touchend', this.handleTouchEnd);
    document.addEventListener('touchmove', this.handleTouchMove);
  }

  public componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('keydown', this.handleKeyDown, false);

    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);

    document.removeEventListener('touchend', this.handleTouchEnd, false);
    document.removeEventListener('touchmove', this.handleTouchMove, false);
  }

  private get cx(): number {
    switch(this.props.location) {
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

  private get cy(): number {
    switch(this.props.location) {
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

  private get rx(): number {
    return 6 / this.props.transform.s[0];
  }

  private get ry(): number {
    return 6 / this.props.transform.s[1];
  }

  private get cursor(): string {
    switch (this.props.location) {
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

  private beginDrag = (clientX: number, clientY: number): void => {
    const box = this.parent.getBBox();

    this.setState({
      box: [box.width, box.height],
      offset: [clientX, clientY],
      pressed: true,
      scale: clone(this.props.transform.s)
    });
  };

  private duringDrag = (clientX: number, clientY: number): void => {
    if (this.state.pressed) {
      const transform = calculateTransform({
        box: this.state.box,
        client: [clientX, clientY],
        offset: this.state.offset,
        position: this.props.location,
        scale: this.state.scale,
        shift: this.state.shift
      });
      this.props.handleTransform(transform);
    }
  };

  private endDrag = (): void => {
    this.setState({ pressed: false });
  };

  private handleMouseDown = (event: React.MouseEvent<SVGEllipseElement>): void => {
    this.beginDrag(event.clientX, event.clientY);
  };

  private handleTouchStart = (event: React.TouchEvent<SVGEllipseElement>): void => {
    if (event.touches[0]) {
      this.beginDrag(event.touches[0].clientX, event.touches[0].clientY);
    }
  };

  private handleMouseMove = (event: MouseEvent): void => {
    this.duringDrag(event.clientX, event.clientY);
  };

  private handleTouchMove = (event: TouchEvent): void => {
    if (event.touches[0]) {
      this.duringDrag(event.touches[0].clientX, event.touches[0].clientY);
    }
  };

  private handleMouseUp = (): void => {
    this.endDrag();
  };

  private handleTouchEnd = (): void => {
    this.endDrag();
  };

  private handleKeyUp = (): void => {
    this.setState({ shift: false });
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
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
