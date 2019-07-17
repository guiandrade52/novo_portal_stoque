import React from 'react';

// Material components
import { IconButton, MenuItem, Menu } from '@material-ui/core';

// Material styles
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function MenuAccount() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div>
      <IconButton
        aria-label="Account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
        keepMounted
        transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
        <MenuItem onClick={handleClose}>Alterar senha</MenuItem>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </div>
  );
}
