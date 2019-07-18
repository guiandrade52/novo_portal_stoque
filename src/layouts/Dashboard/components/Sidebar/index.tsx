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
  Dashboard as DashboardIcon,
  LibraryAdd as LibraryAddIcon,
  FormatListBulleted as FormatListBulletedIcon,
  Build as BuildIcon,
  Help as HelpIcon,
 } from '@material-ui/icons';

// Material Styles
import { WithStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { styles } from './styles';

interface OwnProps extends WithStyles<typeof styles>{
  isOpen: boolean
  handleDrawerClose: () => void
}

function Sidebar({ isOpen, classes, handleDrawerClose }:OwnProps) {
  const theme = useTheme();
  const { location } = createBrowserHistory();

  const links = [
    { icon: <DashboardIcon color="primary" />, text: 'Dashboard', link: '/' },
    { icon: <LibraryAddIcon color="primary" />, text: 'Nova Tarefa', link: '/task' },
    { icon: <FormatListBulletedIcon color="primary" />, text: 'Listar Tarefas', link: '/listTask' },
    { icon: <BuildIcon color="primary" />, text: 'Configurador', link: '/configs' },
  ];

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
      <List>
        {links.map(item => (
          <Link to={item.link} key={item.text} className={classes.links}>
            <ListItem button className={location.pathname === item.link ? classes.linkSelected : ''}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText secondary={item.text} />
            </ListItem>
          </Link>
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
