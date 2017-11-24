import Merchants from './merchants';

const levels = {
  1: {
    tasks: {
      task1: {
        name: Merchants.starbucks.offers[0].title,
        score: 200
      },
      task2: {
        name: Merchants.inox.offers[0].title,
        score: 200,
      },
      task3: {
        name: Merchants.starbucks.offers[0].title,
        score: 200,
      },
      task4: {
        name: Merchants.amazon.offers[0].title,
        score: 200,
      }
    }
  },
  2: {
    tasks: {
      task1: {
        id: 'task1',
        name: Merchants.amazon.offers[0].title,
        score: 200
      },
      task2: {
        name: 'Upgrade your silver card to gold card',
        score: 200
      },
      task3: {
        name: Merchants.starbucks.offers[0].title,
        score: 200
      },
      task4: {
        name: Merchants.starbucks.offers[0].title,
        score: 200
      },
      task5: {
        name: Merchants.walker.offers[0].title,
        score: 300
      }

    }
  },
  3: {
    tasks: {
      task1: {
        name: Merchants.amazon.offers[0].title,
        score: 200
      },
      task2: {
        name: Merchants.starbucks.offers[0].title,
        score: 200
      },
      task3: {
        name: Merchants.inox.offers[0].title,
        score: 300
      },
      task4: {
        name: Merchants.walker.offers[0].title,
        score: 300
      }
    }
  },
};

export default levels;