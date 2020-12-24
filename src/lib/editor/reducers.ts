import { Element } from '@type/project';

export type EditorState = {
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
  saving: false,
  selectedElement: null,
  undoStack: [],
  undoStackIndex: 0,
  zoom: 100
};

export function editor(state = initialState, action: EditorAction) {
  switch (action.type) {
    case 'EDITOR':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
