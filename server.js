// require modules
const express = require('express');
// create the express app
const app = express();
//create a file system module
const fs = require('fs');
// define view engine and functions for 1st template
app.engine('whitesox', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return callback(err)
    }
    const rendered = content.toString()     //have to turn into string
      .replace('#title#', `<title>${options.title}</title>`)
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#h2#', '<h2>' + options.position + '</h2>')
      .replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#content1#','<div>'+ options.content1 + '</div>' )
      .replace('#content2#','<div>'+ options.content2 + '</div>' )
      .replace('#content3#','<div>'+ options.content3 + '</div>' )
      .replace('#content4#','<div>'+ options.content4 + '</div>' )
      .replace('#content5#','<div>'+ options.content5 + '</div>' )
      .replace('#disclaimer#','<div>'+ options.disclaimer + '</div>' )
      .replace('#link1#','<a href=' + options.link1 + '>' + options.link1Text + '</a>')
      .replace('#link2#','<a href=' + options.link2 + '>' + options.link2Text + '</a>')
      .replace('#link3#','<a href=' + options.link3 + '>' + options.link3Text + '</a>')
    return callback(null, rendered)
  })
})
// configure the app (app.set)
app.set('views', './views') // specify the views directory
app.set('view engine', 'whitesox') // register the whitesox view engine

// Mount routes
app.get('/abreu', (req, res) => {
  res.render('template', {title: 'Abreu', message: '#79 Jose Abreu', position: '1st Base', content: 'AVG: .253, OBP: .338, HR: 11, RBI: 46', disclaimer: '*As of June 9, 2021',
  link3: 'http://localhost:3000/standings', link3Text: 'Standings', link1: linkFunction('/abreu'), link1Text: 'Next Player', link2: linkFunction2('/abreu'), link2Text: 'Previous Player'})
})
app.get('/madrigal', (req, res) => {
  res.render('template', {title: 'Madrigal', message: '#1 Nick Madrigal', position: '2nd Base', content: 'AVG: .305, OBP: .349, HR: 2, RBI: 20', disclaimer: '*As of June 9, 2021',
  link3: 'http://localhost:3000/standings', link3Text: 'Standings', link1: linkFunction('/madrigal'), link1Text: 'Next Player', link2: linkFunction2('/madrigal'), link2Text: 'Previous Player'})
})
app.get('/moncada', (req, res) => {
  res.render('template', {title: 'Moncada', message: '#10 Yoan Moncada', position: '3rd Base', content: 'AVG: .292, OBP: .419, HR: 5, RBI: 30', disclaimer: '*As of June 9, 2021',
  link3: 'http://localhost:3000/standings', link3Text: 'Standings', link1: linkFunction('/moncada'), link1Text: 'Next Player', link2: linkFunction2('/moncada'), link2Text: 'Previous Player'})
})
app.get('/anderson', (req, res) => {
  res.render('template', {title: 'Anderson', message: '#7 Tim Anderson', position: 'Shortstop', content: 'AVG: .301, OBP: .337, HR: 6, RBI: 23', disclaimer: '*As of June 9, 2021',
  link3: 'http://localhost:3000/standings', link3Text: 'Standings', link1: linkFunction('/anderson'), link1Text: 'Next Player', link2: linkFunction2('/anderson'), link2Text: 'Previous Player'})
})
app.get('/vaughn', (req, res) => {
  res.render('template', {title: 'Vaughn', message: '#25 Andrew Vaughn', position: 'Left Field', content: 'AVG: .230, OBP: .312, HR: 5, RBI: 15', disclaimer: '*As of June 9, 2021',
  link3: 'http://localhost:3000/standings', link3Text: 'Standings', link1: linkFunction('/vaughn'), link1Text: 'Next Player', link2: linkFunction2('/vaughn'), link2Text: 'Previous Player'})
})
app.get('/garcia', (req, res) => {
  res.render('template', {title: 'Garica', message: '#28 Leury Garica', position: 'Center Field', content: 'AVG: .239, OBP: .229, HR: 0, RBI: 19', disclaimer: '*As of June 9, 2021',
  link3: 'http://localhost:3000/standings', link3Text: 'Standings', link1: linkFunction('/garcia'), link1Text: 'Next Player', link2: linkFunction2('/garcia'), link2Text: 'Previous Player'})
})
app.get('/eaton', (req, res) => {
  res.render('template', {title: 'Eaton', message: '#12 Adam Eaton', position: 'Right Field', content: 'AVG: .203, OBP: .304, HR: 5, RBI: 27', disclaimer: '*As of June 9, 2021',
  link3: 'http://localhost:3000/standings', link3Text: 'Standings', link1: linkFunction('/eaton'), link1Text: 'Next Player', link2: linkFunction2('/eaton'), link2Text: 'Previous Player'})
})
app.get('/grandal', (req, res) => {
  res.render('template', {title: 'Grandal', message: '#24 Yasmani Grandal', position: 'Catcher', content: 'AVG: .158, OBP: .395, HR: 9, RBI: 21', disclaimer: '*As of June 9, 2021',
  link3: 'http://localhost:3000/standings', link3Text: 'Standings', link1: linkFunction('/grandal'), link1Text: 'Next Player', link2: linkFunction2('/grandal'), link2Text: 'Previous Player'})
})
app.get('/mercedes', (req, res) => {
  res.render('template', {title: 'Mercedes', message: '#73 Yermin Mercedes', position: 'Designated Hitter', content: 'AVG: .291, OBP: .349, HR: 7, RBI: 31', disclaimer: '*As of June 9, 2021',
  link3: 'http://localhost:3000/standings', link3Text: 'Standings', link1: linkFunction('/mercedes'), link1Text: 'Next Player', link2: linkFunction2('/mercedes'), link2Text: 'Previous Player'})
})

app.get('/standings', (req, res) => {
  res.render('standings', {title: 'ALCentral', message: 'American League Central Standings',
  position: 'Team..............Record',
  content1: 'Chicago White Sox.....37-23',
  content2: 'Cleveland Indians.......32-26',
  content3: 'Kansas City Royals....29-29',
  content4: 'Detroit Tigers.............25-35',
  content5: 'Minnesota Twins........24-36',
  disclaimer: '*As of June 9, 2021',
  link1: 'http://localhost:3000/abreu', link1Text: 'Return to Players' })
})

// Bonus Part
//Function for 'next player' link
const linkFunction = (player) =>{
  const players = ['/abreu', '/madrigal', '/moncada', '/anderson', '/vaughn', '/garcia', '/eaton', '/grandal', '/mercedes'];
  let playerIndex = players.indexOf(player, 0);

  if(playerIndex === players.length-1){
    let link = players[0];
    return `http://localhost:3000${link}`
  }

  let link = players[playerIndex+1];
  return `http://localhost:3000${link}`
}

//Function for 'previous player' link
const linkFunction2 = (player) =>{
  const players = ['/abreu', '/madrigal', '/moncada', '/anderson', '/vaughn', '/garcia', '/eaton', '/grandal', '/mercedes'];
  let playerIndex = players.indexOf(player, 0);

  if(playerIndex === 0){
    let link = players[players.length-1];
    return `http://localhost:3000${link}`
  }
  let link = players[playerIndex-1];
  return `http://localhost:3000${link}`
}

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
})
