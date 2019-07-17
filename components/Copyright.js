import { date } from '../static/utils';
import { title } from '../config';
import { FooterWrap } from './styles/FooterStyles';

export default function Footer() {
  return (
    <FooterWrap>
      <p>{`© ${date} ${title}`}</p>
    </FooterWrap>
  );
}
