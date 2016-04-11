import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import { Link } from 'react-router'

class App extends Component {

  render() {

    return (
      <div>
          {this.props.children}
      </div>
    )
  }
}
export default App;
