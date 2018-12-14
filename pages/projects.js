import styled from 'styled-components';
import ContentInfo from '../components/styles/Content';
import Project from '../components/Project';
import PageHeader from '../components/styles/PageHeader';

const Projects = () => {
	return (
		<div>
			<PageHeader className="projects">Projects</PageHeader>
			<ContentInfo>
				<p>Check out some of my projects!</p>
				<p>Some are professional but most are just me mucking about with new technologies</p>
			</ContentInfo>
			<Project />
		</div>
	);
};

export default Projects;
