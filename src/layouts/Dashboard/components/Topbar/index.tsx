import React from 'react';
import clsx from 'clsx';

// Material components
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';

// Material styles components
import { WithStyles, withStyles } from '@material-ui/styles';

// Material icons components
import MenuIcon from '@material-ui/icons/Menu';

// Styles component
import { styles } from './styles';

interface OwnProps extends WithStyles<typeof styles> {
  isOpen: boolean
  handleDrawerOpen: () => void
  title: string
}

function Topbar({
 title, isOpen, classes, handleDrawerOpen,
}:OwnProps) {
  return (
    <AppBar
      elevation={1}
      position="fixed"
      className={clsx(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
              [classes.hide]: isOpen,
            })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
            Portal Stoque
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Topbar);
