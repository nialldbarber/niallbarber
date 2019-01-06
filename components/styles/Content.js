import styled from 'styled-components';

const ContentInfo = styled.div`
	position: relative;
	max-width: 640px;
	margin-left: auto;
	padding-bottom: 3rem;
	p {
		font-size: 2.4rem;
		@media (max-width: 509px) {
			font-size: 2rem;
		}
		&:first-child {
			margin-top: 0;
		}
	}
`;

export default ContentInfo;
