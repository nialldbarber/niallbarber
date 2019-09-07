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
      <ColouredLink
        className="blog__nav"
        href="https://blog.nialldbarber.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </ColouredLink>
    </div>
  </NavBar>
);

export default Nav;
