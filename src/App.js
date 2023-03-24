import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={progress:0}
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    //  const apikey='eb1926ecc8a2492daf81b225365cbe37'

    return (

      <div>

        <Router>

          
        <Navbar/>
        <LoadingBar 
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={()=>setprogress(0)}
        />
        <Routes>
        <Route exact path="/" element={<News setprogress={this.setprogress} key='general' category='general'/>} />
        <Route exact path="/sports" element={<News setprogress={this.setprogress} key='sports' category='sports'/>} />
        <Route exact path="/business" element={<News setprogress={this.setprogress} key='business' category='business'/>} />
        <Route exact path="/technology" element={<News setprogress={this.setprogress}  key='technology' category='technology'/>} />
        <Route exact path="/entertainment" element={<News setprogress={this.setprogress}  key='entertainment' category='entertainment'/>} />
        <Route exact path="/science" element={<News setprogress={this.setprogress} key='science' category='science'/>} />
      </Routes>
        </Router>
      </div>
    )
  }
}
