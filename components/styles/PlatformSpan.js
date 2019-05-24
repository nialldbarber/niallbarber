import styled from 'styled-components';

const PlatformSpan = styled.span`
  position: relative;
  transition: ${props => props.theme.transition};
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.1rem;
    right: 0;
    height: 1px;
    z-index: -1;
  }
  &.reactSpan {
    &:before {
      background: ${props => props.theme.green};
    }
    &:hover {
      color: ${props => props.theme.green};
    }
  }
  &.vueSpan {
    &:before {
      background: ${props => props.theme.orange};
    }
    &:hover {
      color: ${props => props.theme.orange};
    }
  }
  &.wordpressSpan {
    &:before {
      background: ${props => props.theme.pink};
    }
    &:hover {
      color: ${props => props.theme.pink};
    }
  }
  &.shopifySpan {
    &:before {
      background: ${props => props.theme.green};
    }
    &:hover {
      color: ${props => props.theme.green};
    }
  }
`;

export default PlatformSpan;
