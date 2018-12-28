import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ProjectCard = styled.div`
	width: 100%;
	position: relative;
	margin: 1rem;
	@media (min-width: 630px) {
		width: calc(50% - 2rem);
	}
	@media (min-width: 992px) {
		width: calc(33.33333% - 2rem);
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
	.typeOf {
		position: absolute;
		width: 50px;
		left: 0.6rem;
		box-shadow: none;
		bottom: 2.4rem;
		&.typeOf2 {
			left: 6rem;
			bottom: 2.3rem;
		}
	}
	&:hover {
		h3 {
			color: ${(props) => props.theme.pink};
		}
	}
`;

export default class Project extends Component {
	render() {
		return (
			<ProjectCard>
				<Link href={this.props.link}>
					<a target="_blank">
						<h3>{this.props.title}</h3>
						<img src={this.props.image} alt={this.props.title} />
						<img className="typeOf" src={this.props.typeOf} />
						<img className="typeOf typeOf2" src={this.props.typeOf2} />
					</a>
				</Link>
			</ProjectCard>
		);
	}
}
