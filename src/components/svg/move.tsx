import React from 'react';

import type { SVG, Transform } from '../../types/editor';

interface Props {
  box: SVGRect;
  padding: number;
  handleTransform: (transform: Partial<Transform>) => void;
}

interface State {
  pressed: boolean;
}

export class Move extends React.Component<Props, State> {
  private svg: SVG;
  private grabPoint: DOMPoint;
  private trueCoords: DOMPoint;

  public constructor(props: Props) {
    super(props);

    this.state = { pressed: false };
  }

  public componentDidMount() {
    this.svg = document.getElementById('canvas') as SVG;
    this.resetOffsets();

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  public componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);
  }

  private get moveHandleOffset() {
    return {
      x: (this.props.box.width - (this.props.padding * 4)) / 2,
      y: - this.props.padding * 7
    }
  }

  private handleMouseUp = () => {
    this.setState({ pressed: false });
    this.resetOffsets();
  };

  private resetOffsets = () => {
    this.grabPoint = this.svg.createSVGPoint();
    this.trueCoords = this.svg.createSVGPoint();
  };

  private handleMouseDown = () => {
    const { x, y } = this.moveHandleOffset;

    this.grabPoint.x = this.trueCoords.x + x;
    this.grabPoint.y = this.trueCoords.y + y;

    this.setState({ pressed: true });
  };

  private handleMouseMove = (event: MouseEvent) => {
    if (this.state.pressed) {
      const { x, y } = this.svg.getBoundingClientRect();

      this.trueCoords.x = (event.clientX - x);
      this.trueCoords.y = (event.clientY - y);

      const coords = {
        x: this.trueCoords.x - this.grabPoint.x,
        y: this.trueCoords.y - this.grabPoint.y
      };

      this.props.handleTransform(coords);
    }
  };

  public render(): JSX.Element {
    return (
      <div className='handle top' onMouseDown={this.handleMouseDown}>
        <i className='ri-drag-move-2-line' />
      </div>
    );
  }
}