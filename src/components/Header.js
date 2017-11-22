import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';


const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: '300px',
    background: theme.palette.background.paper
  },
});

class Header extends Component {
  state = {
    drawer: {
      open: false
    }
  }

  toggleDrawer() {
    return (e) =>
      (this.state.drawer.open) ?
        this.setState({ drawer: { open: false } }) :
        this.setState({ drawer: { open: true } });
  }

  render() {
    const { classes } = this.props;
    const logoContainerStyle = {
      position: 'absolute',
      width: 'calc(100% - 36px)',
      textAlign: 'center',
      paddingTop: '15px'
    };
    const buttonStyle = {
      position: 'relative',
      zIndex: 1
    }

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
        <Divider />
        <List></List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" style={buttonStyle}>
              <MenuIcon onClick={this.toggleDrawer()} />
            </IconButton>
            
            <div style={logoContainerStyle}>
            <img src="images/bank-logo.svg" alt='bank-logo' height='60px' width='60px'/>
          </div>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawer.open} onRequestClose={this.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer()}
            onKeyDown={this.toggleDrawer()}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);