export default [

  {
    name: 'Wavez',
    image: './images/Wavez.png',
    slideshow: ['Wavez1.png', 'Wavez2.png', 'Wavez3.png', 'Wavez4.png', 'Wavez5.png'],
    description: 'Wavez is a RESTful CRUD application revolving around crowd-sourced beach info, particularly surfing conditions. Users can create ' +
      'accounts in order to add new beaches or leave comments on beaches currently on record. I would like to eventually create user profiles and push it ' +
      'towards a social media platform demo. A demo account can be accessed through admin1:admin1.',
    live: 'https://wavezapp.herokuapp.com/',
    hostIcon: 'fab fa-github',
    repo: 'https://github.com/brumack/wavez',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'HTML', 'CSS', 'Weather.gov API'],
    main: true
  },
  {
    name: 'Real Estate Agent Site',
    image: './images/Realty.png',
    description: 'This is an example multi-page website built for a real estate agent. I have incoprorated a few 3rd party tools, ' +
      'such as a search portal and a social media feed.',
    slideshow: ['RE1.png', 'RE2.png', 'RE3.png', 'RE4.png', 'RE5.png', 'RE6.png'],
    live: 'https://rumackrealestate.herokuapp.com/',
    hostIcon: 'fab fa-github',
    repo: null,
    tech: ['Javascript', 'jQuery', 'Materialize CSS', 'HTML', 'CSS'],
    main: true
  },
  {
    name: 'Portfolio',
    image: './images/Portfolio.png',
    description: `You're looking at it!`,
    slideshow: ['Portfolio1.png'],
    live: 'https://www.bradrumack.com',
    hostIcon: 'fab fa-github',
    repo: 'https://github.com/brumack/portfolio',
    tech: ['Javacript', 'Bootstrap', 'HTML', 'CSS'],
    main: false
  },
  {
    name: 'Tetra',
    image: './images/Tetra.png',
    description: `Tetra is a cryptocurrency portfolio manager. Users create their own accounts, and then add their own assets, or assets ` +
      `they would like to track to their dashboard. Balances for each asset can be added, and then used to calculate a total portfolio balance. ` +
      `A demo account can be accessed under 'demo@demo.com:demodemo.`,
    slideshow: ['Tetra1.png', 'Tetra2.png', 'Tetra3.png', 'Tetra4.png'],
    live: 'https://tetra-crypto.herokuapp.com/',
    hostIcon: 'fab fa-github',
    repo: 'https://github.com/brumack/tetra',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cryptocompare API', 'HTML', 'CSS', 'Javascript'],
    main: true
  },
  {
    name: 'NetBot',
    image: './images/bitcoin.png',
    description: 'Netbot is an automated cryptocurrency trading script. Through continuous continusous statisctial analysis of price action, ' +
      'Netbot watches every single trade for specific conditions. Should those conditions occur, a buy order is placed at a specific rate and left ' +
      'for a period of time. If the order fills, a sell order is then placed at a specific rate, while the script watches for a potential stop-loss condition.',
    slideshow: ['Netbot1.png', 'Netbot2.png'],
    live: null,
    hostIcon: 'fab fa-github',
    repo: 'https://github.com/brumack/netBot',
    tech: ['Node.js', 'Express.js', 'Binance API', 'Slack API', 'Marionette'],
    main: true
  },
  {
    name: 'Simon',
    image: './images/Simon.png',
    description: `A recreation of the game Simon from the 90's. Correct memory of a series of 14 buttons results in a win. Strict mode will ` +
      `reset the game upon any incorrect entry.`,
    slideshow: ['Simon1.png'],
    live: 'https://brumack.github.io/Simon/',
    hostIcon: 'fab fa-github',
    repo: 'https://github.com/brumack/Simon',
    tech: ['Javascript', 'jQuery', 'HTML', 'CSS'],
    main: false
  },
  {
    name: 'Pomodoro Clock',
    image: './images/Pomodoro.png',
    description: 'A simple task timer. One value sets the task time, and the other the break time. Task time and break time will ' +
      'alternate until both are exhausted.',
    slideshow: ['Pomodoro1.png'],
    live: 'https://brumack.github.io/Pomodoro-Clock/',
    hostIcon: 'fab fa-github',
    repo: 'https://github.com/brumack/Pomodoro-Clock',
    tech: ['Javascript', 'jQuery', 'HTML', 'CSS'],
    main: false
  },
  {
    name: 'WikiSearch',
    image: './images/Wiki.png',
    description: 'A simple wikipedia search app. Results are generated from an entered keyword(s) and populated on the screen. Clicking ' +
      'a result will direct the user to the appropriate Wikipedia article.',
    slideshow: ['Wikisearch1.png'],
    live: 'https://brumack.github.io/WikiSearch/',
    hostIcon: 'fab fa-github',
    repo: 'https://github.com/brumack/WikiSearch',
    tech: ['Javascript', 'Wikipedia API', 'jQuery', 'HTML', 'CSS'],
    main: false
  }
]
