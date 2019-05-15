import React, { Component } from 'react';

const PageTitle = (props) => {
    return(
        <div className="w3-row">
            <div className="w3-col"> 
                <h1>{props.title}</h1>
                <h2>This is from PageTitle component</h2>
            </div>
        </div>
    )
}
    

export default PageTitle;