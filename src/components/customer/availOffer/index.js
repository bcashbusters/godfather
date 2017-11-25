import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import Typography from 'material-ui/Typography';
import { addToScore } from '../../../actions/scoreActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
    textAlign: 'left',
    marginTop: '30px'
  },
  secondaryTextColor: 'red'

});

class AvailOffer extends React.Component {
  constructor(){
    super();
    this.state= {
      currOffer: '',
      offerAvailed: false,
      showNotification: false
    }
  }


  render() {
    let result = '';
    let iconColor = this.state.offerAvailed ? '#228B22' : '#ccc';
    let isResultFound = false;
    let merchant = ""
    for(let key in this.props.gameInfo.currOffer){
      if(this.props.merchants[this.props.gameInfo.currOffer[key]]){
        isResultFound = true;
        merchant = this.props.merchants[this.props.gameInfo.currOffer[key]]
      }
    }
    if(!isResultFound){
      result = 'No Result Found';
    }else {
      result = (<List>
        <ListItem button onClick={()=>{
          this.state.offerAvailed = true;
          this.state.showNotification= true;
          addToScore(this.props.userInfo.uid, 50);
        }}>
          <Avatar style={{backgroundColor: iconColor}}>
            <Done/>
          </Avatar>
          <ListItemText primary={merchant.offers[1].title} />
        </ListItem>
      </List>)
    };
    return (
      <Card>
        <CardContent>
          <Typography type="body1" component="h2" >
            Avail Offer
          </Typography>
          <br/>
          <br/>
          {result}
        <CardActions>
          <div style={{textAlign: 'left', width: '100%'}}>

            <Link to="tasks" style={{ textDecoration: 'none' }}>
            <Button dense color='primary'>Back to Rewards Hunt</Button>
            </Link>
          </div>
        </CardActions>
        </CardContent>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.showNotification}
          autoHideDuration={6000}
          // onRequestClose={this.handleRequestClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id" style={{color: "#ff4081"}}>Offer availed!!!</span>}

        />
      </Card>
    );
  }
}


export default connect(state => state)(withStyles(styles)(AvailOffer));
