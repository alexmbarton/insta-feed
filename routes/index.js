var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sup Instagram' });
});

router.get('/instagram/', function(req, res, next) {
	res.render('instagram', { title: 'Sup Instagram', auth_id: req.query.code });
});


module.exports = router;
