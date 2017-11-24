

var admin = require("firebase-admin");

var serviceAccount = require("./god-father-firebase-adminsdk-hi0zq-6e0edfcf3f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://god-father.firebaseio.com"
});
const Avatars = {
  'geeky' : {
    name: 'Geek',
    src: "images/avatars/geeky.gif",
    alt: "geeky"
  },
  'natureLover': {
    name: 'Nature Lover',
    src: "images/avatars/nature-lover.jpg",
    alt: "Nature lover"
  },
  'robber': {
    name: 'Robber',
    src: "images/avatars/robber.png",
    alt: "Robber"
  },
  'saver': {
    name: 'Saver',
    src: "images/avatars/saver.png",
    alt: "Saver"
  }
};

const Merchants = {
  'apple': {
    merchantId: 'aniket.uplopwar@gmail.com',
    name: "Apple",
    account: {
      investment: 1000,
      sales: 500,
    },
    offers: {
      1: {
        img: 'images/iphonex.jpg',
        title: '10% off on iPhone X',
        author: 'Apple',
        cols: 1
      }
    }
  },
  'starbucks': {
    merchantId: 'starbucks',
    name: "Starbucks",
    offers: {
      1: {
        img: 'images/starbucks.jpg',
        title: '15% off on Starbucks',
        author: 'Apple',
        cols: 1
      }
    }
  },
  'amazon': {
    merchantId: 'amazon',
    name: "Amazon",
    offers: {
      1: {
        img: 'images/amazon.icon',
        title: '15% off on amazon',
        author: 'Amazon',
        cols: 1
      }
    }
  },
  'inox': {
    merchantId: 'inox',
    name: "Inox Cinemas",
    offers: {
      1: {
        img: 'images/inox.icon',
        title: '10 % cashback on 2 Movie Tickets',
        author: 'Inox',
        cols: 1
      }
    }
  },
  'walker': {
    merchantId: 'Walker Pubs',
    name: "Walker Pubs",
    offers: {
      1: {
        img: 'images/walker.icon',
        title: '10% off on minimum transaction of $500 ',
        author: 'Walker',
        cols: 1
      }
    }
  }
};

const levels = {
  1: {
    tasks: {
      task1: {
        name: Merchants.starbucks.offers['1'].title,
        score: 200
      },
      task2: {
        name: Merchants.inox.offers['1'].title,
        score: 200,
      },
      task3: {
        name: Merchants.starbucks.offers['1'].title,
        score: 200,
      },
      task4: {
        name: Merchants.amazon.offers['1'].title,
        score: 200,
      }
    }
  },
  2: {
    tasks: {
      task1: {
        id: 'task1',
        name: Merchants.amazon.offers['1'].title,
        score: 200
      },
      task2: {
        name: 'Upgrade your silver card to gold card',
        score: 200
      },
      task3: {
        name: Merchants.starbucks.offers['1'].title,
        score: 200
      },
      task4: {
        name: Merchants.starbucks.offers['1'].title,
        score: 200
      },
      task5: {
        name: Merchants.walker.offers['1'].title,
        score: 300
      }

    }
  },
  3: {
    tasks: {
      task1: {
        name: Merchants.amazon.offers['1'].title,
        score: 200
      },
      task2: {
        name: Merchants.starbucks.offers['1'].title,
        score: 200
      },
      task3: {
        name: Merchants.inox.offers['1'].title,
        score: 300
      },
      task4: {
        name: Merchants.walker.offers['1'].title,
        score: 300
      }
    }
  },
};



/*offerData.map(offer =>
  ref.push(offer));*/



// admin.database().ref("avatars").set(Avatars)
admin.database().ref("levels").set(levels)