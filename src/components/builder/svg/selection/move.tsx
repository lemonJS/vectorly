import React from 'react';

import { SVG, Transform } from '@type/editor';

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

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  private handleMouseDown = (event: React.MouseEvent<SVGEllipseElement>) => {
    const element = event.target as HTMLDivElement;

    // The bounds of the the drag handle
    const { x: x1, y: y1 } = element.getBoundingClientRect();
    // The bounds of the element that is being moved
    const { x: x2, y: y2 } = this.parent.getBoundingClientRect();

    // The offset between where the mouse was clicked,
    // and the drag handle (0,0 of the drag handle can't
    // be used or it will jump by a few pixels)
    const diffX = event.clientX - x1;
    const diffY = event.clientY - y1;

    // Store where exactly the user grabbed the handle
    // so it can be subtracted later. Otherwise it will
    // jump around all over the place
    this.offset = { x: x1 - x2 + diffX, y: y1 - y2 + diffY };

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
      <ellipse
        cx={this.cx}
        cy={this.cy}
        rx={this.rx}
        ry={this.ry}
        cursor='move'
        fill='var(--primary-accent-color)'
        onMouseDown={this.handleMouseDown}
      />
    );
  }
}
