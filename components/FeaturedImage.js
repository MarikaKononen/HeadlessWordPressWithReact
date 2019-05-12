import React, { Component } from 'react';
import { Fragment } from 'react'
import "../App.css"



class FeaturedImage extends Component {
    constructor(props){
        super(props);
        this.state = {
            featuredImgUrl: ''
        }
    }

    render() {
        return(
            <Fragment>
                <img className="w3-image" src={this.props.featuredImgUrl} />
            </Fragment>
        );
    }
}
export default FeaturedImage;