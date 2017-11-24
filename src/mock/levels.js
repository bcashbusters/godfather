import Merchants from './merchants';

const levels = {
  1: {
    tasks: [
      {
        name: Merchants.starbucks.offer[1].title,
        score: 200
      },
      {
        name: Merchants.beats.offer[1].title,
        score: 200
      },
      {
        name: Merchants.starbucks.offer[1].title,
        score: 200
      },
      {
        name: Merchants.amazon.offer[1].title,
        score: 200
      },

    ]
  },
  2: {
    tasks: [
      {
        name: Merchants.amazon.offer[1].title,
        score: 200
      },
      {
        name: 'Upgrade your silver card to gold card',
        score: 200
      },
      {
        name: Merchants.starbucks.offer[1].title,
        score: 200
      },
      {
        name: Merchants.starbucks.offer[1].title,
        score: 200
      },
      {
        name: Merchants.walker.offer[1].title,
        score: 300
      }

    ]
  },
  3: {
    tasks: [
      {
        name: Merchants.amazon.offer[1].title,
        score: 200
      },
      {
        name: Merchants.starbucks.offer[1].title,
        score: 200
      },
      {
        name: Merchants.inox.offer[1].title,
        score: 300
      },
      {
        name: Merchants.walker.offer[1].title,
        score: 300
      }

    ]
  },
};

export default levels;