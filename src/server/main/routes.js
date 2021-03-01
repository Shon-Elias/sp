var express = require('express')
var router = express.Router();
var pool = require('./db');
var cors = require('cors')

var corsOptions = {
  origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.post('/api/1/assignment/quotes', cors(corsOptions),  (req, res, next) => {

  console.log('the cors req body:', req.body)

  // res.json({msg: 'This is CORS-enabled for only example.com.'})
})



// POST ROUTES
router.post('/api/post/postuser', (req, res, next) => {
  console.log('the req body:', req.body)

  const values = [req.body.zipCode, req.body.gender, req.body.dateOfBirth, req.body.salary]
  pool.query(`INSERT INTO users(zipcode, gender, birthdate, income) VALUES($1, $2, $3, $4)`, values, (q_err, q_res) => {
    console.log("this is res backend", res.status)
    // console.log("this is q_res.rows", res.json(q_res.rows))
    if(q_err) return next(q_err);
    res.json(q_res.rows);
    // res.status(201).send(`User added with ID: ${q_res.id}`)

  })
})


module.exports = router;



