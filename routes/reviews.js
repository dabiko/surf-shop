const express = require('express');
const router = express.Router({mergeParams: true});

/* GET reviews index /posts/:review_id/reviews */
router.get('/',(req, res, next) => {
  res.send('INDEX /posts/:id/reviews');
});

/* POST reviews new /posts/:id/reviews/new */
router.post('/',(req, res, next) => {
  res.send('CREATE /posts/:id/reviews/new');
});

/* EDIT reviews edit /posts/:review_id/reviews */
router.get('/:review_id/edit',(req, res, next) => {
  res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

/* PUT reviews update /reviews/:review_id */
router.put('/:review_id',(req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id');
});

/* DELETE reviews delete /reviews/:review_id */
router.delete('/:review_id',(req, res, next) => {
  res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;