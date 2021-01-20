import React from 'react';

import { canvas } from '@lib/constants';
import { Transform } from '@store/project';
import { Position } from '@store/editor';

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

  public get x(): number {
    return (this.props.position.x + this.props.transform.x) * this.props.position.s;
  }

  public get y(): number {
    return (this.props.position.y + this.props.transform.y) * this.props.position.s;
  }

  public get scaleX(): number {
    return this.props.transform.s[0];
  }

  public get scaleY(): number {
    return this.props.transform.s[1];
  }

  public get height(): number {
    return (this.props.box.height * this.props.position.s) + ((this.padding * 2) / this.scaleY);
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
    return (this.props.box.width * this.props.position.s) + ((this.padding * 2) / this.scaleX);
  }

  public get transform(): string {
    return `rotate(${this.rotate}) translate(${this.left} ${this.top}) scale(${this.scaleX} ${this.scaleY})`;
  }
}
