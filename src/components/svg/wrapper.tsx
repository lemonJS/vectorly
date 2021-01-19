import React from 'react';

import { css } from '@emotion/css';
import { connect } from 'react-redux';
import { State as ReduxState } from '@type/redux';
import { Element } from '@type/project';
import { Position } from '@lib/editor/reducers';
import { getElementFromDataTransfer, getDropTransform } from '@lib/editor/helpers';
import { createElement } from '@lib/projects/actions';
import { setPosition } from '@lib/editor/actions';

interface Props {
  children: React.ReactNode;
  control: string;
  position: Position;
  handlePosition: (position: Partial<Position>) => void;
  createElement: (element: Partial<Element>) => void;
}

interface State {
  pressed: boolean;
  offset: [number, number];
}

const styles = css`
  display: flex;
  height: 100%;
  position: relative;
  transform-origin: 0 0;
  width: 100%;
`;

export class SvgWrapper extends React.Component<Props, State> {
  private readonly ref: React.RefObject<HTMLDivElement>;

  public constructor(props: Props) {
    super(props);

    this.state = {
      pressed: false,
      offset: [0, 0]
    };

    this.ref = React.createRef();
  }

  private get active(): boolean {
    return this.props.control === 'move';
  }

  private get scale(): number {
    return this.props.position.s;
  }

  private get translate() {
    return `${this.props.position.x}px, ${this.props.position.y}px`;
  }

  private handleMouseUp = (): void => {
    if (this.state.pressed) {
      this.setState({ offset: [0, 0], pressed: false });
    }
  };

  private handleMouseDown = (event: React.MouseEvent<HTMLDivElement>): void => {
    const element = event.target as HTMLDivElement;

    const offset = [
      event.clientX - this.props.position.x,
      event.clientY - this.props.position.y
    ] as [number, number];

    if (!element.closest('#selection')) {
      this.setState({ offset, pressed: true });
    }
  };

  private handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (this.state.pressed && this.active) {
      this.props.handlePosition({
        x: event.clientX - this.state.offset[0],
        y: event.clientY - this.state.offset[1]
      });
    }
  };

  private handleMouseLeave = (): void => {
    this.setState({ offset: [0, 0], pressed: false });
  };

  private handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();

    const data = event.dataTransfer.getData('element');
    const payload = getElementFromDataTransfer(data);

    if (payload) {
      const transform = getDropTransform(event);
      const element = { ...payload, transform };
      this.props.createElement(element);
    }
  };

  private handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  public render(): JSX.Element {
    const props = {
      className: styles,
      onDrop: this.handleDrop,
      onDragOver: this.handleDragOver,
      onMouseUp: this.handleMouseUp,
      onMouseMove: this.handleMouseMove,
      onMouseDown: this.handleMouseDown,
      onMouseLeave: this.handleMouseLeave,
      style: {
        cursor: this.active ? 'grab' : undefined,
        transform: `scale(${this.scale}) translate(${this.translate})`
      }
    };

    return (
      <div ref={this.ref} {...props}>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  control: state.editor.control,
  position: state.editor.position
});

const mapDispatchToProps = (dispatch: any) => ({
  createElement: (element: Partial<Element>) => dispatch(createElement(element)),
  handlePosition: (position: Partial<Position>) => dispatch(setPosition(position))
});

export const Wrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(SvgWrapper);
