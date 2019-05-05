import Link from 'next/link'
import React, { Component } from 'react';

class Navigation extends Component{

    render(){
        return(
            <div className="w3-row" id="navigation" className="sticky">
                <div id="div_top_hypers">
                    <ul id="ul_top_hypers" className="w3-padding-16">
                        <li className="w3-padding-large"><Link  href="/"><a href="/">Home</a></Link></li>
                        <li className="w3-padding-large"><Link href="/about-me"><a href="/about-me">About Me</a></Link></li>
                        <li className="w3-padding-large"><Link href="/articles"><a href="/articles">Articles</a></Link></li>
                        <li className="w3-padding-large"><Link href="/coding"><a href="/coding">Coding</a></Link></li>
                        <li className="w3-padding-large"><Link href="/coding/wordpress"><a href="/coding/wordpress">WordPress</a></Link></li>
                        <li className="w3-padding-large"><Link href="/coding/react"><a href="/coding/react">React</a></Link></li>
                    </ul>
                </div>
            </div>
        )
    } 
    
}

export default Navigation;