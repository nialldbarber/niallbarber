import Link from 'next/link';
import styled from 'styled-components';
import { media } from './utils/Breakpoints';
import { title } from '../config';
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
	padding: 0 2rem;
	z-index: 999;
	${media.lessThan('tablet')`
		padding: 1rem 2rem 1rem 0;
	`} ${media.lessThan('phablet')`
		margin-left: -1rem;
	`};
`;

const LogoHeader = styled.img`
	width: 70px;
	opacity: 1;
	transition: ${props => props.theme.transition};
	&:hover {
		opacity: 0.8;
	}
	${media.lessThan('tablet')`
		width: 60px;
	`};
`;

const Header = () => {
	return (
		<div>
			<div className="bar">
				<Logo>
					<Link href="/">
						<a>
							<div className="logoHolder">
								<LogoHeader src="../static/nb-logo.svg" alt={title} />
							</div>
						</a>
					</Link>
				</Logo>
				<Nav />
			</div>
		</div>
	);
};

export default Header;
