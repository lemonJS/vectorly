import React from 'react';

import { SVG, Transform } from '../../types/editor';

interface Props {
  parent: string;
  handleTransform: (transform: Partial<Transform>) => void;
}

interface State {
  pressed: boolean;
}

export class Rotate extends React.Component<Props, State> {
  private readonly parent: SVG;
  private readonly ref: React.RefObject<HTMLDivElement>;

  public constructor(props) {
    super(props);

    this.ref = React.createRef();
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
    return (
      <div className='handle bottom' ref={this.ref} onMouseDown={this.handleMouseDown}>
        <i className='ri-refresh-line' />
      </div>
    );
  }
}