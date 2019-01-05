import styled from 'styled-components';
import Typed from 'react-typed';
import { title, desc } from '../config';
import PageHeader from '../components/styles/PageHeader';
import SubHeader from '../components/styles/Subheader';

const HomepageSplash = styled.div`text-align: center;`;

const Logo = styled.img`
	width: 100px;
	display: flex;
	align-self: center;
	margin: 0 auto;
	padding-bottom: 6rem;
`;

const TypedWrapper = styled.div`
	text-align: center;
	span {
		font-size: 3rem;
		background: ${props => props.theme.green};
		color: ${props => props.theme.black};
		padding: 1rem 0.5rem;
		box-shadow: ${props => props.theme.bs};
		@media (max-width: 767px) {
			font-size: 2rem;
		}
	}
`;

class Index extends React.Component {
	render() {
		return (
			<HomepageSplash>
				<PageHeader className="index">{title}</PageHeader>
				<SubHeader>{desc}</SubHeader>
				<Logo src="../static/nb-logo.svg" alt={title} />
				<TypedWrapper>
					<Typed
						strings={[
							'HTML / CSS',
							'JavaScript',
							'React',
							'Vue',
							'PHP',
							'WordPress',
							'Shopify / Liquid',
							'Photoshop',
							'Illustrator'
						]}
						typeSpeed={40}
						backSpeed={50}
						loop
					/>
				</TypedWrapper>
			</HomepageSplash>
		);
	}
}

export default Index;
