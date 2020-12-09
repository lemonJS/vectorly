import React from 'react';

import { SVG, Transform } from '@type/editor';

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
  private readonly parent: SVG;

  public constructor(props) {
    super(props);

    this.state = { pressed: false };
    this.parent = document.getElementById(this.props.parent) as SVG;
  }

  public componentDidMount() {
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
    return (this.props.height + (this.props.padding * 3) / this.props.transform.s[1]);
  }

  private get rx() {
    return this.props.padding / this.props.transform.s[0];
  }

  private get ry() {
    return this.props.padding / this.props.transform.s[1];
  }

  private handleMouseMove = (event: MouseEvent) => {
    if (this.state.pressed) {
      const bound = this.parent.getBoundingClientRect();
      const x = bound.left + bound.width / 2;
      const y = bound.top + bound.height / 2;

      const radians = Math.atan2(event.clientY - y, event.clientX - x);
      // Because we're dragging, it needs to be inverted to feel natural
      const inverted = radians > 0 ? -Math.abs(radians) : Math.abs(radians);
      const degrees = (inverted * (180 / Math.PI) * -1) - 90;

      // TODO snap to within x of 0, 45, 90 etc
      this.props.handleTransform({ r: Math.ceil(degrees) });
    }
  };

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  private handleMouseDown = () => {
    this.setState({ pressed: true });
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
      />
    );
  }
}
