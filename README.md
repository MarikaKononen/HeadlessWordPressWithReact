# Headless WordPress with React and Next.js

A test how to buid front-end with React on top of WordPress. Followed tutorial:  
https://webdevstudios.com/2019/01/03/headless-wordpress-with-react-and-nextjs-1/   

Installing steps   
$ mkdir HeadlessWordPressWithReact   
$ cd HeadlessWordPressWithReact   
$ npm init   
$ npm install --save next react react-dom axios   


# Next.js
This project uses React Framework Next.js for taking care of direct routing. 
https://nextjs.org  

Next.js will serve each file in /pages under a pathname matching the filename.   
For example, /pages/about.js is served at site.com/about.   


# Folders and Files     

README.md  
components  
&nbsp;  Navigation.js   
node_modules   
package-lock.json   
package.json   
pages      
&nbsp;  index.js   
&nbsp;  posts.js   
&nbsp;  single.js      
routes.js   
server.js   

# Axios   
Axios is used for making API request to WordPress. To learn more, see  https://github.com/axios/axios.  

# Express   
Express is Node.js web application framework which is needed for dynamic routing.   
https://expressjs.com   

Install express and next-routes:   
$ npm install express next-routes --save   

Next-routes is dynamic routes for Next.js
https://github.com/fridays/next-routes

# Bootstrap   

https://facebook.github.io/create-react-app/docs/adding-bootstrap   

Install Bootstrap   
$ npm install --save bootstrap

# CSS   
CSS loader   
$ npm install --save-dev css-loader   

# Styled with W3.CSS - CSS Framework   

https://www.w3schools.com/w3css/default.asp   

# Next.js + CSS   
Import .css files in your Next.js project   
https://github.com/zeit/next-plugins/tree/master/packages/next-css   

$ npm install --save @zeit/next-css   

Create a next.config.js in the root of your project (next to pages/ and package.json)   

// next.config.js   
const withCSS = require('@zeit/next-css')   
module.exports = withCSS()   
Create a CSS file style.css   

.example {   
 &nbsp;  font-size: 50px;   
}   
Create a page file pages/index.js

import "../style.css"   

export default () => <div className="example">Hello World!</div>   
  

# node-wpapi 

http://wp-api.org/node-wpapi/installation/#install-with-npm


# How to get Featured Image from WordPress JSON API   
 
http://localhost:8888/codeformylife/wp-json/wp/v2/posts/?_embed   

{post.featured_media ?  post._embedded['wp:featuredmedia']['0'].media_details.sizes['thumbnail'].source_url : null}  

# WordPress rest API - fetch posts categories   

https://github.com/WP-API/WP-API/issues/2949   
Find ID:   
<your-page>/wp/v2/categories?slug=some-category-slug
Do request:   
<your-page>/wp/v2/posts?categories=some-category-id
