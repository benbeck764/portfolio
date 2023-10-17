import { FC } from 'react';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderWrapper,
} from './Header.styles';
import logo from '../../../assets/images/logo.png';
import { useBreakpoint } from '@benbeck764/react-components';
import { Navigation } from './components/Navigation/Navigation';
import { Link } from 'react-router-dom';
import { AppRoutes, RouteName } from '../../../routing/common/routes';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';

export const Header: FC = () => {
  const { breakpoint } = useBreakpoint();
  const scrollTrigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!scrollTrigger}>
      <StyledHeaderContainer>
        <StyledHeader elevation={0}>
          <StyledHeaderWrapper variant="dense">
            <Grid container>
              <Grid
                item
                xs={4}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Link to={AppRoutes[RouteName.Site].path}>
                  <Box
                    component="img"
                    alt="BenBeck.dev Logo"
                    src={logo}
                    display="flex"
                    height={40}
                    width={180}
                    sx={{
                      '&:hover': {
                        transition: 'all .25s ease-in-out',
                        transform: 'scale(1.05)',
                      },
                    }}
                  ></Box>
                </Link>
              </Grid>
              <Grid
                item
                xs={8}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                {breakpoint !== 'xl' && (
                  <Box>
                    <Navigation variant="drawer" />
                  </Box>
                )}
                {breakpoint === 'xl' && (
                  <Box ml={4}>
                    <Navigation variant="bar" />
                  </Box>
                )}
              </Grid>
            </Grid>
          </StyledHeaderWrapper>
        </StyledHeader>
      </StyledHeaderContainer>
    </Slide>
  );
};
