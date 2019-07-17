import React from 'react';
import Link from './Link';
import { pages } from '../static/utils';
import { ColouredLink } from './styles/ColouredLink';
import { NavBar } from './styles/HeaderStyles';

export default function Nav() {
  return (
    <NavBar>
      <div className="nav">
        {pages.map(page => (
          <Link
            key={page.title}
            activeClassName="active"
            href={page.title === 'Home' ? '/' : `/${page.title.toLowerCase()}`}
          >
            <ColouredLink className={`${page.title.toLowerCase()}__nav`}>
              {page.title}
            </ColouredLink>
          </Link>
        ))}
      </div>
    </NavBar>
  );
}
