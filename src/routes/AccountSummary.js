import React, { Component } from 'react';
import BalanceInfo from '../components/customer/balanceInfo';

class AccountSummary extends Component {
    render() {
        return (<BalanceInfo balance="$770.00" />);
    }
}

export default AccountSummary;