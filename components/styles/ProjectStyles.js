import styled from 'styled-components';
import { media } from '../utils';

export const ProjectCard = styled.div`
  img {
    width: 100%;
    height: auto;
    box-shadow: ${props => props.theme.bs};
  }
  h3 {
    margin-bottom: 0;
    transition: ${props => props.theme.transition};
  }
  .typeOf {
    position: absolute;
    width: 40px;
    left: 0.6rem;
    box-shadow: none;
    bottom: 2.4rem;
    &.typeOf2 {
      left: 5rem;
      bottom: 2.3rem;
    }
  }
  &:hover {
    h3 {
      color: ${props => props.theme.pink};
    }
  }
`;

export const ProjectSection = styled.section`
  padding: 4.5rem 0 2rem;
  margin-top: 7rem;
  ${media.greaterThan('desktop')`
		min-height: 100vh;
	`};
`;

export const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  .project-meta {
    width: 65%;
    padding: 0 3rem 1rem 1rem;
    ${media.lessThan('phablet')`
			padding: 0;
		`};
    ${media.lessThan('tablet')`
			width: 100%;
		`};
    h3 {
      font-size: 5rem;
      position: relative;
      display: inline;
      line-height: 1.3;
      border-bottom: 2px solid ${props => props.theme.pink};
      ${media.lessThan('phablet')`
				font-size: 4rem;
			`};
    }
    .desc {
      p {
        font-size: 2rem;
      }
    }
  }
  .project-img {
    width: 35%;
    display: flex;
    ${media.lessThan('tablet')`
			display: none;
		`};
    img {
      width: 100%;
      height: auto;
      align-self: center;
      box-shadow: ${props => props.theme.bs};
    }
  }
`;

export const SiteLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    img {
      opacity: 0.6;
    }
    p {
      opacity: 0.6;
    }
  }
  img {
    align-self: center;
    max-width: 30px;
    width: 100%;
    height: auto;
    opacity: 1;
    transition: ${props => props.theme.transition};
    ${media.lessThan('phablet')`
			width: 25px;
		`};
  }
  p {
    font-size: 2.8rem;
    padding-left: 2rem;
    color: ${props => props.theme.pink};
    line-height: 1.3;
    opacity: 1;
    transition: ${props => props.theme.transition};
    ${media.lessThan('phablet')`
			font-size: 2rem;
			padding-right: 1.5rem;
		`};
  }
`;
