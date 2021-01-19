import React from 'react';

import ReactDOM from 'react-dom';
import { Border } from '@components/svg/selection/border';
import { Base, Props } from '@components/svg/selection/base';

export class Outline extends Base<Props> {
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
