import { createContext, useReducer } from 'react'

const initialState = { dex: "uni" };
type AppState = typeof initialState

type ACTIONTYPE =
  | { type: "SET_DEX_UNI"; payload: string }
  | { type: "SET_DEX_CAKE"; payload: string }
  | { type: "SET_DEX_MDEX"; payload: string }

function reducer(state: AppState, action: ACTIONTYPE) {
  switch (action.type) {
    case "SET_DEX_UNI":
      return { dex: 'uni' };
    case "SET_DEX_CAKE":
      return { dex: 'cake' };
    case "SET_DEX_MDEX":
        return { dex: 'mdex'};  
    default:
      return state
  }
}



const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<ACTIONTYPE>;
}>({state: initialState, dispatch: () => {} })

export function AppProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext }