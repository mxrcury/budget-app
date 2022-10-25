import { createContext } from "react";
import defaultContext from "./defaultContext";
import { useReducer } from "react";

const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
const SET_THEME = 'SET_THEME'
const SET_LANGUAGE = 'SET_LANGUAGE'


const AppContext = createContext(defaultContext);

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return { ...state, currency: action.currency};
    case SET_THEME:
      return { ...state,theme:action.themeName}
    case SET_LANGUAGE:
      return { ...state,locale:action.locale}
      case 'RESET':
      return defaultContext
    default:{
      throw new Error('No action was dispatched')
    }
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export {
  CHANGE_CURRENCY,
  SET_THEME,
  SET_LANGUAGE
}

export default AppContext;