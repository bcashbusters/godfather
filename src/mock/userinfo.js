import Avatars from './avatar';

const UsersInfo = {
  yogesh: {
    name: 'Yogesh',
    avatar: Avatars.geeky,
    cardBalance: '$70',
    earnedRewardsPoints: '5476 pts',
    level:{
      id:1,
      task1: false,
      task2: false,
      task3: false,
      task4: false,
      task5: 'unassigned',
      task6: 'unassigned',
    }
  },
  hemant: {
    name: 'Hemant',
    avatar: Avatars.robber,
    cardBalance: '-$30',
    earnedRewardsPoints: '2476 pts',
    level:{
      id:1,
      task1: false,
      task2: false,
      task3: false,
      task4: false,
      task5: 'unassigned',
      task6: 'unassigned',
    }
  }
}

export default UsersInfo;