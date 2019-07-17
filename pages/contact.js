import React, { useState, useEffect } from 'react';
import { pageContent } from '../static/content/contact';
import { email } from '../config';
import { ContentInfo } from '../components/styles/Content';
import PageHeader from '../components/styles/PageHeader';
import { ContactMe } from '../components/styles/ContactMe';

export default function Contact() {
  const [contact, setContact] = useState('');

  useEffect(() => {
    setContact(pageContent);
  }, []);

  return (
    <div>
      <PageHeader className="contact">{contact.title}</PageHeader>
      <ContentInfo>
        <p dangerouslySetInnerHTML={{ __html: contact.content }} />
      </ContentInfo>
      <ContactMe className="contact-me">
        <p>{email}</p>
      </ContactMe>
    </div>
  );
}
