import Navigation from '../components/Navigation'
import Head from '../components/Head'
import PostExcerptCard from '../components/PostExcerptCard'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import "../style.css"

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps () {

    // Make request for posts.
    const response = await axios.get( 'http://localhost:8888/codeformylife/wp-json/wp/v2/posts/?_embed')
    
    // Return response to posts object in props.
    return {
      posts: response.data

    }
  }
  

  render() {
    return (
      <Fragment>
        <Head />
        <div className="w3-container w3-deep-orange">
          <div className="w3-row">
            <Navigation/>
          </div>
          <div className="w3-row">
            <div className="w3-col">  
              <h1>All Articles</h1>
            </div>  
          </div>    
          <div className="w3-row">

                {
                  this.props.posts.map( post => {
                    return (
                      <div className="w3-col l4 s12" key={ post.id }>
                        
                        <PostExcerptCard title ={ post.title.rendered } 
                                         slug ={ post.slug } 
                                         excerpt = { post.excerpt.rendered }
                                         featuredImageUrl =  {post.featured_media ?  post._embedded['wp:featuredmedia']['0'].media_details.sizes['thumbnail'].source_url : null}  
                                        
                        />
                                      
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