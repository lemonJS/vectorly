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
  private readonly ref: React.RefObject<SVGGElement>;

  public constructor(props: Props) {
    super(props);

    this.ref = React.createRef();
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

  private handleMouseUp = () => {
    this.setState({ pressed: false });
    this.resetOffsets();
  };

  private resetOffsets = () => {
    this.grabPoint = this.svg.createSVGPoint();
    this.trueCoords = this.svg.createSVGPoint();
  };

  private handleMouseDown = (event: React.MouseEvent<SVGGElement>) => {
    const element = event.target as SVGGElement;

    const { e, f } = element.getCTM();
    this.grabPoint.x = this.trueCoords.x + 100 // - Number(e);
    this.grabPoint.y = this.trueCoords.y - 40 // - Number(f);

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
    const { width } = this.props.box;

    return (
      <g ref={this.ref} transform={`translate(${(width - (this.props.padding * 4)) / 2}, -${this.props.padding * 7})`} onMouseDown={this.handleMouseDown}>
        <circle cx={this.props.padding * 2} cy={this.props.padding * 2} r={this.props.padding * 2} />
        <g transform='translate(3.5, 3.5)'>
          <path fill='none' d='M0 0h24v24H0z' />
          <path fill='white' d='M11 11V5.828L9.172 7.657 7.757 6.243 12 2l4.243 4.243-1.415 1.414L13 5.828V11h5.172l-1.829-1.828 1.414-1.415L22 12l-4.243 4.243-1.414-1.415L18.172 13H13v5.172l1.828-1.829 1.415 1.414L12 22l-4.243-4.243 1.415-1.414L11 18.172V13H5.828l1.829 1.828-1.414 1.415L2 12l4.243-4.243 1.414 1.415L5.828 11z' />
        </g>
      </g>
    );
  }
}