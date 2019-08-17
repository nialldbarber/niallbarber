import React, { useState, useEffect } from 'react';
import { pageContent } from '../static/content/contact';
import { email } from '../static/utils';
import { ContentInfo } from '../styles/Content';
import { PageHeader } from '../styles/PageHeader';
import { ContactMe } from '../styles/ContactMe';

const Contact = () => {
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
};

export default Contact;
