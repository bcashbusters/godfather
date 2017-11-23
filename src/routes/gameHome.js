import React, {Component} from 'react';
import GameInfo from '../components/customer/gameInfo/index';
import { connect } from 'react-redux';

 class GameComponent extends Component {
    render() {
      return (<GameInfo gameData={this.props.gameInfo}/>);
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