import React from 'react';
import Link from './Link';
import { pages } from '../static/utils';
import { ColouredLink } from '../styles/ColouredLink';
import { NavBar } from '../styles/HeaderStyles';

const Nav = () => (
  <NavBar>
    <div className="nav">
      {pages.map(({ title }) => (
        <Link
          key={title}
          activeClassName="active"
          href={title === 'Home' ? '/' : `/${title.toLowerCase()}`}
        >
          <ColouredLink className={`${title.toLowerCase()}__nav`}>
            {title}
          </ColouredLink>
        </Link>
      ))}
    </div>
  </NavBar>
);

export default Nav;
