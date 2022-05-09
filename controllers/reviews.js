const Post   = require('../models/post');
const Review = require('../models/review');


module.exports = {
    // create review
    async reviewCreate(req, res, next) {
        let post = await Post.findById(req.params.id);
        req.body.review.author = req.user._id;
        let review = await Review.create(req.body.review);
        post.reviews.push(review);
        post.save();
        req.session.success = 'Review created successfully'
        res.redirect(`/posts/${post.id}`);
 
      },

      // Edit review
      async reviewUpdate (req, res, next) {
        await Review.findByIdAndUpdate(req.params.review_id, req.body.review);
        req.session.success = 'Review updated successfully!';
        res.redirect(`/posts/${req.params.id}`);

  },

        //Review destroy
      async reviewDestroy (req, res, next) {
        await Post.findByIdAndUpdate(req.params.id, {
          $pull: { reviews: req.params.review_id }
        });
        await Review.findByIdAndRemove(req.params.review_id);
        req.session.success = 'Review deleted successfully!';
        res.redirect(`/posts/${req.params.id}`);
      }
}