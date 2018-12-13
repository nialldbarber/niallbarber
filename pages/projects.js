import styled from 'styled-components';

const Header = styled.h1`
	position: relative;
	display: inline;
	&:before {
		content: '';
		position: absolute;
		background: ${(props) => props.theme.pink};
		left: 0;
		bottom: 0;
		right: 0;
		height: 2px;
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
