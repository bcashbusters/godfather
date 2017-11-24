import React, {Component} from 'react';
import GameInfo from '../components/customer/gameSummary/index';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';

 class GameComponent extends Component {
    render() {
      return (
        <div style={{marginTop: '20px'}}>
          <Typography type="title" gutterBottom>Welcome to Rewards Ville</Typography>
          <GameInfo gameData={this.props.gameInfo}/>
        </div>);
    }
}

export default connect(state => state)(GameComponent);