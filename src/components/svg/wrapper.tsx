import React from 'react';

import { css } from '@emotion/css';
import { connect } from 'react-redux';
import { State as ReduxState } from '@store/store';
import { Element, createElement } from '@store/project';
import { Position, setPosition, setSelectionId } from '@store/editor';
import { getElementFromDataTransfer, getDropTransform, getBoundingClientRect } from '@lib/helpers';
import { canvas, canvasContainer } from '@lib/constants';

interface Props {
  children: React.ReactNode;
  control: string;
  position: Position;
  clearSelection: VoidFunction;
  handlePosition: (position: Partial<Position>) => void;
  createElement: (element: Partial<Element>) => void;
}

interface State {
  pressed: boolean;
  offset: [number, number];
  spacebar: boolean;
}

const styles = css`
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
`;

export class SvgWrapper extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      pressed: false,
      offset: [0, 0],
      spacebar: false
    };
  }

  public componentDidMount(): void {
    document.addEventListener('wheel', this.handleWheel, { passive: false });
    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('keydown', this.handleKeyDown);
    this.centerAlignArtBoard();
  }

  public componentWillUnmount(): void {
    document.removeEventListener('wheel', this.handleWheel);
    document.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  private get cursor(): string {
    const control = this.state.spacebar ? 'move' : this.props.control;

    switch(control) {
      case 'move':
        return 'grab';
      case 'draw':
        return 'crosshair';
      case 'text':
        return 'text';
      default:
        return 'default';
    }
  }

  private get move(): boolean {
    return this.state.pressed && (this.props.control === 'move' || this.state.spacebar);
  }

  private centerAlignArtBoard = (): void => {
    // TODO: Support scaling up/down to make it a snug fit
    const container = document.getElementById(canvasContainer);
    const bound = getBoundingClientRect(container);

    this.props.handlePosition({
      x: (window.innerWidth - bound.width) / 2,
      y: (window.innerHeight - bound.height) / 2
    });
  };

  private handleKeyUp = (): void => {
    this.setState({ spacebar: false });
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (!this.state.spacebar) {
      this.setState({ spacebar: event.code === 'Space' });
    }
  };

  private handleMouseUp = (event: React.MouseEvent<HTMLElement>): void => {
    const element = event.target as HTMLElement;

    if (this.state.pressed) {
      this.setState({ offset: [0, 0], pressed: false });
    }

    if (element.id === canvas) {
      this.props.clearSelection();
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
    if (this.move) {
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

  private handleWheel = (event: WheelEvent): void => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();

      let scale = this.props.position.s;

      const x = (event.clientX - this.props.position.x) / scale;
      const y = (event.clientY - this.props.position.y) / scale;

      const delta = -event.deltaY;
      (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);

      const position = {
        s: scale,
        x: event.clientX - x * scale,
        y: event.clientY - y * scale
      };

      this.props.handlePosition(position);
    }
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
        cursor: this.cursor
      }
    };

    return (
      <div {...props}>
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
  clearSelection: () => dispatch(setSelectionId(null)),
  createElement: (element: Partial<Element>) => dispatch(createElement(element)),
  handlePosition: (position: Partial<Position>) => dispatch(setPosition(position))
});

export const Wrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(SvgWrapper);
