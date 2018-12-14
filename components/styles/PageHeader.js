import styled from 'styled-components';

const PageHeader = styled.h1`
	position: relative;
	display: inline;
	font-size: 8rem;
	@media (max-width: 509px) {
		font-size: 6rem;
	}
	@media (min-width: 768px) {
		font-size: 11rem;
	}
	@media (min-width: 992px) {
		font-size: 17rem;
	}
	&:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 1rem;
		right: 0;
		height: 5px;
		z-index: -1;
		@media (max-width: 767px) {
			bottom: 0;
			height: 3px;
		}
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
