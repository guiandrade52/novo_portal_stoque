import React from 'react';

// Material components
import { IconButton } from '@material-ui/core';

// Material styles
import NotificationImportant from '@material-ui/icons/NotificationImportant';

export default function NotificationList() {
  return (
    <div>
      <IconButton
        aria-label="Account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <NotificationImportant />
      </IconButton>

    </div>
  );
}
