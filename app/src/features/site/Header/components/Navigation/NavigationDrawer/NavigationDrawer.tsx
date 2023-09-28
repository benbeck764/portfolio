import { FC, Fragment, useState } from 'react';
import { Box, Stack, Theme, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  NavMenuConfig,
  NavMenuOptions,
  NavigationOptionVariant,
} from '../Navigation.props';
import { useLocation } from 'react-router-dom';
import {
  AppDrawer,
  AppDropdown,
  AppMenuItem,
  AppButton,
  CloseButton,
} from '@benbeck764/react-components';

interface NavigationDrawerProps {
  navigationConfig: NavMenuConfig[];
  onClickOption: ({ navigationAction, navigationRoute }: NavMenuOptions) => void;
}

export const NavigationDrawer: FC<NavigationDrawerProps> = (
  props: NavigationDrawerProps
) => {
  const { pathname } = useLocation();
  const [forcedToggleState, setForcedToggleState] = useState<boolean | undefined>(
    undefined
  );

  const handleClick = (option: NavMenuOptions) => {
    if (option.disabled) return;
    setForcedToggleState(false);
    props?.onClickOption(option);
  };

  const handleButtonVariantClick = (config: NavMenuConfig) => () => {
    if (config.disabled) return;
    setForcedToggleState(false);
    props.onClickOption(config);
  };

  return (
    <AppDrawer
      mode="panel"
      displayAboveHeader={true}
      closeOnSelect={true}
      forcedToggleState={forcedToggleState}
      drawerProps={{ anchor: 'right' }}
      onDrawerOpen={() => setForcedToggleState(undefined)}
      panelSx={{
        p: 0,
        width: 200,
        overflowY: 'hidden',
        height: '100%',
        backgroundColor: (theme) => theme.palette.background.default,
      }}
      buttonProps={{
        variant: 'text',
        disableRipple: true,
        disableElevation: true,
        sx: {
          color: (theme) => theme.palette.common.white,
          minWidth: 30,
          '&:focus': {
            color: (theme) => `${theme.palette.common.white} !important`,
          },
        },
        children: <MenuIcon fontSize="large" />,
      }}
    >
      <Stack direction="column">
        <Box display="flex" justifyContent="flex-end" pr={2} pt={0.5}>
          <CloseButton fontSize="large" onClick={() => setForcedToggleState(false)} />
        </Box>
        <Box sx={{ overflowY: 'scroll' }}>
          {props.navigationConfig.map((config: NavMenuConfig, index: number) => (
            <Fragment key={index}>
              {config.variant === NavigationOptionVariant.Menu ? (
                <AppDropdown
                  variant="header"
                  hideCaret={(config.menuItems?.length ?? 0) <= 0}
                  disabled={config.disabled}
                  renderClosed={
                    pathname === '/' ||
                    !config.menuItems.some((mi: NavMenuOptions) =>
                      mi.navigationRoute?.startsWith(pathname)
                    )
                  }
                  headerBoxSx={{
                    padding: '8px 8px',
                    margin: '0px',
                    ...(config.disabled
                      ? {}
                      : {
                          '&:hover': {
                            backgroundColor: (theme) => theme.palette.coolGrey[100],
                          },
                          '&:focus': {
                            backgroundColor: (theme) => theme.palette.coolGrey[100],
                            outline: 'none',
                          },
                        }),
                  }}
                  title={
                    <Stack
                      direction="row"
                      gap={1}
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Box
                        sx={{
                          '&.MuiSvgIcon-root': {
                            color: (theme) => theme.palette.primary.main,
                          },
                        }}
                      >
                        {config?.icon}
                      </Box>
                      <Typography
                        key={index}
                        variant="mobileParagraphBold"
                        sx={{
                          color: (theme) =>
                            config.disabled
                              ? theme.palette.coolGrey[200]
                              : theme.palette.primary.main,
                          '&:hover': {
                            color: (theme) => theme.palette.primary.dark,
                          },
                        }}
                      >
                        {config.label}
                      </Typography>
                    </Stack>
                  }
                >
                  <Box sx={{ width: '100%' }}>
                    {config.menuItems?.map((option: NavMenuOptions, index: number) => (
                      <AppMenuItem
                        key={index}
                        onSelect={() => handleClick(option)}
                        sx={{ pl: 4 }}
                        disabled={option.disabled}
                      >
                        <Typography
                          variant="mobileParagraphBold"
                          sx={
                            option.disabled
                              ? {
                                  color: (theme: Theme) => theme.palette.coolGrey[200],
                                  ...(option.childOption && {
                                    pl: (theme: Theme) => theme.spacing(2),
                                    fontWeight: 400,
                                  }),
                                }
                              : {
                                  color: (theme) => theme.palette.primary.main,
                                  '&:hover': {
                                    color: (theme) => theme.palette.primary.dark,
                                  },
                                  ...(option.childOption && {
                                    pl: (theme: Theme) => theme.spacing(2),
                                    fontWeight: 400,
                                  }),
                                }
                          }
                        >
                          {option.label}
                        </Typography>
                      </AppMenuItem>
                    ))}
                  </Box>
                </AppDropdown>
              ) : (
                <Box sx={{ width: '100%' }}>
                  <AppButton
                    sx={{ pl: 2, py: 1, justifyContent: 'flex-start' }}
                    onClick={handleButtonVariantClick(config)}
                    fullWidth
                  >
                    <Typography variant="mobileParagraphBold" color="primary">
                      {config.label}
                    </Typography>
                  </AppButton>
                </Box>
              )}
            </Fragment>
          ))}
        </Box>
      </Stack>
    </AppDrawer>
  );
};
