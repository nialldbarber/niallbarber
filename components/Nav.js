import React, { Component } from 'react';
import styled from 'styled-components';
import Link from './Link';
import HamburgerMenu from 'react-hamburger-menu';
import ColouredLink from './styles/ColouredLink';

const NavBar = styled.div`
	position: fixed;
	top: 2.5rem;
	right: 3rem;
	z-index: 999;
	@media (max-width: 509px) {
		right: 2rem;
	}
`;

const HamburgerMenuContainer = styled.div`
	cursor: pointer;
	position: absolute;
	top: 0.7rem;
	right: 3rem;
	@media (max-width: 767px) {
		right: 0;
	}
`;

export default class Nav extends Component {
	render() {
		return (
			<NavBar>
				<div className="nav">
					<Link activeClassName="active" href="/">
						<ColouredLink className="home__nav">Home</ColouredLink>
					</Link>
					<Link activeClassName="active" href="/about">
						<ColouredLink className="about__nav">About</ColouredLink>
					</Link>
					<Link activeClassName="active" href="/projects">
						<ColouredLink className="projects__nav">Projects</ColouredLink>
					</Link>
					<Link activeClassName="active" href="/contact">
						<ColouredLink className="contact__nav">Contact</ColouredLink>
					</Link>
				</div>
			</NavBar>
		);
	}
}
