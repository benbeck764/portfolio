import { FC, Fragment } from 'react';
import {
  NavMenuConfig,
  NavMenuOptions,
  NavigationOptionVariant,
} from '../Navigation.props';
import {
  StyledNavigationLinkTypography,
  StyledNavigationButton,
  StyledNavigationLink,
} from './NavigationBar.styles';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { ButtonProps } from '@mui/material/Button';
import AppMenu, { AppMenuItem } from '@benbeck764/react-components/Menu';

type NavigationBarProps = {
  navigationConfig: NavMenuConfig[];
  onClickOption: ({ navigationAction, navigationRoute }: NavMenuOptions) => void;
};

const buttonProps: ButtonProps = {
  variant: 'text',
  disableRipple: true,
  disableElevation: true,
  size: 'large',
  sx: { p: 0 },
};

export const NavigationBar: FC<NavigationBarProps> = (props: NavigationBarProps) => {
  return (
    <Grid container wrap="nowrap" pt={0.5} spacing={1}>
      {props.navigationConfig.map((config: NavMenuConfig, index: number) => (
        <Grid key={index} item sx={{ mr: 2, pt: '4px !important' }}>
          {config.variant === NavigationOptionVariant.Menu ? (
            <AppMenu
              mode="menu"
              menuWidth={180}
              displayDividers={true}
              buttonProps={{
                ...buttonProps,
                sx: {
                  p: 0,
                  visibility: config.disabled ? 'hidden' : 'visible',
                  color: (theme) => theme.palette.common.white,
                  '&:hover': {
                    color: (theme) => theme.palette.primary.dark,
                  },
                },
                disabled: config.disabled,
                children: <Typography variant="paragraphBold">{config.label}</Typography>,
              }}
              popperSx={{ mt: '6px !important' }}
            >
              {config.menuItems?.map((option: NavMenuOptions, index: number) => (
                <Fragment key={index}>
                  {option.navigationRoute ? (
                    <StyledNavigationLink href={option.navigationRoute ?? ''}>
                      <AppMenuItem disabled={option.disabled}>
                        {!option.disabled && (
                          <StyledNavigationLinkTypography
                            sx={{
                              ...(option.childOption && {
                                pl: (theme: Theme) => theme.spacing(2),
                              }),
                            }}
                            variant={option.childOption ? 'paragraph' : 'paragraphBold'}
                          >
                            {option.label}
                          </StyledNavigationLinkTypography>
                        )}
                        {option.disabled && (
                          <Typography
                            variant={option.childOption ? 'paragraph' : 'paragraphBold'}
                          >
                            {option.label}
                          </Typography>
                        )}
                      </AppMenuItem>
                    </StyledNavigationLink>
                  ) : (
                    <AppMenuItem
                      onSelect={() => props.onClickOption(option)}
                      disabled={option.disabled}
                    >
                      {!option.disabled && (
                        <StyledNavigationLinkTypography
                          sx={{
                            ...(option.childOption && {
                              pl: (theme: Theme) => theme.spacing(2),
                            }),
                          }}
                          variant={option.childOption ? 'paragraph' : 'paragraphBold'}
                        >
                          {option.label}
                        </StyledNavigationLinkTypography>
                      )}
                      {option.disabled && (
                        <Typography
                          variant={option.childOption ? 'paragraph' : 'paragraphBold'}
                        >
                          {option.label}
                        </Typography>
                      )}
                    </AppMenuItem>
                  )}
                </Fragment>
              ))}
            </AppMenu>
          ) : (
            <>
              {config.navigationRoute ? (
                <StyledNavigationLink href={config.navigationRoute ?? ''}>
                  <StyledNavigationButton {...buttonProps} disabled={config.disabled}>
                    <Typography variant="paragraphBold">{config.label}</Typography>
                  </StyledNavigationButton>
                </StyledNavigationLink>
              ) : (
                <StyledNavigationButton
                  {...buttonProps}
                  disabled={config.disabled}
                  onClick={() => props.onClickOption(config)}
                >
                  <Typography variant="paragraphBold">{config.label}</Typography>
                </StyledNavigationButton>
              )}
            </>
          )}
        </Grid>
      ))}
    </Grid>
  );
};
