import React, { useState, useEffect } from 'react';
import { pageContent } from '../static/content/about';
import { ContentInfo } from '../components/styles/Content';
import PageHeader from '../components/styles/PageHeader';

export default function About() {
  const [about, setAbout] = useState('');

  useEffect(() => {
    setAbout(pageContent);
  }, []);

  return (
    <div className="about-page">
      <PageHeader className="about">{about.title}</PageHeader>
      <ContentInfo>
        <p dangerouslySetInnerHTML={{ __html: about.content }} />
      </ContentInfo>
    </div>
  );
}
