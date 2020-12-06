import React from 'react';
import ReactDOM from 'react-dom';

import type { Transform } from '../../../types/editor';
import { css } from '@emotion/css';
import { Move } from './move';
import { Rotate } from './rotate';
import { Scale } from './scale';

interface Props {
  box: SVGRect;
  transform: Transform;
  parent: string;
  handleTransform: (transform: Partial<Transform>) => void;
}

const styles = css`
  left: 0;  
  position: absolute;
  top: 0;
  z-index: 2;
  
  .selection {
    border-color: var(--primary-accent-color);
    border-style: solid;
    height: 100%;
    position: relative;
    width: 100%;
  }
`;

export class Selection extends React.Component<Props> {
  private offset: { x: number, y: number };
  private readonly padding = 8;
  private readonly element: HTMLDivElement;

  public constructor(props: Props) {
    super(props);

    this.element = document.createElement('div');

    const svg = document.getElementById('canvas');
    const { x, y } = svg.getBoundingClientRect();
    this.offset = { x, y };
  }

  public componentDidMount() {
    document.body.appendChild(this.element);
  }

  public componentWillUnmount() {
    document.body.removeChild(this.element);
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
    return this.props.transform.x + this.offset.x - this.padding;
  }

  private get rotate() {
    return this.props.transform.r;
  }

  private get top() {
    return this.props.transform.y + this.offset.y - this.padding;
  }

  private get width() {
    return (this.props.box.width) + (this.padding * 2);
  }

  private get styles() {
    const x = Math.max(2, 1 / this.scaleX);
    const y = Math.max(2, 1 / this.scaleY);

    return { borderWidth: `${x}px ${y}px` };
  }

  public render() {
    const style = {
      height: this.height,
      transform: `translate(${this.left}px, ${this.top}px) rotate(${this.rotate}deg) scale(${this.scaleX}, ${this.scaleY})`,
      width: this.width
    };

    const props = {
      transform: this.props.transform,
      parent: this.props.parent,
      handleTransform: this.props.handleTransform
    };

    const Element = (
      <div className={styles} style={style}>
        <div className='selection' style={this.styles}>
          <Scale position='top-left' {...props} />
          <Scale position='top-right' {...props} />
          <Scale position='bottom-right' {...props} />
          <Scale position='bottom-left' {...props} />
        </div>
        <Move {...props} />
        <Rotate {...props} />
      </div>
    );

    return ReactDOM.createPortal(Element, this.element);
  }
}
