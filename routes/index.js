var express = require('express');
var router = express.Router();
var Lake = require('../models/lake');

/* GET home page. */
router.get('/', function(req, res, next) {
  Lake.find(function(err, lakes){
    if(err){
      return next(err);
    }
  res.render('index', { lakes: lakes });
})
});

// POST to home page - handle form submit
router.post('/', function(req, res, next){
  console.log(req.body);

  var lakeData = {};

  for (var field in req.body){
    if(req.body[field]){
      lakeData[field]=req.body[field];
    }
  }
var lake = Lake(lakeData);

  lake.save(function(err, newlake){
    if(err){
      if(err.name == 'ValidationError'){
        var messages=[];
        for(var err_name in err.errors){
          messages.push(err.errors[err_name].message);
        }
    req.flash('error', messages);
    return res.redirect('/')
  }
  if(err.code==11000){
    req.flash('error', 'A lake with that name already exists');
    return res.redirect('/')
  }
    return next(err);
  }

  console.log(newlake);
  return res.redirect('/')
  })
});

module.exports = router;
