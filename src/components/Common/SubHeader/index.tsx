import React from 'react';


// Material components
import {
 Typography,
  Divider,
} from '@material-ui/core';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { LinkComponent } from './components';

interface Link {
  text: string
  to: string
  active?: boolean
}

interface OwnProps extends WithStyles<typeof styles>{
  title: string
  Links: Link[]
}

function SubHeader({ classes, title, Links }: OwnProps) {
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" color="textSecondary" className={classes.title}>
        {title}
      </Typography>
      {Links.length > 0 && <LinkComponent Links={Links} /> }
      <Divider />
    </div>
  );
}

export default withStyles(styles)(SubHeader);
