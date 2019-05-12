const routes = require( 'next-routes' );

// Setup router.
module.exports = routes()
  .add( 'home', '/' )
  .add( 'articles' )
  .add( 'single', '/articles/:slug' )
  .add( 'coding', '/coding' )
  .add( 'wordpress', '/coding/wordpress' )
  .add( 'react', '/coding/react' )