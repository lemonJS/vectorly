import React from 'react';

import { clamp } from 'lodash';
import { SVG, Transform } from '@type/editor';

interface Props {
  height: number;
  parent: string;
  padding: number;
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
  transform: Transform;
  handleTransform: (transform: Partial<Transform>) => void;
  width: number;
}

interface State {
  pressed: boolean;
}

export class Scale extends React.Component<Props, State> {
  private parent: SVG;
  private offset: { x: number, y: number };
  private box: { width: number, height: number };

  public constructor(props: Props) {
    super(props);

    this.state = { pressed: false };
  }

  public componentDidMount() {
    this.parent = document.getElementById(this.props.parent) as SVG;
    this.offset = { x: 0, y: 0 };
    this.box = { width: 0, height: 0 };

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  public componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);
  }

  private get cx() {
    switch(this.props.position) {
      case 'top-right':
      case 'bottom-right':
        return this.props.width;
      default:
        return 0;
    }
  }

  private get cy() {
    switch(this.props.position) {
      case 'bottom-right':
      case 'bottom-left':
        return this.props.height;
      default:
        return 0;
    }
  }

  private get rx() {
    return this.props.padding / this.props.transform.s[0];
  }

  private get ry() {
    return this.props.padding / this.props.transform.s[1];
  }

  private get cursor() {
    switch (this.props.position) {
      case 'top-left':
        return 'nw-resize';
      case 'top-right':
        return 'ne-resize';
      case 'bottom-right':
        return 'se-resize';
      case 'bottom-left':
        return 'sw-resize';
      default:
        return 'default';
    }
  }

  private handleMouseDown = (event: React.MouseEvent<SVGEllipseElement>) => {
    const element = event.target as HTMLDivElement;
    const box = this.parent.getBBox();
    const { x: x1, y: y1 } = element.getBoundingClientRect();
    const { x: x2, y: y2 } = this.parent.getBoundingClientRect();

    // Store where exactly the user grabbed the handle
    // so it can be subtracted later. Otherwise it will
    // jump around all over the place
    this.offset = { x: x1 - x2, y: y1 - y2 };

    this.box = { width: box.width, height: box.height };

    this.setState({ pressed: true });
  }

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  private clampScale = (scale: number) => {
    // This can probably be calculated one day
    return clamp(scale, 1, 5);
  };

  private handleMouseMove = (event: MouseEvent) => {
    if (this.state.pressed) {
      const { x, y } = this.parent.getBoundingClientRect();

      const position = {
        x: Math.ceil(event.clientX - x - this.offset.x - this.props.padding),
        y: Math.ceil(event.clientY - y - this.offset.y - this.props.padding)
      };

      // I know JS has poor rounding, but why does toFixed have to return a string?!
      const scaleX = Number(((this.box.width + position.x) / this.box.width).toFixed(2));
      const scaleY = Number(((this.box.height + position.y) / this.box.height).toFixed(2));

      const scale = [this.clampScale(scaleX), this.clampScale(scaleY)];
      this.props.handleTransform({ s: scale as [number, number] });
    }
  }

  public render(): JSX.Element {
    return (
      <ellipse
        cx={this.cx}
        cy={this.cy}
        cursor={this.cursor}
        fill='var(--primary-accent-color)'
        onMouseDown={this.handleMouseDown}
        rx={this.rx}
        ry={this.ry}
      />
    );
  }
}
