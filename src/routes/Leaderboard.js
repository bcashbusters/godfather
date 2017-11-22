import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Ranking from '../components/dashbaord/rankings'
import PropTypes from 'prop-types';




const styles = theme => ({
  rootPaper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    background:`#2196f3`,
    textAlign:`-webkit-center`,
    color:`white`
  }),
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    background: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  lb_rank: {
    margin : `0 10px 0 0`,
  },
  lb_avatar: {
    height:`90px`,
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
  lb_head_detail: {
    lineHeight: `80px`,
    color:`white`
  },
  lb_head_buttons: {
    padding: 8,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius:`4px`,
    cursor:`pointer`
  },
  button: {
    background:`white`,
    width: `100%`,
  }
});

class LeaderBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : {
        friends: [
          {userName: 'Joe', highScore: 152},
          {userName: 'Jenny', highScore: 120}
        ],
        local: [
          {userName: 'Anna', highScore: 152},
          {userName: 'Channa', highScore: 120}
        ],
        global: [
          {userName: 'BTrux', highScore: 152},
          {userName: 'Bane', highScore: 120}
        ]
      },
      actData : [
        {userName: 'Joe', highScore: 152},
        {userName: 'Jenny', highScore: 120}
      ]

    };
    this.classes = props.classes;

  }

  updateState(data) {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.actData = this.state.data[data];
    this.setState(newState);
  }


  render() {

    return (
        <div className="LeaderBoard">
          <div>
            <Paper className={this.classes.rootPaper} elevation={1}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography type="Title" component="h2" >
                    LeaderBoard
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography type="headline" component="h4" className={this.classes.lb_head_detail}>
                    4th
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Avatar src="images/temp.jpeg" className={this.classes.bigAvatar}>

                  </Avatar>
                </Grid>
                <Grid item xs={4}>
                  <Typography type="headline" component="h4" className={this.classes.lb_head_detail}>
                    46pts
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={4}>
                  <Button raised className={this.classes.button} onClick={() => {
                    this.updateState("friends");
                  }}>
                    Friends
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button raised className={this.classes.button} onClick={() => {
                    this.updateState("local");
                  }}>
                    Local
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button raised className={this.classes.button} onClick={() => {
                    this.updateState("global");
                  }}>
                    Global
                  </Button>
                </Grid>
              </Grid>

            </Paper>
            <Ranking actData={this.state.actData} />
          </div>
        </div>
      );
  }
}


export default withStyles(styles)(LeaderBoard);
LeaderBoard.propTypes = {
  data: PropTypes.object.isRequired,
};