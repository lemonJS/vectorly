import React from 'react';

import { SVG, Transform } from '../../../types/editor';
import { css } from '@emotion/css';

interface Props {
  parent: string;
  transform: Transform;
  handleTransform: (transform: Partial<Transform>) => void;
}

interface State {
  pressed: boolean;
}

const styles = css`
  align-items: center;
  background: var(--primary-accent-color);
  border-radius: 50%;
  bottom: -2rem;
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
`;

export class Rotate extends React.Component<Props, State> {
  private readonly parent: SVG;

  public constructor(props) {
    super(props);

    this.state = { pressed: false };
    this.parent = document.getElementById(this.props.parent) as SVG;
  }

  public componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  public componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);
  }

  private handleMouseMove = (event: MouseEvent) => {
    if (this.state.pressed) {
      const bound = this.parent.getBoundingClientRect();
      const x = bound.left + bound.width / 2;
      const y = bound.top + bound.height / 2;

      const radians = Math.atan2(event.clientY - y, event.clientX - x);
      // Because we're dragging, it needs to be inverted to feel natural
      const inverted = radians > 0 ? -Math.abs(radians) : Math.abs(radians);
      const degrees = (inverted * (180 / Math.PI) * -1) - 90;

      // TODO snap to within x of 0, 45, 90 etc
      this.props.handleTransform({ r: Math.ceil(degrees) });
    }
  };

  private handleMouseUp = () => {
    this.setState({ pressed: false });
  };

  private handleMouseDown = () => {
    this.setState({ pressed: true });
  };

  private get scale() {
    const x = 1 / this.props.transform.s[0];
    const y = 1 / this.props.transform.s[1];

    return `scale(${x}, ${y})`;
  }

  public render(): JSX.Element {
    return (
      <div style={{ transform: this.scale }} className={styles} onMouseDown={this.handleMouseDown}>
        <i className='ri-refresh-line' />
      </div>
    );
  }
}
