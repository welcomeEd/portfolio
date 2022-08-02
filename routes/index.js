var express = require('express');
var router = express.Router();


//home 
router.get('/',(req,res,next) => {
  res.render('index');
});

router.get('/skills/',(req,res,next) => {
  res.render('skills');
});

router.get('/resume/', (req,res,next) => {
  res.render('resume');
});

router.get('/contact/', (req,res,next) => {
  res.render('contact');
});

router.get('/education/', (req,res,next) => {
  res.render('education')
});

module.exports = router;
