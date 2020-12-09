import React from 'react';

import ReactDOM from 'react-dom';
import { SVG, Transform } from '@type/editor';
import { Outline } from '@components/builder/svg/selection/outline';
import { Move } from '@components/builder/svg/selection/move';
import { Rotate } from '@components/builder/svg/selection/rotate';
import { Scale } from '@components/builder/svg/selection/scale';

interface Props {
  box: SVGRect;
  transform: Transform;
  parent: string;
  handleTransform: (transform: Partial<Transform>) => void;
}

export class Selection extends React.Component<Props> {
  private readonly svg: SVG;
  private readonly padding = 8;

  public constructor(props: Props) {
    super(props);

    this.svg = document.getElementById('canvas') as SVG;
  }

  private get scaleX() {
    return this.props.transform.s[0];
  }

  private get scaleY() {
    return this.props.transform.s[1];
  }

  private get height() {
    return (this.props.box.height) + (this.padding * 2);
  }

  private get left() {
    return this.props.transform.x - this.padding;
  }

  private get rotate() {
    return this.props.transform.r;
  }

  private get top() {
    return this.props.transform.y - this.padding;
  }

  private get width() {
    return (this.props.box.width) + (this.padding * 2);
  }

  private get transform() {
    return `translate(${this.left}, ${this.top}) rotate(${this.rotate}, ${this.width / 2}, ${this.height / 2}) scale(${this.scaleX}, ${this.scaleY})`;
  }

  public render() {
    const props = {
      height: this.height,
      transform: this.props.transform,
      padding: this.padding,
      parent: this.props.parent,
      handleTransform: this.props.handleTransform,
      width: this.width
    };

    const Element = (
      <g transform={this.transform}>
        <Outline {...props} />
        <Scale position='top-left' {...props} />
        <Scale position='top-right' {...props} />
        <Scale position='bottom-right' {...props} />
        <Scale position='bottom-left' {...props} />
        <Move {...props} />
        <Rotate {...props} />
      </g>
    );

    return ReactDOM.createPortal(Element, this.svg);
  }
}
