const express = require('express');
const router = express.Router({mergeParams: true});
const { asyncErrorHandler } = require('../middleware');
const {
  reviewCreate,
  reviewUpdate,
  reviewDestroy
} = require('../controllers/reviews');


/* POST reviews new /posts/:id/reviews/new */
router.post('/', asyncErrorHandler(reviewCreate));

/* PUT reviews update /reviews/:review_id */
router.put('/:review_id',(req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id');
});

/* DELETE reviews delete /reviews/:review_id */
router.delete('/:review_id',(req, res, next) => {
  res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;