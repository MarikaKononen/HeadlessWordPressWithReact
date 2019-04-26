# Headless WordPress with React and Next.js

A test how to buid front-end with React on top of WordPress. Followed tutorial:  
https://webdevstudios.com/2019/01/03/headless-wordpress-with-react-and-nextjs-1/   

Installing steps   
$ mkdir HeadlessWordPressWithReact   
$ cd HeadlessWordPressWithReact   
$ npm init   
$ npm install --save next react react-dom axios   


# Next.js
This project uses React Framework Next.js for taking care of routing. 
https://nextjs.org  

Next.js will serve each file in /pages under a pathname matching the filename.   
For example, /pages/about.js is served at site.com/about.   


# Folder stucture.  

README.md  
components  
  Navigation.js   
node_modules   
package-lock.json   
package.json   
pages      
  index.js   
  posts.js   

# Axios   
Axios is used for making API request to WordPress. To learn more, see  https://github.com/axios/axios.  
