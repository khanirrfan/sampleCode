import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function NavToolbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    const classes = useStyles();
    return (
        <AppBar position="static" className="mainToolBar">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            vmware 
          </Typography>
            <Button className="leftText">store</Button>
          <Button>
          <Badge badgeContent={4} color="primary" className="leftText">
            <NotificationsNoneIcon />
          </Badge>
          </Button>
          <Button className="leftText" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Login</Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
    )
}

