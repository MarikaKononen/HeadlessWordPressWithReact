import Head from 'next/head'
import Navigation from '../components/Navigation'
import PostExcerptCard from '../components/PostExcerptCard'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import "../style.css"

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps () {

    // Make request for posts.
    const response = await axios.get( 'http://localhost:8888/codeformylife/wp-json/wp/v2/posts')

    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }
  

  render() {
    return (
      <Fragment>
        <Head>
          <title>Posts</title>
          <meta name="description" content="This is an example of a meta description. This will show up in search results." />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="w3-container">
          <div className="w3-row">
            <Navigation/>
          </div>
          <div className="w3-row">
            <div className="w3-col">  
              <h1>Our Posts Page!</h1>
            </div>  
          </div>    
          <div className="w3-row">

                {
                  this.props.posts.map( post => {
                    return (

                      <div className="w3-col l4 s12" key={ post.id }>

                        <PostExcerptCard title={ post.title.rendered } 
                                         slug={ post.slug } 
                                         excerpt= { post.excerpt.rendered } 
                                         featured_img =  { post.featured_media.rendered} />
                      </div> 
                      
                    )
                  })
                }

            </div>  
        </div>
      </Fragment>
    )
  }
}