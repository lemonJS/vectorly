import React from 'react';

import { clamp } from 'lodash';
import { connect } from 'react-redux';
import { State } from '@type/redux';
import { setZoomScale, setSelectionId } from '@lib/editor/actions';

interface Props {
  children: React.ReactNode;
  zoom: number;
  handleZoom: (zoom: number) => void;
  handleElementDismiss: VoidFunction;
}

export class GlobalListeners extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    document.addEventListener('wheel', this.handleWheel, { passive: false });
    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('mousedown', this.handleMouseDown);
  }

  public componentWillUnmount() {
    document.removeEventListener('wheel', this.handleWheel, false);
    document.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('keydown', this.handleKeyDown, false);
    document.removeEventListener('mousedown', this.handleMouseDown, false);
  }

  private handleWheel = (event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();

      const scale = clamp(this.props.zoom + event.deltaY * -0.5, 10, 200);
      this.props.handleZoom(scale);
    }
  };

  private handleKeyUp = (_event: KeyboardEvent) => {
    this.setState({ command: false });
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    const keys = ['Meta', 'Left WinKey'];
    this.setState({ command: keys.includes(event.key) });
  };

  private handleMouseDown = (event: MouseEvent) => {
    const element = event.target as Element;

    if (element.id === window.canvas.id) {
      this.props.handleElementDismiss();
    }
  };

  public render(): JSX.Element {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => ({
  zoom: state.editor.zoom
});

const mapDispatchToProps = (dispatch: any) => ({
  handleZoom: (zoom: number) => dispatch(setZoomScale(zoom)),
  handleElementDismiss: () => dispatch(setSelectionId(null))
});

export const Listeners = connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalListeners)
