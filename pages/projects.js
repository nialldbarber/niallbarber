import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import { apiEndpoint, apiToken } from '../config';
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
	static async getInitialProps({ req, query }) {
		const data = await Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then(api => {
				return api.query('');
			})
			.catch(err => console.log(err));

		return { projects: data.results };
	}

	render() {
		console.log(this.props.projects);
		const array = this.props.projects[0].data,
			blog = this.props.projects[1].data,
			moo = this.props.projects[2].data;
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
						<ExternalLink href={blog.project_link[0].text} target="_blank">
							here
						</ExternalLink>
					</p>
				</ContentInfo>
				<ProjectGrid>
					<AnchorLink className="project-grid-item" href={`#${moo.project_link[0].text}`}>
						<Project
							title={moo.project_title[0].text}
							image={moo.project_image.url}
							link={moo.project_link[0].text}
						/>
					</AnchorLink>
					<AnchorLink className="project-grid-item" href={`#${blog.project_link[0].text}`}>
						<Project
							title={blog.project_title[0].text}
							image={blog.project_image.url}
							link={blog.project_link[0].text}
						/>
					</AnchorLink>
					<AnchorLink className="project-grid-item" href={`#${array.project_link[0].text}`}>
						<Project
							title={array.project_title[0].text}
							image={array.project_image.url}
							link={array.project_link[0].text}
						/>
					</AnchorLink>
				</ProjectGrid>
				<section>
					<ProjectWhole
						title={moo.project_title[0].text}
						image={moo.project_image.url}
						desc={moo.project_content[0].text}
						link={moo.project_link[0].text}
					/>
					<ProjectWhole
						title={blog.project_title[0].text}
						image={blog.project_image.url}
						desc={blog.project_content[0].text}
						link={blog.project_link[0].text}
					/>
					<ProjectWhole
						title={array.project_title[0].text}
						image={array.project_image.url}
						desc={array.project_content[0].text}
						link={array.project_link[0].text}
					/>
				</section>
			</div>
		);
	}
}
