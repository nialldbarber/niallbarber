import React, { useState, useEffect } from 'react';
import { pageContent } from '../static/content/about';
import { ContentInfo } from '../styles/Content';
import { PageHeader } from '../styles/PageHeader';
import { AboutPage } from '../styles/AboutPage';

const About = () => {
  const [about, setAbout] = useState('');

  useEffect(() => {
    setAbout(pageContent);
  }, []);

  const { title, content } = about;

  return (
    <AboutPage>
      <PageHeader className="about">{title}</PageHeader>
      <ContentInfo>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </ContentInfo>
    </AboutPage>
  );
};

export default About;
