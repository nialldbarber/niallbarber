import styled from 'styled-components';
import Typed from 'react-typed';
import PageHeader from '../components/styles/PageHeader';

const TypedWrapper = styled.div`
	text-align: center;
	span {
		font-size: 3rem;
		background: ${(props) => props.theme.green};
		color: ${(props) => props.theme.black};
		padding: 1rem .5rem;
		@media (max-width: 767px) {
			font-size: 2rem;
		}
	}
`;

const Index = (props) => {
	return (
		<div>
			<PageHeader className="index">Niall Barber</PageHeader>
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
