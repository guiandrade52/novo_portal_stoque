import React from 'react';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

interface OwnProps extends WithStyles<typeof styles> {
  children: React.ReactNode
}

function Main({ classes, children }: OwnProps) {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  );
}

export default withStyles(styles)(Main);
