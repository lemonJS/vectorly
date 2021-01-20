import React from 'react';

import { Transform } from '@store/project';
import { Position } from '@store/editor';

interface Props {
  height: number;
  padding: number;
  parent: string;
  position: Position;
  transform: Transform;
  handleTransform: (transform: Partial<Transform>) => void;
  width: number;
}

interface State {
  pressed: boolean;
}

export class Move extends React.Component<Props, State> {
  private parent: HTMLElement;
  private offset: { x: number, y: number };

  public constructor(props: Props) {
    super(props);

    this.state = { pressed: false };
  }

  public componentDidMount(): void {
    this.parent = document.getElementById(this.props.parent) as HTMLElement;
    this.offset = { x: 0, y: 0 };

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);

    document.addEventListener('touchend', this.handleTouchEnd);
    document.addEventListener('touchmove', this.handleTouchMove);
  }

  public componentWillUnmount(): void {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);

    document.removeEventListener('touchend', this.handleTouchEnd, false);
    document.removeEventListener('touchmove', this.handleTouchMove, false);
  }

  private get x(): number {
    return (this.props.width / 2);
  }

  private get y(): number {
    return - 24 / this.props.transform.s[1];
  }

  private get rx(): number {
    return 12 / this.props.transform.s[0];
  }

  private get ry(): number {
    return 12 / this.props.transform.s[1];
  }

  private beginDrag = (element: HTMLDivElement, clientX: number, clientY: number): void => {
    // TODO: I think I'm being an idiot here, surely there's an easier way!

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

  private duringDrag = (clientX: number, clientY: number): void => {
    if (this.state.pressed) {
      this.props.handleTransform({
        x: (clientX - this.props.position.x) - this.offset.x,
        y: (clientY - this.props.position.y) - this.offset.y
      });
    }
  };

  private handleMouseUp = (): void => {
    this.setState({ pressed: false });
  };

  private handleTouchEnd = (): void => {
    this.setState({ pressed: false });
  };

  private handleMouseDown = (event: React.MouseEvent<SVGEllipseElement>): void => {
    const element = event.target as HTMLDivElement;
    this.beginDrag(element, event.clientX, event.clientY);
  };

  private handleTouchStart = (event: React.TouchEvent<SVGEllipseElement>): void => {
    const element = event.target as HTMLDivElement;
    if (event.touches[0]) {
      this.beginDrag(element, event.touches[0].clientX, event.touches[0].clientY);
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

  public render(): JSX.Element {
    return (
      <g transform={`translate(${this.x} ${this.y})`}>
        <ellipse
          rx={this.rx}
          ry={this.ry}
          cursor='move'
          fill='var(--primary)'
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
        />
        <path
          fill='white'
          transform={`scale(${1 / this.props.transform.s[0]} ${1 / this.props.transform.s[1]}) translate(-8 -8)`}
          d='M 12.8,7.2 V 4.8 L 16,7.9999999 12.8,11.2 V 8.8 h -4 v 4 h 2.4 L 7.9999999,16 4.8,12.8 h 2.4 v -4 h -4 v 2.4 L 0,7.9999999 3.2,4.8 v 2.4 h 4 v -4 H 4.8 L 7.9999999,0 11.2,3.2 H 8.8 v 4 z'
          pointerEvents='none'
        />
      </g>
    );
  }
}
