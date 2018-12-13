import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.div`
	position: fixed;
	top: 2rem;
	right: 2rem;
`;

const ColouredLink = styled.a`
	position: relative;
	padding: 1rem 2rem;
	margin: 0 1rem;
	text-decoration: none;
	z-index: 1;
	overflow: hidden;
	cursor: pointer;
	transition: .25s cubic-bezier(.895, .03, .685, .22);
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		z-index: -1;
		transition: .4s cubic-bezier(.77, 0, .175, 1);
		transform: translateX(-101%);
	}
	&:hover {
		&:before {
			left: 100%;
			width: 100%;
		}
		&.home__nav,
		&.about__nav,
		&.projects__nav,
		&.contact__nav {
			color: ${(props) => props.theme.black};
		}
	}
	&.home__nav {
		&:before {
			background: ${(props) => props.theme.green};
		}
	}
	&.about__nav {
		&:before {
			background: ${(props) => props.theme.orange};
		}
	}
	&.projects__nav {
		&:before {
			background: ${(props) => props.theme.pink};
		}
	}
	&.contact__nav {
		&:before {
			background: ${(props) => props.theme.green};
		}
	}
`;

const Nav = () => {
	return (
		<NavBar>
			<Link href="/">
				<ColouredLink className="home__nav">Home</ColouredLink>
			</Link>
			<Link href="/about">
				<ColouredLink className="about__nav">About</ColouredLink>
			</Link>
			<Link href="/projects">
				<ColouredLink className="projects__nav">Projects</ColouredLink>
			</Link>
			<Link href="/contact">
				<ColouredLink className="contact__nav">Contact</ColouredLink>
			</Link>
		</NavBar>
	);
};

export default Nav;
