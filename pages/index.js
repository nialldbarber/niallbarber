import Typed from 'react-typed';
import { Spring } from 'react-spring';
import { title, desc } from '../static/utils';
import { typed } from '../static/content';
import PageHeader from '../components/styles/PageHeader';
import SubHeader from '../components/styles/Subheader';
import {
  HomepageSplash,
  Logo,
  TypedWrapper,
} from '../components/styles/Homepage';
import logo from '../static/nb-logo.svg';

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
      <Logo src={logo} alt={title} />
      <TypedWrapper>
        <Typed
          strings={typed}
          typeSpeed={30}
          backSpeed={30}
          loop
        />
      </TypedWrapper>
    </HomepageSplash>
  );
}
