import NavContainer from '../components/NavContainer'
import Head from '../components/Head'
import React, { Component } from 'react'
import axios from 'axios';
import { Fragment } from 'react'
import "../App.css"

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps( context ) {

    const slug = context.query.slug

    // Make request for posts.
    const response = await axios.get( `http://localhost:8888/codeformylife/wp-json/wp/v2/posts?slug=${ slug }` )
    console.log(response)

    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0]
    }
  }

  render() {
    return (
      <Fragment>
        <Head />
        <NavContainer />
        <div className="w3-container w3-deep-orange content">
              <div className="w3-row ">
                <div className="w3-col l8 s12 w3-card-4 w3-margin w3-white">
                  <h1 className="w3-center">{ this.props.post.title.rendered }</h1>
                  
                  <div className="w3-container">
                      <article
                              className="entry-content"
                              dangerouslySetInnerHTML={ {
                              __html: this.props.post.content.rendered
                          } } />
                  </div>
                </div>    
                </div> 
             </div>
        
      </Fragment>
    )
  }
}