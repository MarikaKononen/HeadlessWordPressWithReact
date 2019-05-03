const routes = require( 'next-routes' );

// Setup router.
module.exports = routes()
  .add( 'index', '/' )
  .add( 'Posts2' )
  .add( 'single', '/posts/:slug' );
