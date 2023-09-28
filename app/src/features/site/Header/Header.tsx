import { FC } from 'react';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderWrapper,
} from './Header.styles';
import { Box, Grid, Stack, Typography } from '@mui/material';
import logo from '../../../assets/images/logo.png';
import { useBreakpoint } from '@benbeck764/react-components';
import { Navigation } from './components/Navigation/Navigation';

export const Header: FC = () => {
  const { breakpoint } = useBreakpoint();
  return (
    <>
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
                <Box
                  component="img"
                  alt="BenBeck.dev Logo"
                  src={logo}
                  display="flex"
                  height={40}
                ></Box>
              </Grid>
              <Grid
                item
                xs={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {breakpoint === 'xl' && (
                  <Box ml={4}>
                    <Navigation variant="bar" />
                  </Box>
                )}
              </Grid>
              <Grid
                item
                xs={4}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                {breakpoint !== 'xl' && (
                  <Box>
                    <Navigation variant="drawer" />
                  </Box>
                )}
              </Grid>
            </Grid>
          </StyledHeaderWrapper>
        </StyledHeader>
      </StyledHeaderContainer>
    </>
  );
};
