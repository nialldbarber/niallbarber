import { date, title } from '../static/utils';
import { FooterWrap } from './styles/FooterStyles';

export default function Footer() {
  return (
    <FooterWrap>
      <p>{`© ${date} ${title}`}</p>
    </FooterWrap>
  );
}
