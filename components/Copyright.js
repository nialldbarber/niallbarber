import { date } from '../helpers';
import { title } from '../static/utils';
import { FooterWrap } from '../styles/FooterStyles';

const Footer = () => (
  <FooterWrap>
    <p>{`© ${date} ${title}`}</p>
  </FooterWrap>
);

export default Footer;
