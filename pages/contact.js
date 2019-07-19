import React, { useState, useEffect } from 'react';
import { pageContent } from '../static/content/contact';
import { email } from '../static/utils';
import { ContentInfo } from '../components/styles/Content';
import PageHeader from '../components/styles/PageHeader';
import { ContactMe } from '../components/styles/ContactMe';

export default function Contact() {
  const [contact, setContact] = useState('');

  useEffect(() => {
    setContact(pageContent);
  }, []);

  const { title, content } = contact;

  return (
    <div>
      <PageHeader className="contact">{title}</PageHeader>
      <ContentInfo>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </ContentInfo>
      <ContactMe className="contact-me">
        <p>{email}</p>
      </ContactMe>
    </div>
  );
}
