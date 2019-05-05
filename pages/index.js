import NavContainer from '../components/NavContainer'
import Head from '../components/Head'
import React, { Component, Fragment } from 'react'
import PostExcerptCard from '../components/PostExcerptCard'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import "../style.css"

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps () {

    // Make request for posts.
    const response = await axios.get( 'https://www.koodielamastani.fi/wp-json/wp/v2/posts/?_embed&per_page=4')


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
              
              <div className="w3-row">
                <div className="w3-col"> 
                  <h1>Home</h1>
                </div>
              </div>

              <div className="w3-row">

                  {
                    this.props.posts.map( post => {
                      return (
                        <div className="w3-col l3 s12" key={ post.id }>
                          
                          <PostExcerptCard title ={ post.title.rendered } 
                                          slug ={ post.slug } 
                                          excerpt = { post.excerpt.rendered }
                                        
                                           
                                          
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

