import { FC } from 'react';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderWrapper,
} from './Header.styles';
import { Stack, Typography } from '@mui/material';

export const Header: FC = () => {
  return (
    <>
      <StyledHeaderContainer>
        <StyledHeader elevation={0}>
          <StyledHeaderWrapper variant="dense">
            <Stack
              direction="row"
              gap={3}
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h1" color="primary">
                Link 1
              </Typography>
              <Typography variant="h1" color="primary">
                Link 2
              </Typography>
              <Typography variant="h1" color="primary">
                Link 3
              </Typography>
            </Stack>
          </StyledHeaderWrapper>
        </StyledHeader>
      </StyledHeaderContainer>
    </>
  );
};
