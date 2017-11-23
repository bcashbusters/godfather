import React, { Component } from 'react';
import BalanceInfo from '../components/customer/balanceInfo';
import RewardsInfo from '../components/customer/rewardsInfo';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';

class AccountSummary extends Component {
    render() {
      const userInfo =  this.props.userInfo;
      return (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>

          <Grid container>
            <Grid item xs={12}>
              <Typography type="title" gutterBottom>Welcome {userInfo.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <BalanceInfo balance={userInfo.cardBalance} />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <RewardsInfo earnedPoints={userInfo.earnedRewardsPoints} />
            </Grid>
          </Grid>
      </div>
      );
    }
}


const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo ? state.userInfo:{},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AccountSummary);