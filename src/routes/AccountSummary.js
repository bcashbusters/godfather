import React, { Component } from 'react';
import BalanceInfo from '../components/customer/balanceInfo';
import RewardsInfo from '../components/customer/rewardsInfo';

class AccountSummary extends Component {
    render() {
      return (
        <div>
        <BalanceInfo balance="$770.00" />
        <RewardsInfo earnedPoints="5674 pts" />
      </div>
      );
    }
}

export default AccountSummary;