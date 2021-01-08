import { Element } from '@type/project';

export type EditorState = {
  drawing: boolean;
  menuOpen: boolean;
  menuSelected: string;
  saving: boolean;
  selectedElement: Element | null;
  undoStack: string[];
  undoStackIndex: number,
  zoom: number;
};

export interface EditorAction {
  type: string;
  payload: Partial<EditorState>;
}

export const initialState: EditorState = {
  drawing: false,
  menuOpen: true,
  menuSelected: 'photos',
  saving: false,
  selectedElement: null,
  undoStack: [],
  undoStackIndex: 0,
  zoom: 100
};

export const editor = (state = initialState, action: EditorAction) => {
  switch (action.type) {
    case 'EDITOR':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
