import React, { useContext } from "react";
import CurrencyContext, { CHANGE_CURRENCY, SET_LANGUAGE } from "../../providers/context";
import { AdvancedSettings, Title, CurrencyTitle } from "./styles";
import { useBooleanToggle } from './../../hooks';
import { LOCALES } from "../../providers/i18n";
import { FormattedMessage } from 'react-intl';
import { saveToStorage } from "../../utils/sessionStorage";
import { withProfiler } from "../../HOCs";


const Settings = () => {
  const { state, dispatch } = useContext(CurrencyContext);
  const { status, toggleStatus } = useBooleanToggle()

  const onCurrencyChange = (e) => {
    const { value } = e.target;

    dispatch({ type: CHANGE_CURRENCY , currency: value });
  };
  const onLanguageChange = (e) => {
    const { value } = e.target;
    saveToStorage('locale',value)

    dispatch({ type: SET_LANGUAGE , locale: value });
  };

  return (
    <>
      <Title><FormattedMessage id='settingsTitle' /></Title>
      <br />
      <form>
        <CurrencyTitle><FormattedMessage id="settingsCurrency" />:</CurrencyTitle>
        <select onChange={onCurrencyChange} name="currency" value={state.currency}>
          <option value="UAH">Гривня</option>
          <option value="USD">Долар США</option>
          <option value="EUR">Євро</option>
        </select>
        <CurrencyTitle><FormattedMessage id="settingsLanguage" />:</CurrencyTitle>
        <select onChange={onLanguageChange} name="language" value={state.locale}>
          <option value={LOCALES.UKRAINIAN}>Українська</option>
          <option value={LOCALES.ENGLISH}>Англійська</option>
        </select>
      </form>
      <AdvancedSettings>
        <button onClick={toggleStatus} >Показати розширені налаштування</button>
        {status ? (
          <div>
            <h3>Розширенні налаштування</h3>
            <p>....</p>
          </div>
        ) : null}
      </AdvancedSettings>
    </>
  );
};

export default withProfiler(Settings,'Settings')
