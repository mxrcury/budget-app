import { useContext } from "react";
import AppContext, { SET_THEME } from "../../providers/context";
import { THEMES } from "./../../providers/themeToggle/themeList";
import { useState } from "react";
import { getItemFromStorage, saveToStorage } from './../../utils/sessionStorage';

export const ThemeSwitch = () => {
  const { dispatch } = useContext(AppContext);
  const [checkbox, setCheckbox] = useState(()=>getItemFromStorage('checked') || false);

  const checkboxToggle = (e) => {
    if (e.target.checked) {
      dispatch({ type: SET_THEME, themeName: THEMES.DARK });
      saveToStorage('themeName',THEMES.DARK)
      saveToStorage('checked',true)
      setCheckbox(getItemFromStorage('checked'));
    }
    if (!e.target.checked) {
      dispatch({ type: SET_THEME, themeName: THEMES.LIGHT });
      saveToStorage('themeName',THEMES.LIGHT)
      saveToStorage('checked',false)
      setCheckbox(getItemFromStorage('checked'));
    }
  };
  return <input type='checkbox' checked={checkbox} onChange={checkboxToggle}/>

};
