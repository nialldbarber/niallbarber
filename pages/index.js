import styled from 'styled-components';

const Header = styled.h1`
	position: relative;
	display: inline;
	font-size: 12vw;
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

const Index = (props) => {
	return (
		<div>
			<Header>Hey...</Header>
		</div>
	);
};

export default Index;
