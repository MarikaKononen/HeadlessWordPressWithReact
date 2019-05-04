const routes = require( 'next-routes' );

// Setup router.
module.exports = routes()
  .add( 'index', '/' )
  .add( 'posts' )
  .add( 'single', '/posts/:slug' )
  .add( 'coding', '/coding' )
  .add( 'wordpress', '/coding/wordpress' )
  .add( 'react', '/coding/react' )