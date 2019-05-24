import styled from 'styled-components';
import { media } from '../utils';

const PageHeader = styled.h1`
	position: relative;
	display: inline;
	font-size: 8rem;
	${media.lessThan('phablet')`
		font-size: 15vw;
	`};
	${media.greaterThan('tablet')`
		font-size: 11rem;
	`};
	${media.between('desktop', 'large')`
		font-size: 17rem;
	`};
	${media.greaterThan('large')`
		font-size: 18rem;
	`};
	&:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 1rem;
		right: 0;
		height: 5px;
		z-index: -1;
		${media.lessThan('tablet')`
			bottom: 0;
			height: 3px;
		`};
	}
	&.index {
		&:before {
			background: ${(props) => props.theme.green};
		}
	}
	&.about {
		&:before {
			background: ${(props) => props.theme.orange};
		}
	}
	&.contact {
		&:before {
			background: ${(props) => props.theme.green};
		}
	}
	&.projects {
		&:before {
			background: ${(props) => props.theme.pink};
		}
	}
`;

export default PageHeader;
