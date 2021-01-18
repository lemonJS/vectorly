import { Element } from '@type/project';

export type EditorState = {
  drawing: boolean;
  menuOpen: boolean;
  menuSelected: string | null;
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
  drawing: false,
  menuOpen: false,
  menuSelected: null,
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
