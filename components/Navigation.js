import Link from 'next/link'
import React, { Component } from 'react';

/**
 * This utility function allows function calls to be debounced.
 * @param {Function} func Function that requires debouncing
 * @param {Number} wait Wait time in milliseconds between successive invocations
 */
const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }

class Navigation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            scrollPositionY: 0 
  
          }
        }
    componentDidMount() {
            // 32 is the number of milliseconds to debounce
            // I picked this because it's approx 1 frame (ie: 16.7ms)
            // You'll want to modulate that to your taste.
            // Add console.logs in handleScroll function to check if its flooding.
        return window.addEventListener('scroll', debounce(this.handleScroll, 16))
    }
        
    componentWillUnmount() {
        return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
    }
        
    handleScroll = () => {
        // + is unary operator, same as Number(window.scrollY)
        const scrollPositionY = +window.scrollY
        return this.setState({ scrollPositionY })
    }   

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