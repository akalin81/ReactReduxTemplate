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
      password: '',
      usernameReg: '',
      passwordReg: ''
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


  // register

  register(e){
    e.preventDefault();
    //console.log(this.state.username + '/' + this.state.password);
    this.props.actions.registerUser(this.state.usernameReg, this.state.passwordReg, '/test');
  }

  onChangeUserReg(e)
  {
    this.setState({usernameReg: e.target.value})
  }
  onChangePassReg(e)
  {
    this.setState({passwordReg: e.target.value})
  }



  render() {

    return (
      <div>
          <form role='form'>
            <div>
              <h4>Sign In</h4>
              <input type='text' placeholder='Username' value={this.state.username} onChange={this.onChangeUser.bind(this)}/>
              <input type='password' placeholder='Password' value={this.state.password} onChange={this.onChangePass.bind(this)}/>
              <button type='submit' onClick={this.login.bind(this)}>Submit</button>
            </div>
          </form>
            <div>
              <h4>Register</h4>
              <input type='text' placeholder='Username' value={this.state.usernameReg} onChange={this.onChangeUserReg.bind(this)}/>
              <input type='password' placeholder='Password' value={this.state.passwordReg} onChange={this.onChangePassReg.bind(this)}/>
              <button type='submit' onClick={this.register.bind(this)}>Submit</button>
            </div>
          <form role='form'>

          </form>
          <br/><br/>
        Try to click on  <Link to={`/test`}>protected page!.. Do it!! I dare you!</Link>
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
