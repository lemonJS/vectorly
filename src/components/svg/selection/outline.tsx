import React from 'react';

import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Border } from '@components/svg/selection/border';
import { Base, Props } from '@components/svg/selection/base';
import { State } from '@store/store';


export class OutlineWrapper extends Base<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const props = {
      height: this.height,
      width: this.width
    };

    const Element = (
      <g id='outline' transform={this.transform}>
        <Border {...props} />
      </g>
    );

    return ReactDOM.createPortal(Element, this.target);
  }
}

const mapStateToProps = (state: State) => ({
  position: state.editor.position
});
export const Outline = connect(
  mapStateToProps,
  null
)(OutlineWrapper);
