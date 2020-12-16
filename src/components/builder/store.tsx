import React from 'react';

import { Project, Element } from '@type/project';

interface Props {
  children: React.ReactNode;
}

interface State {
  menuOpen: boolean;
  menuSelected: string | null;
  project: Project | null;
  selectedElement: Element | null;
}

type SetState = (state: Partial<State>) => void;

export const initialState: State = {
  menuOpen: true,
  menuSelected: 'photos',
  project: null,
  selectedElement: null
};

export const context = React.createContext({});

export const useContext = () => React.useContext(context) as [State, SetState];

export const ContextProvider = (props: Props) => {
  const [state, setState] = React.useState(initialState);

  function partialStateUpdate(update: Partial<State>) {
    return setState({ ...state, ...update });
  }

  return (
    <context.Provider value={[state, partialStateUpdate]}>
      {props.children}
    </context.Provider>
  );
};
