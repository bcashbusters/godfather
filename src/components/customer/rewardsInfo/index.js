import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

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

function RewardsInfo(props) {
  const { classes } = props;
  const { earnedPoints, redeemedPoints } = props;

  return (
    <div>
      <Card className={classes.card}>

        <CardContent>
          <Typography type="body1" component="h2" >
            Rewards
          </Typography>
          <br/>
          <br/>

          <Typography type="body1" className={classes.title}>
            Balance Points till date
          </Typography>
          <Typography type="headline" component="h2">
            {earnedPoints}
          </Typography>

        </CardContent>
        <Divider />
        <CardActions>
          <div style={{textAlign: 'center', width: '100%'}}>
            <Button dense color='primary'>view activities</Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
RewardsInfo.propTypes = {
  earnedPoints: PropTypes.object.isRequired,
  redeemedPoints: PropTypes.object.isRequired,
};
export default withStyles(styles)(RewardsInfo);