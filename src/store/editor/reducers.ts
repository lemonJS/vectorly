import { Element } from '@store/project';

export type EditorState = {
  control: string;
  position: Position;
  saving: boolean;
  selectedElement: Element | null;
  undoStack: string[];
  undoStackIndex: number,
};

export interface EditorAction {
  type: string;
  payload: Partial<EditorState>;
}

export interface Position {
  s: number;
  x: number;
  y: number;
}

export const initialState: EditorState = {
  control: 'move',
  position: {
    s: 1,
    x: 0,
    y: 0
  },
  saving: false,
  selectedElement: null,
  undoStack: [],
  undoStackIndex: 0
};

export const editor = (state = initialState, action: EditorAction): EditorState => {
  switch (action.type) {
    case 'EDITOR':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
