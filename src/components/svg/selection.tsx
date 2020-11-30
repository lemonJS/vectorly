import React from 'react';
import ReactDOM from 'react-dom';

import type { Transform } from '../../types/editor';
import { css } from '@emotion/css';
import { Move } from './move';
import { Rotate } from './rotate';

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
  
  .scale {
    background: var(--primary-accent-color);
    border-radius: 50%;
    height: 1rem;
    position: absolute;
    width: 1rem;
    
    &.top-left {
      left: -.5rem;
      top: -.5rem;
    }
    
    &.top-right {
      right: -.5rem;
      top: -.5rem;
    }
    
    &.bottom-right {
      bottom: -.5rem;
      right: -.5rem;
    }
    
    &.bottom-left {
      bottom: -.5rem;
      left: -.5rem;
    }
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
    return this.props.box.height + (this.padding * 2);
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
          <div className='scale top-left' />
          <div className='scale top-right' />
          <div className='scale bottom-right' />
          <div className='scale bottom-left' />
        </div>
        <Move padding={this.padding} box={this.props.box} handleTransform={this.props.handleTransform}  />
        <Rotate parent={this.props.parent} handleTransform={this.props.handleTransform} />
      </div>
    );

    return ReactDOM.createPortal(Element, this.element);
  }
}