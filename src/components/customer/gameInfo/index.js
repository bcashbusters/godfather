import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Assignment from 'material-ui-icons/Assignment';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import Subheader from 'material-ui/List/ListSubheader';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
    textAlign: 'left',
    marginTop: '30px'
  },
  
});

function GameInfo(props) {
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
        <ListItem button>
          <Avatar>
          <Assignment />
          </Avatar>
          <ListItemText primary="Do Tasks"  />
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar>
            <ShoppingBasket />
          </Avatar>
          <ListItemText primary="Shop with our Merchant offers" />
        </ListItem>
      </List>
    </div>
  );
}

export default withStyles(styles)(GameInfo);