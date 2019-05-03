import React, { Component } from 'react'
import Link from 'next/link'
import FeaturedImage from './FeaturedImage'
import "../style.css"



class PostExcerptCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',  
            slug: '',
            excerpt: '',
            featuredImageUrl: ''
        }
    }


    render() {
        return(
            <div className="w3-card w3-margin w3-margin-top w3-amber">
                <div className="w3-center">
                    <FeaturedImage featuredImgUrl = { this.props.featuredImageUrl }  />
                </div>
                <Link  href={ `/posts/${ this.props.slug }` }>
                    <a className="w3-text-brown" href={ `/posts/${ this.props.slug }` }>
                        { this.props.title }
                    </a> 
                </Link>  
                { this.props.excerpt }
                
            </div>
        );
    }
}
export default PostExcerptCard;