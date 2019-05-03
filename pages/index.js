import Navigation from '../components/Navigation'
import Head from '../components/Head'
import { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../style.css"

export default () => (
  <Fragment>
      <Navigation />
      <Head />
      <div className="w3-container w3-deep-orange">
        <div className="w3-row">
          <div className="w3-col"> 
          <h1>Your new server-side rendered React.js app!</h1>
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-col"> 
          
          </div>
        </div>    
      </div>   
             
      
  </Fragment>
)