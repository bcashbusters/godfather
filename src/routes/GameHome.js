import React, {Component} from 'react';
import GameInfo from '../components/customer/gameSummary/index';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { setUpGameData, destroyGameData} from '../actions';

 class GameComponent extends Component {
    componentDidMount() {
      setUpGameData(this.props.userInfo);
    }

    componentWillUnmount() {
      destroyGameData(this.props.userInfo.uid);
    }
    render() {
      return (
        <div style={{marginTop: '20px'}}>
          <Typography type="title" gutterBottom>Welcome to Offers Ville</Typography>
          <GameInfo gameData={this.props.gameInfo}/>
        </div>);
    }
}

export default connect(state => state)(GameComponent);