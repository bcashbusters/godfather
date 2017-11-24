const merchants = {
  'apple': {
    merchantId: 'aniket.uplopwar@gmail.com',
    name: "Apple",
    account: {
      investment: 1000,
      sales: 500,
    },
    offers: [
      {
        img: 'images/iphonex.jpg',
        title: '10% off on iPhone X',
        author: 'Apple',
        cols: 1
      }
    ]
  },
  'starbucks': {
    merchantId: 'starbucks',
    name: "Starbucks",
    offers: [
      {
        img: 'images/starbucks.jpg',
        title: '15% off on Starbucks',
        author: 'Apple',
        cols: 1
      }
    ]
  },
  'amazon': {
    merchantId: 'amazon',
    name: "Amazon",
    offers: [
      {
        img: 'images/amazon.icon',
        title: '15% off on amazon',
        author: 'Amazon',
        cols: 1
      }
    ]
  },
  'inox': {
  merchantId: 'inox',
    name: "Inox Cinemas",
    offers: [
    {
      img: 'images/inox.icon',
      title: '10 % cashback on 2 Movie Tickets',
      author: 'Inox',
      cols: 1
    }
  ]
  },
  'walker': {
    merchantId: 'Walker Pubs',
    name: "Walker Pubs",
    offers: [
      {
        img: 'images/walker.icon',
        title: '10% off on minimum transaction of $500 ',
        author: 'Walker',
        cols: 1
      }
    ]
  },
};


export default merchants;