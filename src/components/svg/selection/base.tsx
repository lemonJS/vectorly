import React from 'react';

import { Transform } from '@type/project';
import { canvas } from '@lib/constants';
import { Position } from '@lib/editor/reducers';

export interface Props {
  box: SVGRect;
  position: Position;
  transform: Transform;
}

export abstract class Base<P extends Props> extends React.Component<P> {
  public readonly padding = 8;
  public readonly target: HTMLElement;

  protected constructor(props: P) {
    super(props);

    this.target = document.getElementById(canvas);
  }

  public get x() {
    return this.props.position.x + this.props.transform.x
  }

  public get y() {
    return this.props.position.y + this.props.transform.y;
  }

  public get scaleX(): number {
    return this.props.transform.s[0];
  }

  public get scaleY(): number {
    return this.props.transform.s[1];
  }

  public get height(): number {
    return this.props.box.height + ((this.padding * 2) / this.scaleY);
  }

  public get left(): number {
    return this.x - this.padding;
  }

  public get rotate(): string {
    const x = this.x + ((this.props.box.width / 2) * this.scaleX);
    const y = this.y + ((this.props.box.height / 2) * this.scaleY);
    return `${this.props.transform.r} ${x} ${y}`;
  }

  public get top(): number {
    return this.y - this.padding;
  }

  public get width(): number {
    return this.props.box.width + ((this.padding * 2) / this.scaleX);
  }

  public get transform(): string {
    return `rotate(${this.rotate}) translate(${this.left} ${this.top}) scale(${this.scaleX} ${this.scaleY})`;
  }
}
