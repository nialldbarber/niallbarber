import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectCard = styled.div`
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
		width: 40px;
		left: 0.6rem;
		box-shadow: none;
		bottom: 2.4rem;
		&.typeOf2 {
			left: 5rem;
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
				<h3>{this.props.title}</h3>
				<img src={this.props.image} alt={this.props.title} />
				<img className="typeOf" src={this.props.typeOf} />
				<img className="typeOf typeOf2" src={this.props.typeOf2} />
			</ProjectCard>
		);
	}
}
