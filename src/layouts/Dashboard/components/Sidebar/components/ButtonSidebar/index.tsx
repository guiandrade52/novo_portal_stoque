import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// Material components
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';


interface OwnProps {
  title: string
  link: string
  classes: any
  selected: boolean
  icon: any
  drawerOpen: boolean
  spacing?: boolean
}

export default function ButtonSidebar(props: OwnProps) {
  const {
          link,
          title,
          classes,
          selected,
          icon,
          drawerOpen,
          spacing,
        } = props;

  return (
    <Link to={link} className={classes.links}>
      <ListItem
        button
        className={classnames({ [classes.linkSelected]: selected, [classes.nested]: spacing && drawerOpen })}
      >
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        {drawerOpen && <ListItemText secondary={title} />}
      </ListItem>
    </Link>
  );
}
