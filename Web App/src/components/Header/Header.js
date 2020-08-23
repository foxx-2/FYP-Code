import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, IconButton, Menu, Typography, DialogContent, DialogContentText } from '@material-ui/core';
import { Divider, Button, MenuItem, SvgIcon, Dialog, DialogTitle, DialogActions, TextField } from "@material-ui/core"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccountCircle from "@material-ui/icons/AccountCircle"
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  appBarSpacer: theme.mixins.toolbar,
  root: {
    display: 'flex',
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
  },

  drawerContainer: {
    overflow: 'auto',
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  SvgIcon: {
    marginBottom: 2,
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },

  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }

}));

const Header = props => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const dialogClose = () => {
    setDialogOpen(false)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePassword = () => {
    setDialogOpen(true)
  };

  const handleProfile = () => {
    props.history.push('/yourprofile')
  }

  const logOut = () => {
    props.history.push('/')
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ background: '#00a152' }}>
        <Toolbar>
          <SvgIcon className={classes.SvgIcon}>
            <LocalHospitalIcon />
          </SvgIcon>

          <Typography variant="h6" className={classes.title} noWrap>
            Remote Patient Monitoring Portal
          </Typography>


          <div className={classes.buttons}>
            <Button
              variant="outlined"
              style={{ color: '#FFFFFF' }}
              href="/dashboard">
              Homepage
            </Button>

            <Button
              variant="outlined"
              style={{ color: '#FFFFFF' }}
              href="/addpatient">
              Add Patient
            </Button>
          </div>
          <div>
            <IconButton
              aria-label="account of current user"
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
              <MenuItem onClick={handleProfile}>My Profile</MenuItem>
              <MenuItem onClick={handleChangePassword}>Change Password</MenuItem>
              <Divider />
              <MenuItem onClick={logOut}>Log Out</MenuItem>
            </Menu>

            <Dialog
              fullWidth
              maxWidth="md"
              open={dialogOpen}
              onClose={dialogClose}
            >
              <DialogTitle>Change Password</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter your password below in order to change it:
                </DialogContentText>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <DialogActions>
                  <Button onClick={dialogClose} color="primary">
                    Save Password
            </Button>
                  <Button onClick={dialogClose} color="primary">
                    Cancel
            </Button>
                </DialogActions>
              </DialogContent>
            </Dialog>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.appBarSpacer} />
    </div>
  );
}

export default withRouter(Header);