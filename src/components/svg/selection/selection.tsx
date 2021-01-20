import React from 'react';

import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { State } from '@store/store';
import { Element, Transform, deleteElement, updateElement } from '@store/project';
import { Position, setSelectionId } from '@store/editor';
import { Border } from '@components/svg/selection/border';
import { Move } from '@components/svg/selection/move';
import { Rotate } from '@components/svg/selection/rotate';
import { Scale } from '@components/svg/selection/scale';
import { Options } from '@components/svg/selection/options';
import { Base, Props as BaseProps } from '@components/svg/selection/base';

interface Props extends BaseProps {
  parent: string;
  element: Element;
  position: Position;
  clearSelection: VoidFunction;
  deleteElement: (id: string) => void;
  updateElement: (id: string, update: Partial<Element>) => void;
}

export class SelectionWrapper extends Base<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  public componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  private handleTransform = (transform: Partial<Transform>) => {
    const data = { ...this.props.element.transform, ...transform };
    this.props.updateElement(this.props.element.id, { transform: data });
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
    switch(event.key) {
      case 'Escape':
        this.props.clearSelection();
        break;
      case 'Delete':
        this.props.deleteElement(this.props.element.id);
        break;
      case 'ArrowUp':
        this.handleTransform({ y: this.props.transform.y - 1 });
        break;
      case 'ArrowRight':
        this.handleTransform({ x: this.props.transform.x + 1 });
        break;
      case 'ArrowDown':
        this.handleTransform({ y: this.props.transform.y + 1 });
        break;
      case 'ArrowLeft':
        this.handleTransform({ x: this.props.transform.x - 1 });
        break;
    }
  };

  public render(): JSX.Element {
    const props = {
      height: this.height,
      transform: this.props.transform,
      padding: this.padding,
      position: this.props.position,
      parent: this.props.parent,
      handleTransform: this.handleTransform,
      element: this.props.element,
      width: this.width
    };

    const Element = (
      <g id='selection' transform={this.transform}>
        <Border {...props} />
        <Move {...props} />
        <Rotate {...props} />
        <Scale location='top-left' {...props} />
        <Scale location='top-center' {...props} />
        <Scale location='top-right' {...props} />
        <Scale location='center-right' {...props} />
        <Scale location='bottom-right' {...props} />
        <Scale location='bottom-center' {...props} />
        <Scale location='bottom-left' {...props} />
        <Scale location='center-left' {...props} />
        <Options {...props} />
      </g>
    );

    return ReactDOM.createPortal(Element, this.target);
  }
}

const mapStateToProps = (state: State) => ({
  position: state.editor.position
});

const mapDispatchToProps = (dispatch: any) => ({
  clearSelection: () => dispatch(setSelectionId(null)),
  deleteElement: (id: string) => dispatch(deleteElement(id)),
  updateElement: (id: string, update: Partial<Element>) => dispatch(updateElement(id, update))
});

export const Selection = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionWrapper);
