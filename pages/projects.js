import styled from 'styled-components';
import ContentInfo from '../components/styles/Content';
import Project from '../components/Project';
//import projectDetails from './libs/projectDetails';

const Header = styled.h1`
	position: relative;
	display: inline;
	font-size: 6rem;
	@media (min-width: 768px) {
		font-size: 11rem;
	}
	@media (min-width: 992px) {
		font-size: 17rem;
	}
	&:before {
		content: '';
		position: absolute;
		background: ${(props) => props.theme.pink};
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
