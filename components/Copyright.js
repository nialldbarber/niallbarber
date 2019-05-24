import { date } from './utils';
import { title } from '../config';
import { FooterWrap } from './styles/FooterStyles';

export default function Footer() {
  return (
    <FooterWrap>
      <p>{`© ${date} ${title}`}</p>
    </FooterWrap>
  );
}
