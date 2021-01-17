import React from 'react';

import { css } from '@emotion/css';
import { connect } from 'react-redux';
import { State as ReduxState } from '@type/redux';
import { Element, Preset } from '@type/project';
import { Position } from '@lib/editor/reducers';
import { getElementFromDataTransfer, getDropTransform } from '@lib/editor/helpers';
import { createElement } from '@lib/projects/actions';
import { Presets } from '@components/svg/presets/presets';
import { setPosition } from '@lib/editor/actions';

interface Props {
  children: React.ReactNode;
  drawing: boolean;
  position: Position;
  preset: Preset;
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

  private get height() {
    return this.props.preset.height;
  }

  private get scale() {
    return this.props.position.s;
  }

  private get translate() {
    return `${this.props.position.x}px, ${this.props.position.y}px`;
  }

  private get width() {
    return this.props.preset.width;
  }

  private handleMouseUp = () => {
    if (this.state.pressed) {
      this.setState({ offset: [0, 0], pressed: false });
    }
  };

  private handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;

    const offset = [
      event.clientX - this.props.position.x,
      event.clientY - this.props.position.y
    ] as [number, number];

    if (!element.closest('#selection')) {
      this.setState({ offset, pressed: true });
    }
  };

  private handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (this.state.pressed && !this.props.drawing) {
      this.props.handlePosition({
        x: event.clientX - this.state.offset[0],
        y: event.clientY - this.state.offset[1]
      });
    }
  };

  private handleMouseLeave = () => {
    this.setState({ offset: [0, 0], pressed: false });
  };

  private handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const data = event.dataTransfer.getData('element');
    const payload = getElementFromDataTransfer(data);

    if (payload) {
      const transform = getDropTransform(event);
      const element = { ...payload, transform };
      this.props.createElement(element);
    }
  };

  private handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  public render() {
    const props = {
      className: styles,
      onDrop: this.handleDrop,
      onDragOver: this.handleDragOver,
      onMouseUp: this.handleMouseUp,
      onMouseMove: this.handleMouseMove,
      onMouseDown: this.handleMouseDown,
      onMouseLeave: this.handleMouseLeave,
      style: {
        cursor: this.state.pressed ? 'grab' : 'default',
        height: this.height,
        transform: `scale(${this.scale}) translate(${this.translate})`,
        transformOrigin: '0px 0px',
        width: this.width
      }
    };

    return (
      <div ref={this.ref} {...props}>
        <Presets scale={this.scale} />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  drawing: state.editor.drawing,
  position: state.editor.position,
  preset: state.project.preset
});

const mapDispatchToProps = (dispatch: any) => ({
  createElement: (element: Partial<Element>) => dispatch(createElement(element)),
  handlePosition: (position: Partial<Position>) => dispatch(setPosition(position))
});

export const Wrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(SvgWrapper);
