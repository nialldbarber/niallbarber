import React, { Component } from "react";
import Prismic from "prismic-javascript";
import styled from "styled-components";
import ContentInfo from "../components/styles/Content";
import PageHeader from "../components/styles/PageHeader";
import PlatformSpan from "../components/styles/PlatformSpan";

const apiEndpoint = `${process.env.API_ENDPOINT}`;
const apiToken = `${process.env.API_TOKEN}`;

export default class About extends Component {
	static async getInitialProps({ req, query }) {
		const data = await Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "page"));
			})
			.catch((err) => console.log(err));
		return {
			projects: data.results
		};
	}

	state = {
		title: this.props.projects[0].data.page_title[0].text,
		content: this.props.projects[0].data.page_content[0].text
	};

	render() {
		const { title, content } = this.state;
		return (
			<div className="about-page">
				<PageHeader className="about">{title}</PageHeader>
				<ContentInfo>
					<p dangerouslySetInnerHTML={{ __html: content }} />
				</ContentInfo>
			</div>
		);
	}
}
