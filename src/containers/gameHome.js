import React, {Component} from 'react';
import GameInfo from '../components/customer/gameInfo';
import GameInfoData from '../components/customer/gameInfo/gameInfo_data';

export default class GameComponent extends Component {
    constructor(){
      super();
      this.state = {
      };
    }
    componentDidMount() {
      this.setState({
        gameInfo: GameInfoData
      });
    }

    render() {
      return (<GameInfo gameData={this.state.gameInfo}/>);
    }
}