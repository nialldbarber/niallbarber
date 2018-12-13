import Link from 'next/link';
import styled from 'styled-components';
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

const Logo = styled.div`
	position: fixed;
	top: 1rem;
	left: 3rem;
	padding: 1rem 2rem;
	a {
		font-size: 2.3rem;
		text-transform: uppercase;
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
