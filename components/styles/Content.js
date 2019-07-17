import styled from 'styled-components';
import { media } from '../../static/utils';

export const ContentInfo = styled.div`
  position: relative;
  max-width: 640px;
  margin-left: auto;
  padding-bottom: 3rem;
  p {
    font-size: 2rem;
    ${media.greaterThan('phablet')`
			font-size: 2.4rem;
		`};
    &:first-child {
      ${media.greaterThan('phablet')`
				margin-top: -1rem;
			`};
    }
  }
`;

export default ContentInfo;
