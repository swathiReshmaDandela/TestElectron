import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { MainLogo } from './MainLogo';
import PollIcon from '@material-ui/icons/Poll';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.08);',
  },
  toolbar: {
    minHeight: '58px',
    padding: spacing(0, 3),
  },
  title: {
    flexGrow: 1,
    marginTop: spacing(1)
  },
  circleIcon:{
    height:spacing(1),
    marginTop: spacing(1),
    marginRight: spacing(2),
  },
  colorPrimary: {
    backgroundColor: '#FFFFFF',
    color: 'grey',
  },
  logo: {
    fill: '#FF6900',
    height: '10px',
    marginLeft: spacing(2),
    marginRight: spacing(2),
  },
  profile: {
    marginLeft: spacing(4),
    marginRight: spacing(6),
  },
}));

export default function SideNavigation() {
  const { logo, profile, toolbar, ...classes } = useStyles();

  return (
    <AppBar
      data-focus-boundary-sticky
      classes={classes}
      position="sticky"
    >
      <Toolbar disableGutters className={toolbar}>
        <MainLogo className={logo} />
        <FiberManualRecordIcon className={classes.circleIcon}/>
        <Typography variant="h6" className={classes.title}>
         React Electron
        </Typography>

      </Toolbar>
    </AppBar>
  );
}