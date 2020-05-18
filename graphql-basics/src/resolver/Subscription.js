const Subscription = {
  comment: {
    subscribe(parent, { postId }, { posts, pubsub }, info) {
      const post = posts.find(post => post.id === postId && post.published);

      if (!post) throw new Error('Post not found!');

      return pubsub.asyncIterator(`comment ${postId}`);
    },
  },
  post: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator('post');
    }
  }
};

export default Subscription;
