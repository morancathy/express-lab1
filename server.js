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
    return callback(null, rendered)
  })
})
// configure the app (app.set) for 1st template
app.set('views', './views') // specify the views directory
app.set('view engine', 'whitesox') // register the whitesox view engine

// Mount middleware (app.use)   DO WE USE THIS IN THE HOMEWORK?

// Mount routes
app.get('/abreu', (req, res) => {
  res.render('template', {title: 'Abreu', message: '#79 Jose Abreu', position: '1st Base', content: 'AVG: .253, OBP: .338, HR: 11, RBI: 46'})
})
app.get('/madrigal', (req, res) => {
  res.render('template', {title: 'Madrigal', message: '#1 Nick Madrigal', position: '2nd Base', content: 'AVG: .305, OBP: .349, HR: 2, RBI: 20'})
})
app.get('/moncada', (req, res) => {
  res.render('template', {title: 'Moncada', message: '#10 Yoan Moncada', position: '3rd Base', content: 'AVG: .292, OBP: .419, HR: 5, RBI: 30'})
})
app.get('/anderson', (req, res) => {
  res.render('template', {title: 'Anderson', message: '#7 Tim Anderson', position: 'Shortstop', content: 'AVG: .301, OBP: .337, HR: 6, RBI: 23'})
})
app.get('/vaughn', (req, res) => {
  res.render('template', {title: 'Vaughn', message: '#25 Andrew Vaughn', position: 'Left Field', content: 'AVG: .230, OBP: .312, HR: 5, RBI: 15'})
})
app.get('/garcia', (req, res) => {
  res.render('template', {title: 'Garica', message: '#28 Leury Garica', position: 'Center Field', content: 'AVG: .239, OBP: .229, HR: 0, RBI: 19'})
})
app.get('/eaton', (req, res) => {
  res.render('template', {title: 'Eaton', message: '#12 Adam Eaton', position: 'Right Field', content: 'AVG: .203, OBP: .304, HR: 5, RBI: 27'})
})
app.get('/grandal', (req, res) => {
  res.render('template', {title: 'Grandal', message: '#24 Yasmani Grandal', position: 'Catcher', content: 'AVG: .158, OBP: .395, HR: 9, RBI: 21'})
})
app.get('/mercedes', (req, res) => {
  res.render('template', {title: 'Mercedes', message: '#73 Yermin Mercedes', position: 'Designated Hitter', content: 'AVG: .291, OBP: .349, HR: 7, RBI: 31'})
})

app.get('/standings', (req, res) => {
  res.render('standings', {title: 'ALCentral', message: 'American League Central Standings',
  position: 'Team..............Record',
  content1: 'Chicago White Sox.....37-23',
  content2: 'Cleveland Indians.......32-26',
  content3: 'Kansas City Royals....29-29',
  content4: 'Detroit Tigers.............25-35',
  content5: 'Minnesota Twins........24-36',
  disclaimer: '*As of June 9, 2021'})
})

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
})
