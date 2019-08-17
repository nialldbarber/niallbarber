import Link from 'next/link';
import { socialLinks } from '../static/utils';
import { IconContainer, Icon } from '../styles/FooterStyles';

const Social = () => (
  <IconContainer>
    {socialLinks.map(({ src, link, alt }) => (
      <Link key={src} href={link}>
        <a target="_blank">
          <Icon src={src} alt={alt} />
        </a>
      </Link>
    ))}
  </IconContainer>
);

export default Social;
