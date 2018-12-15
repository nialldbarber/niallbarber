import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ProjectCard = styled.div`
	width: 100%;
	position: relative;
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
	.typeOf {
		position: absolute;
		width: 50px;
		left: 0.6rem;
		box-shadow: none;
		bottom: 2.4rem;
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
			<div className="grid">
				<ProjectCard>
					<Link href={this.props.link}>
						<a>
							<h3>{this.props.title}</h3>
							<img src={this.props.image} />
							<img className="typeOf" src={this.props.typeOf} />
						</a>
					</Link>
				</ProjectCard>
			</div>
		);
	}
}
