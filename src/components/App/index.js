import React, { Suspense, lazy } from "react";
import { useState, useContext } from "react";
import { open } from "../../utils/indexdb";
import Home from "../Home/index";
import { Route, Routes } from "react-router";
// import About from "../About/index";
import Header from "../Header/index";
import Settings from "../Settings";
import { ThemeProvider } from "styled-components";
import AppContext from "../../providers/context";
import { getTheme } from "../../providers/themeToggle/getTheme";
import { Wrapper } from "./styles";
import { IntlAppProvider } from "../../providers/i18n";

const About = lazy(()=>import('../About'))


const App = () => {
  const [isLoading, setLoading] = useState(true);
  const { state, dispatch } = useContext(AppContext);

  React.useEffect(() => {
    open().then((res) => setLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ThemeProvider theme={getTheme(state.theme)}>
        <IntlAppProvider>
          <Wrapper>
            <Header />
            <hr />
            <Suspense fallback={<h1>Loading...</h1>} >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
            </Suspense>
          </Wrapper>
        </IntlAppProvider>
      </ThemeProvider>
    );
  }
};

export default App;
