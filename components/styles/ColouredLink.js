import styled from 'styled-components';
import { media } from '../../static/utils';

export const ColouredLink = styled.a`
  position: relative;
  padding: 1rem 2rem;
  margin: 0 1rem;
  text-decoration: none;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2px;
  transition: ${props => props.theme.transition};
  ${media.lessThan('mobile')`
    padding: 1rem 0;
    font-size: 1.5rem;
  `};
  @media (min-width: 321px) and (max-width: 509px) {
    padding: 1rem 0;
    font-size: 1.8rem;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    border-radius: 2px;
    transition: ${props => props.theme.transition};
    transform: translateX(-101%);
  }
  &:hover {
    &:before {
      ${media.greaterThan('tablet')`
        left: 100%;
        width: 100%;
      `};
    }
    &.home__nav,
    &.about__nav,
    &.projects__nav,
    &.contact__nav {
      ${media.greaterThan('tablet')`
        color: ${props => props.theme.black};
      `};
    }
  }
  &.home__nav {
    ${media.lessThan('tablet')`
      display: none;
    `};
    &:before {
      background: ${props => props.theme.green};
    }
    &.active {
      ${media.greaterThan('tablet')`
        background: ${props => props.theme.green};
        color: ${props => props.theme.black};
      `};
    }
  }
  &.about__nav {
    &:before {
      background: ${props => props.theme.orange};
    }
    &.active {
      ${media.greaterThan('tablet')`
        background: ${props => props.theme.orange};
        color: ${props => props.theme.black};
      `};
    }
  }
  &.contact__nav {
    &:before {
      background: ${props => props.theme.pink};
    }
    &.active {
      ${media.greaterThan('tablet')`
        background: ${props => props.theme.pink};
        color: ${props => props.theme.black};
      `};
    }
  }
`;
