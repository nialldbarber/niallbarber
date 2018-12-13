import styled from 'styled-components';
import ContentInfo from '../components/styles/Content';
import Project from '../components/Project';

const Header = styled.h1`
	position: relative;
	display: inline;
	font-size: 17rem;
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
			<ContentInfo>
				<p>Check out some of my projects!</p>
				<p>Some are professional but most are just me mucking about with new technologies</p>
			</ContentInfo>
			<Project />
		</div>
	);
};

export default Projects;
