import React, { Component } from 'react';
import styled from 'styled-components';
import ContentInfo from '../components/styles/Content';
import Project from '../components/Project';
import PageHeader from '../components/styles/PageHeader';

const ExternalLink = styled.a`
	color: ${(props) => props.theme.pink};
	transition: ${(props) => props.theme.transition};
	&:hover {
		opacity: .6;
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
						typeOf: '../static/react.svg'
					},
					project2: {
						title: 'Umm One More Time Please',
						image: '../static/niallbarber-blog.png',
						link: 'https://ummonemoretimeplease.netlify.com/',
						typeOf: '../static/react.svg',
						typeOf2: '../static/graphql.svg'
					},
					project3: {
						title: 'Array Methods',
						image: '../static/array-methods.png',
						link: 'https://array-methods.herokuapp.com/',
						typeOf: '../static/react.svg'
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
						Check out some of my projects! Some are professional work, but most are projects new
						technologies
					</p>
					<p>
						I also run a blog/tutorial in which I try to unravel difficult coding concepts for beginners.
						You can check that out{' '}
						<ExternalLink href="https://ummonemoretimeplease.netlify.com/" target="_blank">
							here
						</ExternalLink>
					</p>
				</ContentInfo>
				<div className="grid">
					<Project
						title={this.state.data.projects[0].project1.title}
						image={this.state.data.projects[0].project1.image}
						link={this.state.data.projects[0].project1.link}
						typeOf={this.state.data.projects[0].project1.typeOf}
					/>
					<Project
						title={this.state.data.projects[0].project2.title}
						image={this.state.data.projects[0].project2.image}
						link={this.state.data.projects[0].project2.link}
						typeOf={this.state.data.projects[0].project2.typeOf}
						typeOf2={this.state.data.projects[0].project2.typeOf2}
					/>
					<Project
						title={this.state.data.projects[0].project3.title}
						image={this.state.data.projects[0].project3.image}
						link={this.state.data.projects[0].project3.link}
						typeOf={this.state.data.projects[0].project3.typeOf}
					/>
				</div>
			</div>
		);
	}
}
