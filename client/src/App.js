import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import ProfileAdmin from './components/ProfileAdmin'
import NewPost from './components/NewPost'
import ViewPost from './components/ViewPost'
import ModifyPost from './components/ModifyPost'
import Forgot from './components/Forgot'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profileadmin" component={ProfileAdmin} />
            <Route exact path="/newpost" component={NewPost} />
            <Route exact path="/posts/:posts_id" component={ViewPost} />
            <Route exact path="/modifypost/:posts_id" component={ModifyPost} />
            <Route exact path="/forgot" component={Forgot} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
