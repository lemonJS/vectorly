import React from 'react';

import { useDispatch } from 'react-redux';
import { setSelectionId } from '../../lib/selection/actions';
import { Selection } from './selection';

type Coords = [number, number];
type SvgInHtml = HTMLElement & SVGSVGElement;

interface Props extends React.SVGProps<SVGGElement> {
  id: string;
  selected: boolean;
  defaultCoords: Coords;
}

interface State {
  coords: Coords;
}

export class Container extends React.Component<Props, State> {
  private readonly ref: React.RefObject<SVGGElement>;
  private svg: SvgInHtml;
  private grabPoint: DOMPoint;
  private trueCoords: DOMPoint;

  public constructor(props: Props) {
    super(props);
    this.ref = React.createRef();

    this.state = {
      coords: props.defaultCoords
    };
  }

  public componentDidMount() {
    // TODO
    const svg: SvgInHtml = document.getElementById('canvas') as SvgInHtml;
    this.svg = svg;
    this.grabPoint = svg.createSVGPoint();
    this.trueCoords = svg.createSVGPoint();
  }

  private get x() {
    return this.state.coords[0];
  }

  private get y() {
    return this.state.coords[1];
  }

  private handleMouseDown = (event: React.MouseEvent<SVGGElement>) => {
    // dispatch(setSelectionId(props.id));
    const element = event.target as SVGGElement;
    const { e, f } = element.getCTM();
    this.grabPoint.x = this.trueCoords.x = Number(e);
    this.grabPoint.y = this.trueCoords.y = Number(f);
  };

  private handleMouseMove = (event: React.MouseEvent<SVGGElement>) => {
    const { x, y } = this.svg.currentTranslate;
    this.trueCoords.x = (event.clientX - x) / this.svg.currentScale;
    this.trueCoords.y = (event.clientY - y) / this.svg.currentScale;

    const coords = [this.trueCoords.x - this.grabPoint.x, this.trueCoords.x - this.grabPoint.y] as Coords;
    this.setState({ coords });
  };

  private handleMouseUp = (event: React.MouseEvent<SVGGElement>) => {

  };

  private handleMouseLeave = (event: React.MouseEvent<SVGGElement>) => {

  };

  public render(): JSX.Element {
    const handlers = {
      onMouseDown: this.handleMouseDown,
      onMouseMove: this.handleMouseMove,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave
    };

    return (
      <g id={this.props.id} {...handlers} ref={this.ref} transform={`translate(${this.x}, ${this.y})`}>
        {this.props.children}
        {this.props.selected && <Selection box={this.ref.current.getBBox()} />}
      </g>
    );
  }
}
