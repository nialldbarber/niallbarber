import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

const colourChange = keyframes`
    0% {
		background-color: #6cc;
	}
    50% {
		background-color: #fff;
	}
    100% {
		background-color: #6cc;
	}
`;

const Logo = styled.div`
	position: fixed;
	top: 1rem;
	left: 3rem;
	padding: 1rem 2rem;
	@media (max-width: 767px) {
		padding: 1rem 2rem 1rem 0;
	}
	a {
		font-size: 2.3rem;
		text-transform: uppercase;
		border-radius: 3px;
		padding: 0.7rem;
		color: #1e272d;
		animation: ${colourChange} 10s infinite;
		box-shadow: ${(props) => props.theme.bs};
	}
`;

const Header = () => {
	return (
		<div>
			<div className="bar">
				<Logo>
					<Link href="/">
						<a>NB</a>
					</Link>
				</Logo>
				<Nav />
			</div>
		</div>
	);
};

export default Header;
