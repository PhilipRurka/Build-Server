'use strict';
/******************************/
/********** PACKAGES **********/
/******************************/
const router = require('express').Router();


/****************************/
/********** ROUTES **********/
/****************************/
// New routes go here
//router.use('/?', require('./routes/?.js'));

// Render the index files when no resources path matches
router.get('/*', (req, res) => {
  res.sendFile('app/client/views/index.html', {
    root: __dirname + '/../../../'
  });
});


/*****************************/
/********** EXPORTS **********/
/*****************************/
module.exports = router;