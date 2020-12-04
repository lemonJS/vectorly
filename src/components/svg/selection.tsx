import React from 'react';
import ReactDOM from 'react-dom';

import type { Transform } from '../../types/editor';
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
    border: 1px solid var(--primary-accent-color);
    height: 100%;
    position: relative;
    width: 100%;
  }
  
  .handle {
    align-items: center;
    background: var(--primary-accent-color);
    border-radius: 50%;
    display: flex;
    height: 1.5rem;
    justify-content: center;
    left: 50%;
    margin-left: -.75rem;
    position: absolute;
    width: 1.5rem;
    z-index: 3;
    
    i {
      color: white;
      font-size: 1.25rem;
    }
    
    &.top {
      top: -2rem;
    }
    
    &.bottom {
      bottom: -2rem;
    }
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

  private get height() {
    return (this.props.box.height * this.props.transform.s) + (this.padding * 2);
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
    return this.props.box.width + (this.padding * 2);
  }

  public render() {
    const style = {
      height: this.height,
      transform: `translate(${this.left}px, ${this.top}px) rotate(${this.rotate}deg)`,
      width: this.width
    };

    const Element = (
      <div className={styles} style={style}>
        <div className='selection'>
          <Scale parent={this.props.parent} position='top-left' handleTransform={this.props.handleTransform} />
          <Scale parent={this.props.parent} position='top-right' handleTransform={this.props.handleTransform} />
          <Scale parent={this.props.parent} position='bottom-right' handleTransform={this.props.handleTransform} />
          <Scale parent={this.props.parent} position='bottom-left' handleTransform={this.props.handleTransform} />
        </div>
        <Move parent={this.props.parent} handleTransform={this.props.handleTransform} />
        <Rotate parent={this.props.parent} handleTransform={this.props.handleTransform} />
      </div>
    );

    return ReactDOM.createPortal(Element, this.element);
  }
}
