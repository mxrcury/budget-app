import { flatten } from 'flat';
import { useContext } from 'react';
import { IntlProvider } from 'react-intl';
import AppContext from '../context';
import { LOCALES } from './constants';
import messages from './messages';

const IntlAppProvider = ({children}) =>{
    const {state} = useContext(AppContext)
    return (
      <IntlProvider
        messages={flatten(messages[state.locale])}
        locale={state.locale}
        defaultLocale={LOCALES.ENGLISH}
      >
        {children}
      </IntlProvider>
    );
}
export default IntlAppProvider