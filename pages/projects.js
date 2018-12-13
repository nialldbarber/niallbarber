import styled from 'styled-components';

const Header = styled.h1`
	position: relative;
	display: inline;
	font-size: 12vw;
	&:before {
		content: '';
		position: absolute;
		background: ${(props) => props.theme.pink};
		left: 0;
		bottom: 1rem;
		right: 0;
		height: 5px;
		z-index: -1;
	}
`;

const Projects = () => {
	return (
		<div>
			<Header>Projects</Header>
		</div>
	);
};

export default Projects;
