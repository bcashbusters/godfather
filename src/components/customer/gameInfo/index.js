import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { CircularProgress } from 'material-ui/Progress';
import BottomNavigation , { BottomNavigationButton }from 'material-ui/BottomNavigation';
import { LinearProgress } from 'material-ui/Progress';
import CardMembership from 'material-ui-icons/CardMembership';
import Shop from 'material-ui-icons/Shop';
import TrackChanges from 'material-ui-icons/TrackChanges';

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
                    <LinearProgress mode="buffer" value={70} />
                    <Typography type="subheading" gutterBottom>
                      {gameData.score.current}<span style={{color: 'red'}}> /{gameData.score.total}</span>
                    </Typography>
                    <br />
                    <Typography type="subheading" gutterBottom>Rank</Typography>
                    <LinearProgress color="accent" mode="buffer" value={80} />
                    <br />
                    <Typography type="subheading" gutterBottom>
                      {gameData.rank.current}<span style={{color: 'red'}}> / {gameData.rank.participants}</span>
                    </Typography>
                </div>
                <Divider />
                <div>
                    <BottomNavigation>
                    <Link to="tasks" style={{ textDecoration: 'none' }}>
                          <BottomNavigationButton label="Your Badges" icon={<CardMembership />} />
                    </Link>
                      <Link to="tasks" style={{ textDecoration: 'none' }}>
                        <BottomNavigationButton label="Play" icon={<Shop />}/>
                      </Link>
                      <Link to="leaderboard" style={{ textDecoration: 'none' }}>
                        <BottomNavigationButton label="Leader board" icon={<TrackChanges />}/>
                      </Link>
                    </BottomNavigation>
                </div>
                </CardContent>
            </Card>
        </div>
    );
}


export default withStyles(styles)(GameInfo);