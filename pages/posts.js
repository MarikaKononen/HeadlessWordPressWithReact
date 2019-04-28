import Head from 'next/head'
import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
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
        <Navigation/>
        <h1>Our Posts Page!</h1>
         <ul>
          {
            this.props.posts.map( post => {
              return (
                
                <li key={ post.id }>
                  <div className="w3-card-4 w3-margin w3-white">
                    <div className="w3-container">
                
                      <Link href={ `/posts/${ post.slug }` }>
                          <a href={ `/posts/${ post.slug }` }>
                              { post.title.rendered }
                              { post.excerpt.rendered }
                          </a>
                      </Link>  
                      
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}