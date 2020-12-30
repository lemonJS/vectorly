import React from 'react';

import { Transform } from '@type/project';

interface Props {
  height: number;
  padding: number;
  parent: string;
  transform: Transform;
  width: number;
  handleTransform: (transform: Partial<Transform>) => void;
}

interface State {
  pressed: boolean;
}

export class Rotate extends React.Component<Props, State> {
  private readonly parent: HTMLElement & SVGSVGElement;

  public constructor(props: Props) {
    super(props);

    this.state = { pressed: false };
    this.parent = document.getElementById(this.props.parent) as HTMLElement & SVGSVGElement;
  }

  public componentDidMount() {
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
    return (this.props.height + (this.props.padding * 3) / this.props.transform.s[1]);
  }

  private get rx() {
    return this.props.padding / this.props.transform.s[0];
  }

  private get ry() {
    return this.props.padding / this.props.transform.s[1];
  }

  private beginDrag = () => {
    this.setState({ pressed: true });
  };

  private duringDrag = (clientX: number, clientY: number) => {
    if (this.state.pressed) {
      const bound = this.parent.getBoundingClientRect();
      const x = bound.left + bound.width / 2;
      const y = bound.top + bound.height / 2;

      const radians = Math.atan2(clientY - y, clientX - x);
      // Because we're dragging, it needs to be inverted to feel natural
      const inverted = radians > 0 ? -Math.abs(radians) : Math.abs(radians);
      const degrees = (inverted * (180 / Math.PI) * -1) - 90;

      this.props.handleTransform({ r: degrees });
    }
  };

  private endDrag = () => {
    this.setState({ pressed: false });
  };

  private handleMouseDown = () => {
    this.beginDrag();
  };

  private handleTouchStart = () => {
    this.beginDrag();
  }

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
        rx={this.rx}
        ry={this.ry}
        cursor='all-scroll'
        fill='var(--primary-accent-color)'
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleTouchStart}
      />
    );
  }
}
