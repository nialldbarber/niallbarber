import styled from 'styled-components';

const Header = styled.h1`
	position: relative;
	display: inline;
	&:before {
		content: '';
		position: absolute;
		background: ${(props) => props.theme.green};
		left: 0;
		bottom: 0;
		right: 0;
		height: 2px;
	}
`;

const Index = (props) => {
	return (
		<div>
			<Header>Home!</Header>
		</div>
	);
};

export default Index;
