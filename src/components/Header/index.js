import React from 'react'
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom'
import { ThemeSwitch } from '../ThemeSwitch';
import { LinkItem, Wrapper } from './styles';

const Header = () => {

  return (
    <Wrapper>
    <div style={{ marginLeft: "5px" }}>
      <LinkItem>
        <NavLink
          to={"/"}
          // style={({ isActive }) => ({
          //   color: isActive ? "#2f2f2f" : "black",
          //   marginLeft: "5px",
          // })}
        >
          <FormattedMessage id='menu.home' />
        </NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink
          to={"/about"}
          // style={({ isActive }) => ({
          //   color: isActive ? "#2f2f2f " : "black",
          //   marginLeft: "5px",
          // })}
        >
          <FormattedMessage id='menu.about' />
        </NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink
          to={"/settings"}
          // style={({ isActive }) => ({
          //   color: isActive ? "#2f2f2f " : "black",
          //   marginLeft: "5px",
          // })}
        >
          <FormattedMessage id='menu.settings' />
        </NavLink>
      </LinkItem>
    </div>
    <div>
      <ThemeSwitch/>
      {/* <button onClick={()=>dispatch({type:'SET_THEME',themeName:THEMES.LIGHT})} >Light Theme</button>
      <button onClick={()=>dispatch({type:'SET_THEME',themeName:THEMES.DARK})} >Dark Theme</button> */}
    </div>
    </Wrapper>
  );
}

export default Header
