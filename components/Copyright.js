import Link from "next/link";
import styled from "styled-components";
import { media } from "./utils/Breakpoints";
import { title } from "../config";

const FooterWrap = styled.div`
	margin: -2.5rem auto 0;
	text-align: center;
	bottom: 0;
	right: 2rem;
	${media.greaterThan("phablet")`
		position: fixed;
	`};
	${media.greaterThan("tablet")`
		right: 5rem;
	`};
`;

const Footer = () => (
	<FooterWrap>
		<p>{`© ${new Date().getFullYear()} ${title}`}</p>
	</FooterWrap>
);

export default Footer;
