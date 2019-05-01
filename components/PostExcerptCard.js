import React, { Component } from 'react';
import Link from 'next/link'
import "../style.css"


class PostExcerptCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',  
            slug: '',
            excerpt: '',
            featured_img: ''
        }
    }

    render() {
        return(
            <div className="w3-card-4 w3-margin w3-amber w3-padding-large">
                <Link  href={ `/posts/${ this.props.slug }` }>
                    <a className="w3-text-brown" href={ `/posts/${ this.props.slug }` }>
                        { this.props.title }
                    </a> 
                </Link>  
                { this.props.excerpt }
                { this.props.featured_img }
            </div>
        );
    }
}
export default PostExcerptCard;