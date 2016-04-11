import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'


class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

  }

  login(e){
    e.preventDefault();
    //console.log(this.state.username + '/' + this.state.password);
    this.props.actions.loginUser(this.state.username, this.state.password, '/test');
  }

  onChangeUser(e)
  {
    this.setState({username: e.target.value})
  }
  onChangePass(e)
  {
    this.setState({password: e.target.value})
  }

  render() {

    return (
      <div>
          <form role='form'>
            <div>
              <input type='text' placeholder='Username' value={this.state.username} onChange={this.onChangeUser.bind(this)}/>
              <input type='password' placeholder='Password' value={this.state.password} onChange={this.onChangePass.bind(this)}/>
              <button type='submit' onClick={this.login.bind(this)}>Submit</button>
            </div>
          </form>


        I am in index bitch <Link to={`/test`}>test</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(IndexPage)
