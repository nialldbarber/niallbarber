import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ProjectCard = styled.div`
	width: 100%;
	@media (min-width: 510px) {
		width: 50%;
	}
	@media (min-width: 992px) {
		width: 33.33333%;
	}
	img {
		width: 100%;
		height: auto;
		box-shadow: ${(props) => props.theme.bs};
	}
	h3 {
		margin-bottom: 0;
		transition: ${(props) => props.theme.transition};
	}
	&:hover {
		h3 {
			color: ${(props) => props.theme.pink};
		}
	}
`;

export default class Project extends Component {
	state = {
		title: 'Array Methods',
		image: '../static/array-methods.png',
		link: 'https://array-methods.herokuapp.com/'
	};

	render() {
		return (
			<div className="grid">
				<ProjectCard>
					<Link href={this.state.link}>
						<a>
							<h3>{this.state.title}</h3>
							<img src={this.state.image} />
						</a>
					</Link>
				</ProjectCard>
			</div>
		);
	}
}
