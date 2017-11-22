import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import BottomNavigation , { BottomNavigationButton }from 'material-ui/BottomNavigation';
import { LinearProgress } from 'material-ui/Progress';
import CardMembership from 'material-ui-icons/CardMembership';
import Shop from 'material-ui-icons/Shop';
import TrackChanges from 'material-ui-icons/TrackChanges';

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
    return (
        <div>
            <Card>
                <CardContent>
                    <img
                        alt="geeky"
                        src="images/avatars/geeky.gif"
                        width="150px"
                    />
                <Typography type="headline" component="h2">
                    Level
                </Typography>
                <Typography type="display1" component="h2">
                    2
                </Typography>

                <Divider />
                <div style={progressContainerStyle}>
                    <Typography type="subheading" gutterBottom>Score</Typography>
                    <LinearProgress mode="buffer" value={70} />
                    <Typography type="subheading" gutterBottom>
                         730<span style={{color: 'red'}}> /1000</span>
                    </Typography>
                    <br />
                    <Typography type="subheading" gutterBottom>Rank</Typography>
                    <LinearProgress color="accent" mode="buffer" value={80} />
                    <br />
                    <Typography type="subheading" gutterBottom>
                        24<span style={{color: 'red'}}> /880</span>
                    </Typography>
                </div>
                <Divider />
                <div>
                    <BottomNavigation
                        showLabels>
                        <BottomNavigationButton label="Your Badges" icon={<CardMembership />} />
                        <BottomNavigationButton label="Play" icon={<Shop />} component='a' href='tasks'/>
                        <BottomNavigationButton label="Leader board" icon={<TrackChanges />} component='a' href='tasks'/>
                    </BottomNavigation>
                </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default withStyles(styles)(GameInfo);