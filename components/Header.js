import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.div`
	position: fixed;
	top: 1rem;
	left: 2rem;
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
						<a>Niall Barber</a>
					</Link>
				</Logo>
				<Nav />
			</div>
		</div>
	);
};

export default Header;
