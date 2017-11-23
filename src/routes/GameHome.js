import React, {Component} from 'react';
import GameInfo from '../components/customer/gameSummary/index';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';

 class GameComponent extends Component {
    render() {
      return (
        <div style={{marginTop: '20px'}}>
          <Typography type="title" gutterBottom>Welcome {this.props.gameInfo.user.avatar.name}</Typography>
          <GameInfo gameData={this.props.gameInfo}/>
        </div>);
    }
}


const mapStateToProps = (state) => {
  return {
    gameInfo: state.gameInfo ? state.gameInfo:{},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);