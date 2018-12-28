import React, { Component } from 'react';
import ContentInfo from '../components/styles/Content';
import Project from '../components/Project';
import PageHeader from '../components/styles/PageHeader';

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
					<p>Check out some of my projects!</p>
					<p>Some will be professional jobs, but most are just me mucking about with new technologies</p>
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
