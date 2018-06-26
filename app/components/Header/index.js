import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderBrand from './HeaderBrand';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <HeaderBrand href="/">
            <FormattedMessage {...messages.siteTitle} />
          </HeaderBrand>
          <HeaderLink to="/" activeClassName="selected">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
