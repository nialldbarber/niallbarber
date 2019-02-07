import React, { Component } from "react";
import Prismic from "prismic-javascript";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import ContentInfo from "../components/styles/Content";
import Project from "../components/Project";
import ProjectWhole from "../components/ProjectWhole";
import PageHeader from "../components/styles/PageHeader";
import { media } from "../components/utils/Breakpoints";

const apiEndpoint = `${process.env.API_ENDPOINT}`;
const apiToken = `${process.env.API_TOKEN}`;

const ExternalLink = styled.a`
	color: ${(props) => props.theme.pink};
	transition: ${(props) => props.theme.transition};
	&:hover {
		opacity: 0.6;
	}
`;

const Parallaxed = styled.img`
	position: absolute;
	width: 200px;
	z-index: -1;
`;

const ProjectGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	z-index: 5;
	.project-grid-item {
		width: 100%;
		position: relative;
		margin: 1rem;
		${media.lessThan("almostTablet")`
			margin: 1rem 0;
		`};
		${media.greaterThan("almostTablet")`
			width: calc(50% - 2rem);
		`};
		${media.greaterThan("desktop")`
			width: calc(33.33333% - 2rem);
		`};
	}
`;

export default class Projects extends Component {
	static async getInitialProps({ req, query }) {
		const data = await Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "project"));
			})
			.catch((err) => console.log(err));
		return {
			projects: data.results
		};
	}

	render() {
		const blog = this.props.projects[1].data;
		const projectList = this.props.projects;

		const anchoredProjects = projectList.map((key) => {
			return (
				<AnchorLink
					className="project-grid-item"
					href={`#${key.data.project_link[0].text}`}
					key={key.data.project_image.url}
				>
					<Project
						title={key.data.project_title[0].text}
						image={key.data.project_image.url}
						link={key.data.project_link[0].text}
					/>
				</AnchorLink>
			);
		});

		const projectWhole = projectList.map((key) => {
			return (
				<ProjectWhole
					key={key.data.project_title[0].text}
					title={key.data.project_title[0].text}
					image={key.data.project_image.url}
					desc={key.data.project_content[0].text}
					link={key.data.project_link[0].text}
				/>
			);
		});

		return (
			<div>
				<PageHeader className="projects">Projects</PageHeader>
				<ContentInfo>
					<p>
						Check out some of my projects! Some are professional work, but most are projects in which I delve into new
						technologies
					</p>
					<p>
						I also run a tutorial site which involves me trying to unravel difficult coding concepts for beginners. You
						can check that out{" "}
						<ExternalLink href={blog.project_link[0].text} target="_blank">
							here
						</ExternalLink>
					</p>
				</ContentInfo>
				<ProjectGrid>{anchoredProjects}</ProjectGrid>
				<section>{projectWhole}</section>
			</div>
		);
	}
}
