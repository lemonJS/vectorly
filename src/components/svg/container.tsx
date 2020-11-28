import React from 'react';

import { Selection } from './selection';

type Coords = [number, number];
type SvgInHtml = HTMLElement & SVGSVGElement;

interface Props extends React.SVGProps<SVGGElement> {
  id: string;
  selected: boolean;
  defaultCoords: Coords;
  setSelection: (id: string) => void;
}

interface State {
  coords: Coords;
  pressed: boolean;
}

export class Container extends React.Component<Props, State> {
  private readonly ref: React.RefObject<SVGGElement>;
  private svg: SvgInHtml;
  private box: DOMRect;
  private grabPoint: DOMPoint;
  private trueCoords: DOMPoint;

  public constructor(props: Props) {
    super(props);
    this.ref = React.createRef();

    this.state = {
      coords: props.defaultCoords,
      pressed: false
    };
  }

  public componentDidMount() {
    this.svg = document.getElementById('canvas') as SvgInHtml;
    this.grabPoint = this.svg.createSVGPoint();
    this.trueCoords = this.svg.createSVGPoint();
    this.box = this.ref.current.getBBox();
  }

  private get x() {
    return this.state.coords[0];
  }

  private get y() {
    return this.state.coords[1];
  }

  private handleMouseDown = (event: React.MouseEvent<SVGGElement>) => {
    if (!this.props.selected) {
      return this.props.setSelection(this.props.id);
    }

    const element = event.target as SVGGElement;
    const { e, f } = element.getCTM();
    this.grabPoint.x = this.trueCoords.x - Number(e);
    this.grabPoint.y = this.trueCoords.y - Number(f);

    this.setState({ pressed: true });
  };

  private handleMouseMove = (event: React.MouseEvent<SVGGElement>) => {
    if (this.props.selected) {
      const {x, y} = this.svg.currentTranslate;

      this.trueCoords.x = (event.clientX - x) / this.svg.currentScale;
      this.trueCoords.y = (event.clientY - y) / this.svg.currentScale;

      if (this.state.pressed) {
        const coords = [this.trueCoords.x - this.grabPoint.x, this.trueCoords.y - this.grabPoint.y] as Coords;
        this.setState({ coords });
      }
    }
  };

  private handleMouseUp = (_event: React.MouseEvent<SVGGElement>) => {
    this.setState({ pressed: false });
  };

  private handleMouseLeave = (_event: React.MouseEvent<SVGGElement>) => {
    this.setState({ pressed: false });
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
        {this.props.selected && this.box && <Selection box={this.box} />}
      </g>
    );
  }
}
