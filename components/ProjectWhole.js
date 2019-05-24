import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { ProjectSection, ProjectGrid, SiteLink } from './styles/ProjectStyles';

export default function ProjectWhole({ link, title, desc, image }) {
  return (
    <ProjectSection id={link}>
      <ProjectGrid>
        <div className="project-meta">
          <h3>{title}</h3>
          <div className="desc">
            <ReactMarkdown source={desc} escapeHtml={false} />
          </div>
        </div>
        <div className="project-img">
          <img src={image} alt={title} />
        </div>
      </ProjectGrid>
      <SiteLink href={link} target="_blank">
        <img src="../static/link.svg" alt="Link" />
        <p>{title}</p>
      </SiteLink>
    </ProjectSection>
  );
}

ProjectWhole.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
};
