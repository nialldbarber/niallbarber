import React from 'react';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';
import { title } from '../static/utils';
import logo from '../static/nb-logo.svg';
import { Logo, LogoHeader } from '../styles/HeaderStyles';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <div className="bar">
    <Logo>
      <Link href="/">
        <div className="logoHolder">
          <LogoHeader src={logo} alt={title} />
        </div>
      </Link>
    </Logo>
    <Nav />
  </div>
);

export default Header;
