import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { CircularProgress } from 'material-ui/Progress';
import { LinearProgress } from 'material-ui/Progress';
import CardMembership from 'material-ui-icons/CardMembership';
import Shop from 'material-ui-icons/Shop';
import TrackChanges from 'material-ui-icons/TrackChanges';
import Grid from 'material-ui/Grid';

import { Link } from 'react-router-dom';

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});

function GameInfo(props) {
    const progressContainerStyle = {
        marginTop: '20px'
    };

    const gameData = props.gameData;
    const scoreProgress = (gameData.score.current/gameData.score.total)*100;
    const rankProgress = 100 - (gameData.rank.current/gameData.rank.participants)*100;

    if(!gameData) {
      return(<CircularProgress size={50} />);
    }
    return (
        <div>
            <Card>
                <CardContent>
                    <img
                        alt={gameData.user.avatar.alt}
                        src={gameData.user.avatar.src}
                        width="150px"
                    />
                <Typography type="headline" component="h2">Level</Typography>
                <Typography type="display1" component="h2">{gameData.level}</Typography>

                <Divider />
                <div style={progressContainerStyle}>
                    <Typography type="subheading" gutterBottom>Score</Typography>
                    <LinearProgress mode="buffer" value={scoreProgress} />
                    <Typography type="subheading" gutterBottom>
                      {gameData.score.current}<span style={{color: 'red'}}> /{gameData.score.total}</span>
                    </Typography>
                    <br />
                    <Typography type="subheading" gutterBottom>Rank</Typography>
                    <LinearProgress color="accent" mode="buffer" value={rankProgress} />
                    <br />
                    <Typography type="subheading" gutterBottom>
                      {gameData.rank.current}<span style={{color: 'red'}}> / {gameData.rank.participants}</span>
                    </Typography>
                </div>
                <Divider />
                <div style={{paddingTop: '10px', marginTop: '20px'}}>
                  <Grid container>
                    <Grid item xs={4}>
                    <Link to="tasks" style={{ textDecoration: 'none' }}>
                          <CardMembership  color='#ff4081' style={{width: '36px', height: '36px'}}/>
                          <Typography type="subheading" gutterBottom>Badges</Typography>
                    </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Link to="tasks" style={{ textDecoration: 'none' }}>
                        <Shop color='#ff4081' style={{width: '36px', height: '36px'}}/>
                        <Typography type="subheading" gutterBottom>Score more</Typography>
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Link to="leaderboard" style={{ textDecoration: 'none' }}>
                        <TrackChanges color='#ff4081' style={{width: '36px', height: '36px'}} />
                        <Typography type="subheading" gutterBottom>Standings</Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
                </CardContent>
            </Card>
        </div>
    );
}


export default withStyles(styles)(GameInfo);