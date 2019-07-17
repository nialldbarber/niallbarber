import Link from 'next/link';
import { socialLinks } from '../static/utils';
import { IconContainer, Icon } from './styles/FooterStyles';

export default function Social() {
  return (
    <IconContainer>
      {socialLinks.map(social => (
        <Link key={social.src} href={social.link}>
          <a target="_blank">
            <Icon src={social.src} alt={social.alt} />
          </a>
        </Link>
      ))}
    </IconContainer>
  );
}
