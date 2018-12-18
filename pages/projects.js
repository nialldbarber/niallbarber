import React, { Component } from 'react';
import ContentInfo from '../components/styles/Content';
import Project from '../components/Project';
import PageHeader from '../components/styles/PageHeader';

export default class Projects extends Component {
	state = {
		title: 'Array Methods',
		image: '../static/array-methods.png',
		link: 'https://array-methods.herokuapp.com/',
		typeOf: '../static/react.svg'
	};

	render() {
		return (
			<div>
				<PageHeader className="projects">Projects</PageHeader>
				<ContentInfo>
					<p>Check out some of my projects!</p>
					<p>Some will be professional jobs, but most are just me mucking about with new technologies</p>
				</ContentInfo>
				<Project
					title={this.state.title}
					image={this.state.image}
					link={this.state.link}
					typeOf={this.state.typeOf}
				/>
			</div>
		);
	}
}
