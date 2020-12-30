import React from 'react';

import { Transform } from '@type/project';

interface Props {
  height: number;
  padding: number;
  parent: string;
  transform: Transform;
  handleTransform: (transform: Partial<Transform>) => void;
  width: number;
}

interface State {
  pressed: boolean;
}

export class Move extends React.Component<Props, State> {
  private svg: HTMLElement & SVGSVGElement;
  private parent: HTMLElement;
  private offset: { x: number, y: number };

  public constructor(props: Props) {
    super(props);

    this.state = { pressed: false };
  }

  public componentDidMount() {
    this.svg = document.getElementById('canvas') as HTMLElement & SVGSVGElement;
    this.parent = document.getElementById(this.props.parent) as HTMLElement;
    this.offset = { x: 0, y: 0 };

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
    return (this.props.width / 2);
  }

  private get cy() {
    return - (this.props.padding * 3) / this.props.transform.s[1];
  }

  private get rx() {
    return this.props.padding / this.props.transform.s[0];
  }

  private get ry() {
    return this.props.padding / this.props.transform.s[1];
  }

  private beginDrag = (element: HTMLDivElement, clientX: number, clientY: number) => {
    // The bounds of the the drag handle
    const { x: x1, y: y1 } = element.getBoundingClientRect();
    // The bounds of the element that is being moved
    const { x: x2, y: y2 } = this.parent.getBoundingClientRect();

    // The offset between where the mouse was clicked,
    // and the drag handle (0,0 of the drag handle can't
    // be used or it will jump by a few pixels)
    const diffX = clientX - x1;
    const diffY = clientY - y1;

    // Store where exactly the user grabbed the handle
    // so it can be subtracted later. Otherwise it will
    // jump around all over the place
    this.offset = { x: x1 - x2 + diffX, y: y1 - y2 + diffY };

    this.setState({ pressed: true });
  };

  private duringDrag = (clientX: number, clientY: number) => {
    if (this.state.pressed) {
      const { x, y } = this.svg.getBoundingClientRect();

      this.props.handleTransform({
        x: clientX - x - this.offset.x,
        y: clientY - y - this.offset.y
      });
    }
  };

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  private handleTouchEnd = () => {
    this.setState({ pressed: false });
  };

  private handleMouseDown = (event: React.MouseEvent<SVGEllipseElement>) => {
    const element = event.target as HTMLDivElement;
    this.beginDrag(element, event.clientX, event.clientY);
  };

  private handleTouchStart = (event: React.TouchEvent<SVGEllipseElement>) => {
    const element = event.target as HTMLDivElement;
    this.beginDrag(element, event.touches[0].clientX, event.touches[0].clientY);
  };

  private handleMouseMove = (event: MouseEvent) => {
    this.duringDrag(event.clientX, event.clientY);
  };

  private handleTouchMove = (event: TouchEvent) => {
    this.duringDrag(event.touches[0].clientX, event.touches[0].clientY);
  };

  public render(): JSX.Element {
    return (
      <ellipse
        cx={this.cx}
        cy={this.cy}
        rx={this.rx}
        ry={this.ry}
        cursor='move'
        fill='var(--primary-accent-color)'
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleTouchStart}
      />
    );
  }
}
