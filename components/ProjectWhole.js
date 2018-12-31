import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const ProjectSection = styled.div`
	padding: 2rem 0;
	margin-top: 7rem;
	@media (min-width: 992px) {
		min-height: 100vh;
	}
`;

const ProjectGrid = styled.div`
	display: flex;
	flex-wrap: nowrap;
	.project-meta {
		width: 65%;
		padding: 0 3rem 1rem 1rem;
		@media (max-width: 509px) {
			padding: 0;
		}
		@media (max-width: 767px) {
			width: 100%;
		}
		h3 {
			font-size: 5rem;
			position: relative;
			display: inline;
			line-height: 1.3;
			border-bottom: 2px solid ${props => props.theme.pink};
		}
		.desc {
			p {
				font-size: 2rem;
			}
		}
	}
	.project-img {
		width: 35%;
		@media (max-width: 767px) {
			display: none;
		}
		img {
			width: 100%;
			height: auto;
			box-shadow: ${props => props.theme.bs};
		}
	}
`;

const SiteLink = styled.a`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	img {
		align-self: center;
		max-width: 30px;
		width: 100%;
		height: auto;
	}
	p {
		font-size: 2.8rem;
		padding-left: 2rem;
		color: ${props => props.theme.pink};
	}
`;

export default class Project extends Component {
	render() {
		return (
			<ProjectSection id={this.props.link}>
				<ProjectGrid>
					<div className="project-meta">
						<h3>{this.props.title}</h3>
						<div className="desc">
							<ReactMarkdown source={this.props.desc} escapeHtml={false} />
						</div>
					</div>
					<div className="project-img">
						<img src={this.props.image} alt={this.props.title} />
					</div>
				</ProjectGrid>
				<SiteLink href={this.props.link}>
					<img src="../static/link.svg" alt="Link" />
					<p>{this.props.title}</p>
				</SiteLink>
			</ProjectSection>
		);
	}
}
