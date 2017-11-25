import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Ranking from '../components/dashbaord/rankings'
import './leaderboard.css';




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
          {userName: 'Yogesh', highScore: 160},
          {userName: 'Joe', highScore: 152},
          {userName: 'Jenny', highScore: 120},
          {userName: 'Anthony', highScore: 119},
          {userName: 'Gerrard', highScore: 109},
          {userName: 'Steve', highScore: 100},
          {userName: 'Serge', highScore: 95},

        ],
        local: [
          {userName: 'Anna', highScore: 190},
          {userName: 'Subin', highScore: 190},
          {userName: 'James', highScore: 179},
          {userName: 'Yogesh', highScore: 160},
          {userName: 'Bond', highScore: 89},
          {userName: 'Chang', highScore: 65},
          {userName: 'Alan', highScore: 40},
          {userName: 'Smith', highScore: 0}
        ],
        global: [
          {userName: 'BTrux', highScore: 1750},
          {userName: 'Bane', highScore: 1600},
          {userName: 'Kennethan', highScore: 1400},
          {userName: 'Jimmy', highScore: 1300},
          {userName: 'Tom', highScore: 1200},
          {userName: 'Aops', highScore: 1100},
          {userName: 'Yogesh', highScore: 160},
        ]
      },
      actData : [
      {userName: 'Joe', highScore: 152},
      {userName: 'Jenny', highScore: 120},
      {userName: 'Anthony', highScore: 119},
      {userName: 'Gerrard', highScore: 109},
      {userName: 'Steve', highScore: 100},
      {userName: 'Serge', highScore: 95},

    ],

      selfScore : 170,
      selfRank : "1st",
      sR:1,
      ranks : {
        friends : {text:"1st",val:1},
        local : {text:"4th",val:4},
        global: {text:"456th",val:465}
      }

    };
    this.classes = props.classes;

  }


  newFriendsData(){
    return [
      {userName: 'Jenny', highScore: 120},
      {userName: 'Joe', highScore: 152},
    ]
  }

  updateState(data) {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.selfRank = this.state.ranks[data].text;
    newState.actData = this.state.data[data];
    this.setState(newState);
  }

  animateRankChange(){
    let memberOfListToBePromoted = document.querySelectorAll('.anim_list')[1].outerHTML;
    let div = document.createElement('div');
    div.innerHTML = memberOfListToBePromoted;

    document.querySelectorAll('.LeaderBoard')[0].innerHTML += ('<div class="mow">' + div.innerHTML + '</div>');
    document.querySelector('.mow').childNodes[0].classList.remove("anim_list");
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.actData = this.newFriendsData();
    //this.setState(newState);
  }


  render() {

    return (
        <div className="LeaderBoard">
          <div>
            <Paper className={this.classes.rootPaper} elevation={1}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography type="title" component="h2" >
                    LeaderBoard
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography type="headline" component="h4" className={this.classes.lb_head_detail}>
                    {this.state.selfRank}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Avatar src="images/temp.jpeg" className={this.classes.bigAvatar} onClick={() => {
                    this.animateRankChange();
                  }}>

                  </Avatar>
                </Grid>
                <Grid item xs={4}>
                  <Typography type="headline" component="h4" className={this.classes.lb_head_detail}>
                    {this.state.selfScore}
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
