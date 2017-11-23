import Avatars from './avatar';
import UsersInfo from './userinfo';
const GameInfoData = {
  john: {
    user: UsersInfo.john,
    level: 3,
    score: {
      current: 800,
      total: 1000
    },
    rank: {
      current: 24,
      participants: 880
    }
  },
  chris: {
    user: UsersInfo.chris,
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