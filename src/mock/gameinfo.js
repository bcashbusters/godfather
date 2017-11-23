import Avatars from './avatar';
import UsersInfo from './userinfo';
const GameInfoData = {
  yogesh: {
    user: UsersInfo.yogesh,
    level: 3,
    score: {
      current: 800,
      total: 1000
    },
    rank: {
      current: 240,
      participants: 880
    }
  },
  hemant: {
    user: UsersInfo.hemant,
    level: 2,
    score: {
      current: 600,
      total: 1000
    },
    rank: {
      current: 45,
      participants: 880
    }
  }

};

export default GameInfoData;