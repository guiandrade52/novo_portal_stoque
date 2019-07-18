import React from 'react';
import classnames from 'classnames';
import { Link as LinkRouter } from 'react-router-dom';

// Material components
import { Breadcrumbs, Paper } from '@material-ui/core';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';


interface Links {
  text: string
  to: string
  active?: boolean
}

interface OwnProps extends WithStyles<typeof styles>{
  Links: Links[]
}

function Link(props:OwnProps) {
  const { classes, Links } = props;

  return (
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs maxItems={5} aria-label="Breadcrumb">
        {Links.map(link => (
          <LinkRouter
            key={link.text}
            to={link.to}
            className={classnames({
                          [classes.active]: link.active,
                          [classes.link]: !link.active,
                        })}
          >
            {link.text}
          </LinkRouter>
        )) }
      </Breadcrumbs>
    </Paper>
  );
}

export default withStyles(styles)(Link);
