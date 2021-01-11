import React from 'react';

import { css } from '@emotion/css';
import { connect } from 'react-redux';
import { State as ReduxState } from '@type/redux';
import { Element } from '@type/project';
import { getElementFromDataTransfer, getDropTransform } from '@lib/editor/helpers';
import { createElement } from '@lib/projects/actions';
import { Presets } from '@components/svg/presets/presets';

interface Props {
  children: React.ReactNode;
  size: [number, number];
  zoom: number;
  createElement: (element: Partial<Element>) => void;
}

interface State {
  pressed: boolean;
  offset: [number, number];
  translate: [number, number];
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
      offset: [0, 0],
      translate: [0, 0]
    };

    this.ref = React.createRef();
  }

  private get height() {
    return this.props.size[1];
  }

  private get scale() {
    return this.props.zoom / 100;
  }

  private get translate() {
    return `${this.state.translate[0]}px, ${this.state.translate[1]}px`;
  }

  private get width() {
    return this.props.size[0];
  }

  private handleMouseUp = () => {
    if (this.state.pressed) {
      this.setState({ offset: [0, 0], pressed: false });
    }
  };

  private handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;

    const offset = [
      event.clientX - this.state.translate[0],
      event.clientY - this.state.translate[1]
    ] as [number, number];

    if (!element.closest('#selection')) {
      this.setState({ offset, pressed: true });
    }
  };

  private handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (this.state.pressed) {
      const translate = [
        event.clientX - this.state.offset[0],
        event.clientY - this.state.offset[1]
      ] as [number, number];

      this.setState({ translate });
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
        width: this.width
      }
    };

    return (
      <div ref={this.ref} {...props}>
        <Presets />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  size: state.project?.size || [0, 0],
  zoom: state.editor?.zoom || 1
});

const mapDispatchToProps = (dispatch: any) => ({
  createElement: (element: Partial<Element>) => dispatch(createElement(element))
});

export const Wrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(SvgWrapper);
