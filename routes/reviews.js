const express = require('express');
const router = express.Router({mergeParams: true});
const { asyncErrorHandler, isReviewAuthor } = require('../middleware');
const {
  reviewCreate,
  reviewUpdate,
  reviewDestroy
} = require('../controllers/reviews');


/* POST reviews new /posts/:id/reviews/new */
router.post('/', asyncErrorHandler(reviewCreate));

/* PUT reviews update /reviews/:review_id */
router.put('/:review_id', isReviewAuthor, asyncErrorHandler(reviewUpdate));

/* DELETE reviews delete /reviews/:review_id */
router.delete('/:review_id', isReviewAuthor, asyncErrorHandler(reviewDestroy));

module.exports = router;