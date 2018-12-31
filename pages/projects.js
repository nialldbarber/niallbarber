import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import ContentInfo from '../components/styles/Content';
import Project from '../components/Project';
import ProjectWhole from '../components/ProjectWhole';
import PageHeader from '../components/styles/PageHeader';

const ExternalLink = styled.a`
	color: ${props => props.theme.pink};
	transition: ${props => props.theme.transition};
	&:hover {
		opacity: 0.6;
	}
`;

const ProjectGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	.project-grid-item {
		width: 100%;
		position: relative;
		margin: 1rem;
		@media (max-width: 629px) {
			margin: 1rem 0;
		}
		@media (min-width: 630px) {
			width: calc(50% - 2rem);
		}
		@media (min-width: 992px) {
			width: calc(33.33333% - 2rem);
		}
	}
`;

export default class Projects extends Component {
	state = {
		data: {
			projects: [
				{
					project1: {
						title: 'Andy Hale BMX Flatlander',
						image: '../static/moo-hayul.jpg',
						link: 'https://andyhalebmx.netlify.com/',
						typeOf: '../static/react.svg',
						desc: `I built this site using Next.js, a React framework that takes care of routing, universal rendering and also offers hot reloading. All of which make for a speedy development! <br><br> Andy needed a site as a landing spot for event organisers to check out his work and reach out to him if they had any work going. I decided to make the whole site a React project and use Next.js as a framework because it offered a fast user experience for potential organisers.`
					},
					project2: {
						title: 'One More Time Please',
						image: '../static/niallbarber-blog.png',
						link: 'https://ummonemoretimeplease.netlify.com/',
						typeOf: '../static/react.svg',
						typeOf2: '../static/graphql.svg',
						desc: `One more time please is a tutorial blog that I run. It’s a place where I break down difficult coding concepts for beginners, with a focus on React. I began this site to improve my understanding of JavaScript and React, but also found it helpful so point beginners in it’s direction.<br><br>
						The site was made with Gatsby as the framework and the content is fed through via GraphQL. The content is hosted on GraphCMS and is outputted through a react markdown plugin. `
					},
					project3: {
						title: 'Array Methods',
						image: '../static/array-methods.png',
						link: 'https://array-methods.herokuapp.com/',
						typeOf: '../static/react.svg',
						desc: `Array Methods was created to first improve my understanding of JavaScript array methods, but I also thought it would be useful for anyone beginning JavaScript or who might have an interview coming up, and needed to brush up.  <br><br>
						The site was made with create-react-app and was the first complete React app that I made. It was important for me to start with create-react-app because whilst it sets up your config for you, it leaves you to do things like routing yourself. So this really helped me get to grips with React.`
					}
				}
			]
		}
	};

	render() {
		return (
			<div>
				<PageHeader className="projects">Projects</PageHeader>
				<ContentInfo>
					<p>
						Check out some of my projects! Some are professional work, but most are projects in which I
						delve into new technologies
					</p>
					<p>
						I also run a tutorial site which involves me trying to unravel difficult coding concepts for
						beginners. You can check that out{' '}
						<ExternalLink href="https://ummonemoretimeplease.netlify.com/" target="_blank">
							here
						</ExternalLink>
					</p>
				</ContentInfo>

				<ProjectGrid>
					<AnchorLink className="project-grid-item" href={'#' + this.state.data.projects[0].project1.link}>
						<Project
							title={this.state.data.projects[0].project1.title}
							image={this.state.data.projects[0].project1.image}
							link={this.state.data.projects[0].project1.link}
							typeOf={this.state.data.projects[0].project1.typeOf}
						/>
					</AnchorLink>
					<AnchorLink className="project-grid-item" href={'#' + this.state.data.projects[0].project2.link}>
						<Project
							title={this.state.data.projects[0].project2.title}
							image={this.state.data.projects[0].project2.image}
							link={this.state.data.projects[0].project2.link}
							typeOf={this.state.data.projects[0].project2.typeOf}
							typeOf2={this.state.data.projects[0].project2.typeOf2}
						/>
					</AnchorLink>
					<AnchorLink className="project-grid-item" href={'#' + this.state.data.projects[0].project3.link}>
						<Project
							title={this.state.data.projects[0].project3.title}
							image={this.state.data.projects[0].project3.image}
							link={this.state.data.projects[0].project3.link}
							typeOf={this.state.data.projects[0].project3.typeOf}
						/>
					</AnchorLink>
				</ProjectGrid>
				<section>
					<ProjectWhole
						title={this.state.data.projects[0].project1.title}
						image={this.state.data.projects[0].project1.image}
						desc={this.state.data.projects[0].project1.desc}
						link={this.state.data.projects[0].project1.link}
					/>
					<ProjectWhole
						title={this.state.data.projects[0].project2.title}
						image={this.state.data.projects[0].project2.image}
						desc={this.state.data.projects[0].project2.desc}
						link={this.state.data.projects[0].project2.link}
					/>
					<ProjectWhole
						title={this.state.data.projects[0].project3.title}
						image={this.state.data.projects[0].project3.image}
						desc={this.state.data.projects[0].project3.desc}
						link={this.state.data.projects[0].project3.link}
					/>
				</section>
			</div>
		);
	}
}
