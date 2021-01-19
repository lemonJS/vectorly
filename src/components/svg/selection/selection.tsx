import React from 'react';

import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Element, Transform } from '@type/project';
import { Border } from '@components/svg/selection/border';
import { Move } from '@components/svg/selection/move';
import { Rotate } from '@components/svg/selection/rotate';
import { Scale } from '@components/svg/selection/scale';
import { Options } from '@components/svg/selection/options';
import { TextEditor } from '@components/svg/selection/text-editor';
import { Base, Props as BaseProps } from '@components/svg/selection/base';
import { setSelectionId } from '@lib/editor/actions';
import { deleteElement, updateElement } from '@lib/projects/actions';

interface Props extends BaseProps {
  parent: string;
  element: Element;
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
        <TextEditor {...props} />
        <Scale position='top-left' {...props} />
        <Scale position='top-center' {...props} />
        <Scale position='top-right' {...props} />
        <Scale position='center-right' {...props} />
        <Scale position='bottom-right' {...props} />
        <Scale position='bottom-center' {...props} />
        <Scale position='bottom-left' {...props} />
        <Scale position='center-left' {...props} />
        <Options {...props} />
      </g>
    );

    return ReactDOM.createPortal(Element, this.target);
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  clearSelection: () => dispatch(setSelectionId(null)),
  deleteElement: (id: string) => dispatch(deleteElement(id)),
  updateElement: (id: string, update: Partial<Element>) => dispatch(updateElement(id, update))
});

export const Selection = connect(
  null,
  mapDispatchToProps
)(SelectionWrapper);
