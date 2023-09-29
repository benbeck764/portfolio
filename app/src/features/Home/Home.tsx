import { FC } from 'react';
import About from './components/About/About';
import { StyledPageWrapper } from '../../_shared/components/Shared.styles';

const Home: FC = () => {
  return (
    <StyledPageWrapper direction="column">
      <About />
    </StyledPageWrapper>
  );
};

export default Home;
