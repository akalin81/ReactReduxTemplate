import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'


class TestPage extends Component {
  constructor(props) {
    super(props)
  }

  logout(e){
    e.preventDefault();
    //console.log(this.state.username + '/' + this.state.password);
    this.props.actions.logOut();
  }

  render() {

    return (
      <div>
        <div>
          I am { this.props.userName }, and I am totally { this.props.isAuthenticated ? 'valid' : 'not valid' }
        </div>
        <button onClick={this.logout.bind(this)}>sign out</button>
      </div>
    )
  }
}

TestPage.propTypes = {
  token: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  userName: state.auth.userName,
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

// export default connect(state => ({  
//     token: state.auth.token,
//     userName: state.auth.userName,
//     isAuthenticated: state.auth.isAuthenticated
// }))(TestPage)
export default connect(mapStateToProps,mapDispatchToProps)(TestPage)
