import React from 'react';

import { Transform } from '../../types/editor';

interface Props {
  box: SVGRect;
  padding: number;
  handleTransform: (transform: Partial<Transform>) => void;
}

interface State {
  pressed: boolean;
}

export class Rotate extends React.Component<Props, State> {
  private readonly ref: React.RefObject<SVGGElement>;

  public constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.state = { pressed: false };
  }

  public componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  public componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);
  }

  private handleMouseMove = (event: MouseEvent) => {
    if (this.state.pressed) {
      const container = this.ref.current.closest('.container');
      const bound = container.getBoundingClientRect();
      const x = bound.left + bound.width / 2;
      const y = bound.top + bound.height / 2;

      const radians = Math.atan2(event.clientY - y, event.clientX - x);
      // Because we're dragging, it needs to be inverted to feel natural
      const inverted = radians > 0 ? -Math.abs(radians) : Math.abs(radians);
      const degrees = (inverted * (180 / Math.PI) * -1) - 90;

      // TODO snap to within x of 0, 45, 90 etc
      this.props.handleTransform({ r: degrees });
    }
  };

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  private handleMouseDown = () => {
    this.setState({ pressed: true });
  };

  public render(): JSX.Element {
    const { height, width } = this.props.box;

    return (
      <g ref={this.ref} transform={`translate(${(width - (this.props.padding * 4)) / 2}, ${height + (this.props.padding * 3)})`} onMouseDown={this.handleMouseDown}>
        <circle cx={this.props.padding * 2} cy={this.props.padding * 2} r={this.props.padding * 2} />
        <g transform='translate(3.5, 3.5)'>
          <path fill='none' d='M0 0h24v24H0z' />
          <path fill='white' d='M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z' />
        </g>
      </g>
    );
  }
}