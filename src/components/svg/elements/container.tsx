import React from 'react';

import { connect } from 'react-redux';
import { Element } from '@store/project';
import { Selection } from '@components/svg/selection/selection';
import { Outline } from '@components/svg/selection/outline';
import { getBox } from '@lib/helpers';
import { setSelectionId } from '@store/editor';
import { State as StoreState } from '@store/store';

interface Props {
  id: string;
  element: Element;
  children: React.ReactNode;
  control: string;
  selected: boolean;
  setSelectionId: (id: string | null) => void;
}

interface State {
  hover: boolean;
}

class ContainerWrapper extends React.Component<Props, State> {
  private readonly ref: React.MutableRefObject<SVGGElement>;

  public constructor(props: Props) {
    super(props);

    this.state = { hover: false };
    this.ref = React.createRef();
  }

  private get transform(): string {
    const { x, y, r, s } = this.props.element.transform;
    const rx = (this.box.width * s[0]) / 2;
    const ry = (this.box.height * s[1]) / 2;
    return `translate(${x} ${y}) rotate(${r} ${rx} ${ry}) scale(${s[0]} ${s[1]})`;
  }

  private get isSelectControl(): boolean {
    return this.props.control === 'select';
  }

  private get isInteractable() {
    return !this.props.selected && this.isSelectControl && !this.props.element.readonly;
  }

  private get box(): DOMRect {
    return getBox(this.ref.current);
  }

  private handleClick = (): void => {
    if (this.isInteractable) {
      this.props.setSelectionId(this.props.element.id);
    }
  };

  private handleMouseEnter = (): void => {
    this.setState({ hover: true });
  };

  private handleMouseLeave = (): void => {
    this.setState({ hover: false });
  };

  public render(): JSX.Element {
    const props = {
      id: this.props.id,
      className: 'container',
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      ref: this.ref,
      transform: this.transform
    };

    return (
      <g>
        <g {...props}>
          {this.props.children}

          {this.props.selected && (
            <Selection
              box={this.box}
              transform={this.props.element.transform}
              parent={this.props.id}
              element={this.props.element}
            />
          )}

          {this.isInteractable && this.state.hover && (
            <Outline
              box={this.box}
              transform={this.props.element.transform}
            />
          )}
        </g>
      </g>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  control: state.editor.control
});

const mapDispatchToProps = (dispatch: any) => ({
  setSelectionId: (id: string) => dispatch(setSelectionId(id))
});

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWrapper);
