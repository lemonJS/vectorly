import React from 'react';

import ReactDOM from 'react-dom';
import { Element, Transform } from '@type/project';
import { Border } from '@components/svg/selection/border';
import { Move } from '@components/svg/selection/move';
import { Rotate } from '@components/svg/selection/rotate';
import { Scale } from '@components/svg/selection/scale';
import { Options } from '@components/svg/selection/options';
import { TextEditor } from '@components/svg/selection/text-editor';
import { Base, Props as BaseProps } from '@components/svg/selection/base';

interface Props extends BaseProps {
  parent: string;
  element: Element;
  handleDelete: (id: string) => void;
  handleDeselect: VoidFunction;
  handleTransform: (transform: Partial<Transform>) => void;
}

export class Selection extends Base<Props> {
  private readonly target: HTMLElement;

  public constructor(props: Props) {
    super(props);
    this.target = document.getElementById('canvas');
  }

  public componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  public componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    switch(event.key) {
      case 'Escape':
        this.props.handleDeselect();
        break;
      case 'Delete':
        this.props.handleDelete(this.props.element.id);
        break;
      case 'ArrowUp':
        this.props.handleTransform({ y: this.props.transform.y - 1 });
        break;
      case 'ArrowRight':
        this.props.handleTransform({ x: this.props.transform.x + 1 });
        break;
      case 'ArrowDown':
        this.props.handleTransform({ y: this.props.transform.y + 1 });
        break;
      case 'ArrowLeft':
        this.props.handleTransform({ x: this.props.transform.x - 1 });
        break;
    }
  };

  public render(): JSX.Element {
    const props = {
      height: this.height,
      transform: this.props.transform,
      padding: this.padding,
      parent: this.props.parent,
      handleTransform: this.props.handleTransform,
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
