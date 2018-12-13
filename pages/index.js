import styled from 'styled-components';
import Typed from 'react-typed';

const Header = styled.h1`
	position: relative;
	display: inline;
	font-size: 17rem;
	&:before {
		content: '';
		position: absolute;
		background: ${(props) => props.theme.green};
		left: 0;
		bottom: 1rem;
		right: 0;
		height: 5px;
		z-index: -1;
	}
`;

const TypedWrapper = styled.div`
	text-align: center;
	span {
		font-size: 2vw;
		background: ${(props) => props.theme.green};
		color: ${(props) => props.theme.black};
		padding: 1rem .5rem;
	}
`;

const Index = (props) => {
	return (
		<div>
			<Header>Niall Barber</Header>
			<TypedWrapper>
				<Typed
					strings={[
						'HTML / CSS',
						'JavaScript',
						'React',
						'Vue',
						'PHP',
						'WordPress',
						'Liquid',
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
