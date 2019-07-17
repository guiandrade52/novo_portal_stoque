import React from 'react';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { Topbar, Sidebar, Main } from './components';

interface OwnProps extends WithStyles<typeof styles>{
  children: React.ReactNode
}

function Layout({ children, classes }: OwnProps) {
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Topbar isOpen={open} handleDrawerOpen={handleDrawerOpen} title="Portal Stoque" />
      <Sidebar isOpen={open} handleDrawerClose={handleDrawerClose} />
      <Main>
        {children}
      </Main>
    </div>
  );
}

export default withStyles(styles)(Layout);
