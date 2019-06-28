import express from 'express';
const { router } = require('express');
const bodyParser = require('body-parser');
const connection = require('./conf');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended:true
}));

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

export default router;
