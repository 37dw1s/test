var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/student-list', function(req, res, next) {
    var sql='SELECT * FROM student';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('student-list', { title: 'Stu List', userData: data});
  });
});
module.exports = router;