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
  const [open, setOpen] = useState<boolean>(false);
  const [forcedToggleState, setForcedToggleState] = useState<boolean | undefined>(
    undefined
  );

  const handleClick = (option: NavMenuOptions) => {
    if (option.disabled) return;
    setForcedToggleState(false);
    setOpen(false);
    props?.onClickOption(option);
  };

  const handleButtonVariantClick = (config: NavMenuConfig) => () => {
    if (config.disabled) return;
    setForcedToggleState(false);
    setOpen(false);
    props.onClickOption(config);
  };

  return (
    <AppDrawer
      mode="panel"
      displayAboveHeader
      closeOnSelect
      forcedToggleState={forcedToggleState}
      drawerProps={{
        anchor: 'right',
        onClose: () => setOpen(false),
      }}
      onDrawerOpen={() => {
        setForcedToggleState(undefined);
        setOpen(true);
      }}
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
          transition: `transform 0.25s cubic-bezier(${
            open ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19'
          }) ${open ? '0.12s' : '0s'}`,
          transform: `rotate(${open ? '225deg' : '0deg'})`,
        },
        children: <MenuIcon fontSize="large" />,
      }}
    >
      <Stack direction="column">
        <Box display="flex" justifyContent="flex-end" pr={2} pt={0.5}>
          <CloseButton
            fontSize="large"
            onClick={() => {
              setForcedToggleState(false);
              setOpen(false);
            }}
            sx={{
              transition: `transform 0.25s cubic-bezier(${
                open ? '0.225, 0.63, 0.345, 1' : '0.53, 0.065, 0.685, 0.2'
              }) ${open ? '0.125s' : '0s'}`,
              transform: `rotate(${open ? '0deg' : '225deg'})`,
            }}
          />
        </Box>
        <Box sx={{ overflowY: 'scroll', pl: 1.5, py: 1 }}>
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
                        sx={{ pl: 4 }}
                        disabled={option.disabled}
                        onSelect={() => handleClick(option)}
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
                <AppMenuItem
                  sx={{
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.coolGrey[900],
                    },
                    '&:focus': {
                      backgroundColor: (theme) => theme.palette.coolGrey[900],
                      outline: 'none',
                    },
                    width: '100%',
                  }}
                  onSelect={handleButtonVariantClick(config)}
                >
                  <Typography variant="mobileParagraphBold" color="primary">
                    {config.label}
                  </Typography>
                </AppMenuItem>
              )}
            </Fragment>
          ))}
        </Box>
      </Stack>
    </AppDrawer>
  );
};
