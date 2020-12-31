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

  private get x() {
    return (this.props.width / 2);
  }

  private get y() {
    return (this.props.height + 24 / this.props.transform.s[1]);
  }

  private get rx() {
    return 12 / this.props.transform.s[0];
  }

  private get ry() {
    return 12 / this.props.transform.s[1];
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
      <g transform={`translate(${this.x} ${this.y})`}>
        <ellipse
          rx={this.rx}
          ry={this.ry}
          cursor='all-scroll'
          fill='var(--primary-accent-color)'
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
        />
        <path
          fill='white'
          transform={`scale(${1 / this.props.transform.s[0]} ${1 / this.props.transform.s[1]}) translate(-7 -7)`}
          d='M 2.4241,1.7031052 A 6.9727,6.9726933 0 0 1 7,6.7851405e-6 c 3.8661,0 7,3.1338970148595 7,6.9999935148595 0,1.4951984 -0.469,2.8811971 -1.267,4.0179957 L 10.5,7.0000003 h 2.1 A 5.6,5.5999945 0 0 0 3.122,2.9596039 Z M 11.5759,12.296896 A 6.9727,6.9726933 0 0 1 7,13.999993 c -3.8661,0 -7,-3.133896 -7,-6.9999927 C 0,5.5048015 0.469,4.1188029 1.267,2.9820039 L 3.5,7.0000003 H 1.4 a 5.6,5.5999945 0 0 0 9.478,4.0403957 z'
          pointerEvents='none'
        />
      </g>
    );
  }
}
