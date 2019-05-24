import { generateMedia } from 'styled-media-query';

// Pages
export const pages = [
  { title: 'Home' },
  { title: 'About' },
  { title: 'Projects' },
  { title: 'Contact' },
];

// Media queries
export const media = generateMedia({
  mobile: '320px',
  phablet: '510px',
  almostTablet: '629px',
  tablet: '768px',
  desktop: '992px',
  large: '1199px',
});

// Get date
export const date = new Date().getFullYear();

// Social Links
export const socialLinks = [
  {
    link: 'https://github.com/nialldbarber',
    src: '../static/github.svg',
    alt: 'Github',
  },
  {
    link: 'https://www.instagram.com/nialldbarber/',
    src: '../static/instagram.svg',
    alt: 'Instagram',
  },
  {
    link: 'https://www.linkedin.com/in/niall-barber/',
    src: '../static/linkedin.svg',
    alt: 'LinkedIn',
  },
];
