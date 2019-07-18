import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material components
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

// Material icons
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Help as HelpIcon,
 } from '@material-ui/icons';

// Material Styles
import { WithStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { links } from './dataLinks';
import { ButtonSidebar, ButtonCollapseSidebar } from './components';

interface OwnProps extends WithStyles<typeof styles>{
  isOpen: boolean
  handleDrawerClose: () => void
}

function Sidebar(props:OwnProps) {
  const {
    isOpen,
    classes,
    handleDrawerClose,
  } = props;

  const theme = useTheme();
  const { location } = createBrowserHistory();

  return (

    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
      classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
      open={isOpen}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List
        component="nav"
        aria-labelledby="Sidebar"
      >
        {/* Button sidebar simples */}
        {links.map(item => (
          <React.Fragment key={item.title}>
            {item.subLink.length === 0
            && (
              <ButtonSidebar
                title={item.title}
                link={item.link}
                classes={classes}
                selected={location.pathname === item.link}
                drawerOpen={isOpen}
                icon={item.icon}
              />
            )}

            {/* Button sidebar dropdown */}
            {item.subLink.length > 0
            && (
              <ButtonCollapseSidebar
                classes={classes}
                dropDownLink={item}
                selected={location.pathname.split('/')[1] === item.link.split('/')[1]}
                drawerOpen={isOpen}
                pathname={location.pathname}
              />
            )}

          </React.Fragment>
          ))}
      </List>

      <List>
        <Link to="/about" className={classes.links}>
          <ListItem button className={location.pathname === '/about' ? classes.linkSelected : ''}>
            <ListItemIcon>
              <HelpIcon color="primary" />
            </ListItemIcon>
            <ListItemText secondary="Ajuda" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Sidebar);
