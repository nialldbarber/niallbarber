import Typed from 'react-typed';
import { Spring } from 'react-spring';
import { title, desc } from '../static/utils';
import { typed } from '../static/content';
import { PageHeader } from '../styles/PageHeader';
import { SubHeader } from '../styles/Subheader';
import { HomepageSplash, Logo, TypedWrapper } from '../styles/Homepage';
import logo from '../static/nb-logo.svg';

const Index = () => (
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
      <Typed strings={typed} typeSpeed={30} backSpeed={30} loop />
    </TypedWrapper>
  </HomepageSplash>
);

export default Index;
