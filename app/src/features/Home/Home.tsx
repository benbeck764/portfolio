import { FC } from 'react';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import { StyledPageWrapper } from '../../_shared';

const Home: FC = () => {
  return (
    <StyledPageWrapper direction="column" gap={10}>
      <About />
      <Experience />
    </StyledPageWrapper>
  );
};

export default Home;
