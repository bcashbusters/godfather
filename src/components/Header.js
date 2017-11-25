import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router-dom';

import firebase from 'firebase';


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
  }
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

  logout = (e) => {
    firebase.auth().signOut();
  }

  render() {
    const { classes, user } = this.props;
    const buttonStyle = {
      position: 'relative',
      zIndex: 1
    }

    const Authenticated =
      <div>
        <Divider />
        <Link to="asum" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemText primary="Statements" />
          </ListItem>
        </Link>
        <Link to="asum" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="asum" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemText primary="Rewards" />
          </ListItem>
        </Link>
        <Link to="gameHome" style={{ textDecoration: 'none' }}>
          <ListItem button >
            <ListItemText primary="Offers Ville" />
          </ListItem>
        </Link>
        <Link to="leaderboard" style={{ textDecoration: 'none' }}>
          <ListItem button >
            <ListItemText primary="Leader Board" />
          </ListItem>
        </Link>
        <Divider />
      </div>;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to="asum" style={{ textDecoration: 'none' }}>
            <ListItem button >
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          {user.name? Authenticated: <span />}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" style={buttonStyle}>
              <MenuIcon onClick={this.toggleDrawer()} />
            </IconButton>

            <div className={classes.flex}>
              <img src="images/bank-logo.svg" alt='bank-logo' height='60px' width='60px' />
            </div>
            {(this.props.user.name)? <Button color="contrast" onClick={this.logout}>Logout</Button>: <span />}
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