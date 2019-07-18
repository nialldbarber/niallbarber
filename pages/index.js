import Typed from 'react-typed';
import { Spring } from 'react-spring';
import { title, desc } from '../static/utils';
import PageHeader from '../components/styles/PageHeader';
import SubHeader from '../components/styles/Subheader';
import {
  HomepageSplash,
  Logo,
  TypedWrapper,
} from '../components/styles/Homepage';

export default function Index() {
  return (
    <HomepageSplash>
      <Spring
        from={{ opacity: 0, marginLeft: -70 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {props => (
          <PageHeader className="index" style={props}>
            {title}
          </PageHeader>
        )}
      </Spring>
      <SubHeader>{desc}</SubHeader>
      <Logo src="../static/nb-logo.svg" alt={title} />
      <TypedWrapper>
        <Typed
          strings={[
            'HTML / S(CSS)',
            'JavaScript',
            'React / Vue',
            'PHP',
            'Git',
            'WordPress',
            'Headless CMSs',
            'Shopify {{ Liquid }}',
            'Photoshop / Illustrator',
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </TypedWrapper>
    </HomepageSplash>
  );
}
