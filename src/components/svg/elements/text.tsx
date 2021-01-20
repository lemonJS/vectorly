import React from 'react';

import { Element } from '@store/project';
import { getBox } from "@lib/helpers";

interface Props {
  element: Element;
  selected: boolean;
}

export class Text extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  private get box() {
    const node = document.getElementById(this.props.element.id) as HTMLElement & SVGSVGElement;
    return getBox(node);
  }

  private get x() {
    switch(this.textAnchor) {
      case 'start':
        return 0;
      case 'middle':
        return this.box.width / 2;
      case 'end':
        return this.box.width;
      default:
        return 0;
    }
  }

  private y(lineNumber: number) {
    const height = Number(this.props.element.props.fontSize) + 4;
    return height * lineNumber;
  }

  private get textAnchor() {
    return this.props.element.props.textAnchor;
  }

  private get lines() {
    const text = this.props.element.text || ''
    return text.split('\n');
  }

  public render(): JSX.Element | null {
    if (!this.props.element.text) return null;

    return (
      <React.Fragment>
        {this.lines.map((line, index) => (
          <tspan alignmentBaseline='text-before-edge' textAnchor={this.textAnchor} key={line} y={this.y(index)} x={this.x}>{line}</tspan>
        ))}
      </React.Fragment>
    );
  }
}
