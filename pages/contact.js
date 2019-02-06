import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import styled from 'styled-components';
import { email } from '../config';
import ContentInfo from '../components/styles/Content';
import PageHeader from '../components/styles/PageHeader';
import { media } from '../components/utils/Breakpoints';

const apiEndpoint = `${process.env.API_ENDPOINT}`;
const apiToken = `${process.env.API_TOKEN}`;

const ContactMe = styled.div`
	margin-top: 8rem;
	p {
		font-size: 2.7rem;
		padding: 1rem 2rem;
		position: relative;
		display: inline;
		z-index: 1;
		overflow: hidden;
		cursor: pointer;
		color: ${(props) => props.theme.black};
		${media.lessThan('tablet')`
			font-size: 2rem;
		`};
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			background: ${(props) => props.theme.green};
		}
	}
`;

export default class Contact extends Component {
	static async getInitialProps({ req, query }) {
		const data = await Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at('document.type', 'page'));
			})
			.catch((err) => console.log(err));
		return {
			projects: data.results
		};
	}

	state = {
		title: this.props.projects[1].data.page_title[0].text,
		content: this.props.projects[1].data.page_content[0].text
	};

	render() {
		return (
			<div>
				<PageHeader className="contact">{this.state.title}</PageHeader>
				<ContentInfo>
					<p dangerouslySetInnerHTML={{ __html: this.state.content }} />
				</ContentInfo>
				<ContactMe className="contact-me">
					<p>{email}</p>
				</ContactMe>
			</div>
		);
	}
}
