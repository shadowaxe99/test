frontend/src/components/Navigation.js:
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          AI Agent Hub Dashboard
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
```