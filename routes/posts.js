const express = require('express');
const router = express.Router();

/* GET posts index /posts */
router.get('/',(req, res, next) => {
  res.send('INDEX /posts');
});

/* POST posts new /posts/new */
router.post('/new',(req, res, next) => {
  res.send('CREATE /posts/new');
});

/* GET posts show /posts/:id */
router.get('/:id',(req, res, next) => {
  res.send('SHOW /posts/:id');
});

/* EDIT posts edit /posts/:id/edit */
router.get('/:id/edit',(req, res, next) => {
  res.send('EDIT /posts/:id/edit');
});

/* PUT posts update /posts/:id */
router.put('/:id',(req, res, next) => {
  res.send('UPDATE /posts/:id');
});

/* DELETE posts delete /posts/:id */
router.delete('/:id',(req, res, next) => {
  res.send('DELETE /posts/:id');
});

module.exports = router;