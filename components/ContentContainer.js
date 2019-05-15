import React, { Component } from 'react';
import PageTitle from '../components/PageTitle'

const ContentContainer = (props) => {
    return(
        <div>
            <h5>Inside of ContentContainer</h5>
            <PageTitle title = {props.pageTitle}/>
                
        </div>
    )
}    

export default ContentContainer;