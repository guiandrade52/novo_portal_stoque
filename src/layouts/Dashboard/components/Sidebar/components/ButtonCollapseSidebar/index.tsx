import React, { useState } from 'react';
import classnames from 'classnames';

// Material components
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';

// Material icons
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
 } from '@material-ui/icons';
import ButtonSidebar from '../ButtonSidebar';

interface ObjLink {
  icon: any
  title: string
  link: string
}

interface DataLinkInterface extends ObjLink{
  subLink: ObjLink[]
}

interface OwnProps {
  dropDownLink: DataLinkInterface
  classes:any
  selected: boolean
  drawerOpen: boolean
  pathname: string
}


export default function LinkCollapse(props:OwnProps) {
  const {
          classes,
          dropDownLink,
          selected,
          drawerOpen,
          pathname,
        } = props;

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <ListItem
        button
        onClick={handleClick}
        className={classnames({ [classes.linkCollapseSelected]: selected })}
      >
        <ListItemIcon>
          {dropDownLink.icon}
        </ListItemIcon>
        <ListItemText secondary={dropDownLink.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
             dropDownLink.subLink.map(item => (
               <ButtonSidebar
                 title={item.title}
                 link={item.link}
                 classes={classes}
                 selected={pathname === item.link}
                 drawerOpen={drawerOpen}
                 icon={item.icon}
                 key={item.title}
                 spacing
               />
))
          }
        </List>
      </Collapse>
    </>
  );
}
