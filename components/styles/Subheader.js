import styled from 'styled-components';
import { media } from '../utils';

const SubHeader = styled.h2`
	position: relative;
	font-size: 2.5rem;
	line-height: 0;
	margin: 0;
	padding-bottom: 5rem;
	${media.greaterThan('tablet')`
		font-size: 4rem;
		margin-top: -1rem;
	`};
	${media.greaterThan('desktop')`
		font-size: 4rem;
		margin-top: -5rem;
	`};
	&:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 1rem;
		right: 0;
		height: 5px;
		z-index: -1;
		${media.greaterThan('desktop')`
			bottom: 0;
			height: 3px;
		`};
	}
`;

export default SubHeader;
