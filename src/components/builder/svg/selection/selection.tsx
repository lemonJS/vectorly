import React from 'react';

import ReactDOM from 'react-dom';
import { Element } from '@type/project';
import { SVG, Transform } from '@type/editor';
import { Outline } from '@components/builder/svg/selection/outline';
import { Move } from '@components/builder/svg/selection/move';
import { Rotate } from '@components/builder/svg/selection/rotate';
import { Scale } from '@components/builder/svg/selection/scale';
import { TextEditor } from '@components/builder/svg/selection/text-editor';

interface Props {
  box: SVGRect;
  transform: Transform;
  parent: string;
  element: Element;
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
    return this.props.box.height + ((this.padding * 2) / this.scaleY);
  }

  private get left() {
    return this.props.transform.x - this.padding;
  }

  private get rotate() {
    const x = this.props.transform.x + ((this.props.box.width / 2) * this.scaleX);
    const y = this.props.transform.y + ((this.props.box.height / 2) * this.scaleY);
    return `${this.props.transform.r} ${x} ${y}`;
  }

  private get top() {
    return this.props.transform.y - this.padding;
  }

  private get width() {
    return this.props.box.width + ((this.padding * 2) / this.scaleX);
  }

  private get transform() {
    return `rotate(${this.rotate}) translate(${this.left} ${this.top}) scale(${this.scaleX} ${this.scaleY})`;
  }

  public render() {
    const props = {
      height: this.height,
      transform: this.props.transform,
      padding: this.padding,
      parent: this.props.parent,
      handleTransform: this.props.handleTransform,
      element: this.props.element,
      width: this.width
    };

    const Element = (
      <g transform={this.transform}>
        <Outline {...props} />
        <Move {...props} />
        <Rotate {...props} />
        <TextEditor {...props} />
        <Scale position='top-left' {...props} />
        <Scale position='top-right' {...props} />
        <Scale position='bottom-right' {...props} />
        <Scale position='bottom-left' {...props} />
      </g>
    );

    return ReactDOM.createPortal(Element, this.svg);
  }
}
