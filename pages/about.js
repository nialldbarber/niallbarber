import React, { useState, useEffect } from 'react';
import { pageContent } from '../static/content/about';
import { ContentInfo } from '../components/styles/Content';
import PageHeader from '../components/styles/PageHeader';
import { AboutPage } from '../components/styles/AboutPage';

export default function About() {
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
}
