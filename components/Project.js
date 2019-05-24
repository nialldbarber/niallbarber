import React from 'react';
import PropTypes from 'prop-types';
import { ProjectCard } from './styles/ProjectStyles';

export default function Project({ title, image }) {
  return (
    <ProjectCard>
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </ProjectCard>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
