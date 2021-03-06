import NavContainer from '../components/NavContainer'
import Head from '../components/Head'
import PostExcerptCard from '../components/PostExcerptCard'
import PageTitle from '../components/PageTitle'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import "../App.css"

export default class extends Component {

  constructor(props){
    super(props);
    this.state = {
      titleOfPage: 'About Me'
    }
  }

  // Resolve promise and set initial props.
  static async getInitialProps () {

    // Make request for posts.
    const response = await axios.get( 'http://localhost:8888/codeformylife/wp-json/wp/v2/pages/?slug=about-me')
    
    // Return response to posts object in props.
    return {
      posts: response.data

    }
  }
  

  render() {
    return (
      <Fragment>
        <Head />
        <NavContainer />
        <div className="w3-container w3-deep-orange content">
        
          <PageTitle pageTitle = { this.props.titleOfPage }/>  

          <div className="w3-row">
            {
                  this.props.posts.map( page => {
                    return (
                      <div className="w3-col l6 s12" key={ page.id }>
                        <h3>{ page.title.rendered }</h3>
                        <div dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
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