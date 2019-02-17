import React from "react";
import styled from "styled-components";
import { media } from "./utils/Breakpoints";
import ReactMarkdown from "react-markdown";

const ProjectSection = styled.section`
	padding: 4.5rem 0 2rem;
	margin-top: 7rem;
	${media.greaterThan("desktop")`
		min-height: 100vh;
	`};
`;

const ProjectGrid = styled.div`
	display: flex;
	flex-wrap: nowrap;
	.project-meta {
		width: 65%;
		padding: 0 3rem 1rem 1rem;
		${media.lessThan("phablet")`
			padding: 0;
		`};
		${media.lessThan("tablet")`
			width: 100%;
		`};
		h3 {
			font-size: 5rem;
			position: relative;
			display: inline;
			line-height: 1.3;
			border-bottom: 2px solid ${(props) => props.theme.pink};
			${media.lessThan("phablet")`
				font-size: 4rem;
			`};
		}
		.desc {
			p {
				font-size: 2rem;
			}
		}
	}
	.project-img {
		width: 35%;
		display: flex;
		${media.lessThan("tablet")`
			display: none;
		`};
		img {
			width: 100%;
			height: auto;
			align-self: center;
			box-shadow: ${(props) => props.theme.bs};
		}
	}
`;

const SiteLink = styled.a`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	&:hover {
		img {
			opacity: .6;
		}
		p {
			opacity: .6;
		}
	}
	img {
		align-self: center;
		max-width: 30px;
		width: 100%;
		height: auto;
		opacity: 1;
		transition: ${(props) => props.theme.transition};
		${media.lessThan("phablet")`
			width: 25px;
		`};
	}
	p {
		font-size: 2.8rem;
		padding-left: 2rem;
		color: ${(props) => props.theme.pink};
		line-height: 1.3;
		opacity: 1;
		transition: ${(props) => props.theme.transition};
		${media.lessThan("phablet")`
			font-size: 2rem;
			padding-right: 1.5rem;
		`};
	}
`;

const ProjectWhole = (props) => (
	<ProjectSection id={props.link}>
		<ProjectGrid>
			<div className="project-meta">
				<h3>{props.title}</h3>
				<div className="desc">
					<ReactMarkdown source={props.desc} escapeHtml={false} />
				</div>
			</div>
			<div className="project-img">
				<img src={props.image} alt={props.title} />
			</div>
		</ProjectGrid>
		<SiteLink href={props.link} target="_blank">
			<img src="../static/link.svg" alt="Link" />
			<p>{props.title}</p>
		</SiteLink>
	</ProjectSection>
);

export default ProjectWhole;
