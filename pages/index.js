import styled from 'styled-components';
import Typed from 'react-typed';
import PageHeader from '../components/styles/PageHeader';

const SubHeader = styled.h2`
	position: relative;
	font-size: 2.5rem;
	line-height: 0;
	margin: 0;
	padding-bottom: 10rem;
	@media (min-width: 768px) {
		font-size: 4rem;
		margin-top: -1rem;
	}
	@media (min-width: 992px) {
		font-size: 4rem;
		margin-top: -5rem;
	}
	&:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 1rem;
		right: 0;
		height: 5px;
		z-index: -1;
		@media (max-width: 767px) {
			bottom: 0;
			height: 3px;
		}
	}
`;

const TypedWrapper = styled.div`
	text-align: center;
	span {
		font-size: 3rem;
		background: ${(props) => props.theme.green};
		color: ${(props) => props.theme.black};
		padding: 1rem .5rem;
		box-shadow: ${(props) => props.theme.bs};
		@media (max-width: 767px) {
			font-size: 2rem;
		}
	}
`;

const Index = (props) => {
	return (
		<div>
			<PageHeader className="index">Niall Barber</PageHeader>
			<SubHeader>Front End Developer</SubHeader>
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
		</div>
	);
};

export default Index;
