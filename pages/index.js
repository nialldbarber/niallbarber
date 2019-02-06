import styled from 'styled-components';
import Typed from 'react-typed';
import { Spring } from 'react-spring';
import { title, desc } from '../config';
import PageHeader from '../components/styles/PageHeader';
import SubHeader from '../components/styles/Subheader';
import { media } from '../components/utils/Breakpoints';

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
		background: ${(props) => props.theme.green};
		color: ${(props) => props.theme.black};
		padding: 1rem 0.5rem;
		box-shadow: ${(props) => props.theme.bs};
		${media.lessThan('tablet')`
			font-size: 2rem;
		`};
	}
`;

const Index = () => {
	return (
		<HomepageSplash>
			<Spring from={{ opacity: 0, marginLeft: -70 }} to={{ opacity: 1, marginLeft: 0 }}>
				{(props) => (
					<PageHeader className="index" style={props}>
						{title}
					</PageHeader>
				)}
			</Spring>
			<SubHeader>{desc}</SubHeader>
			<Logo src="../static/nb-logo.svg" alt={title} />
			<TypedWrapper>
				<Typed
					strings={[
						'HTML / S(CSS)',
						'JavaScript',
						'React / Vue',
						'PHP',
						'Git',
						'WordPress',
						'Headless CMSs',
						'Shopify {{ Liquid }}',
						'Photoshop / Illustrator'
					]}
					typeSpeed={50}
					backSpeed={30}
					loop
				/>
			</TypedWrapper>
		</HomepageSplash>
	);
};

export default Index;
