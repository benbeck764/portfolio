'use client';
import { FC } from 'react';
import Image from 'next/image';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderWrapper,
} from './Header.styles';
import { Navigation } from './components/Navigation/Navigation';
import { AppRoutes, RouteName } from '../../../routing/common/routes';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Link from 'next/link';

export const Header: FC = () => {
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
                <Link href={AppRoutes[RouteName.Site].path}>
                  <Image
                    src="/images/logo.png"
                    alt="BenBeck.dev Logo"
                    width={180}
                    height={40}
                    style={{ display: 'flex' }}
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={8}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Box sx={{ display: { xs: 'block', xl: 'none' } }}>
                  <Navigation variant="drawer" />
                </Box>
                <Box ml={4} sx={{ display: { xs: 'none', xl: 'block' } }}>
                  <Navigation variant="bar" />
                </Box>
              </Grid>
            </Grid>
          </StyledHeaderWrapper>
        </StyledHeader>
      </StyledHeaderContainer>
    </Slide>
  );
};
