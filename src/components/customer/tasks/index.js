import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import SettingsInputSvideo from 'material-ui-icons/SettingsInputSvideo';
import CameraEnhance from 'material-ui-icons/CameraEnhance';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
        background: theme.palette.background.paper,
        textAlign: 'left',
        marginTop: '30px'
    },
    secondaryTextColor: 'red'

});

function Tasks(props) {
    const { classes } = props;
    const titleStyle = {
        width: "100%",
        textAlign: "center",
    };
    return (
        <div className={classes.root}>
          <div style={titleStyle}>
            <Typography
                type="headline" gutterBottom>How To Improve Your Score</Typography>
          </div>
          <List>
            <Divider />
            <Link to="gameCam" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <Avatar>
                  <CameraEnhance />
                </Avatar>
                <ListItemText primary="Use Camera to Search Offers " secondary="High scoring task" />
              </ListItem>
            </Link>
            <Divider />
            <Divider />
            <ListItem button>
              <Avatar>
                <SettingsInputSvideo />
              </Avatar>
              <ListItemText primary="Play a game"  />
            </ListItem>
            <Divider />
            <Link to="offers" style={{ textDecoration: 'none' }}>
              <ListItem button >
                <Avatar>
                  <ShoppingBasket />
                </Avatar>
                <ListItemText primary="Shop with our Merchant offers" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="offers" style={{ textDecoration: 'none' }}>
              <ListItem button >
                <Avatar>
                  <AccountCircle />
                </Avatar>
                <ListItemText primary="Enroll your friends" />
              </ListItem>
            </Link>
          </List>
        </div>
    );
}

export default withStyles(styles)(Tasks);