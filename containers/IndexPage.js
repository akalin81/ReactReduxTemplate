import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { Col, Panel,Input,Button,Navbar, Nav,Row, Grid,Jumbotron } from 'react-bootstrap';

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

  render () {
    var headStyle = {
        color: 'white',
        backgroundColor:'black',
        textAlign: 'Left',
        verticalAlign: 'Top',
        paddingLeft:20,
        paddingTop:2
      };
      var headStyleRight = {
          color: 'white',
          backgroundColor:'black',
          textAlign: 'Right',
          verticalAlign: 'Top',
          paddingRight:20,
          paddingTop:2
        };

      var jumboStyle = {
          color: 'white',
          backgroundColor:'black',
          textAlign: 'Center',
          verticalAlign: 'Top',
          paddingLeft:20,
          paddingTop:10,
          paddingBottom:10,
          paddingRight:20
        };


    var divStyle = {
        color: 'black',
        fontSize: 14,
        paddingTop:10,
        textAlign: 'Left',
        verticalAlign: 'Top'
      };
    return (
        <div>
        <Row className="show-grid">
          <Col xs={12} style={headStyle}>
            <Col xs={1}>

            </Col>
            <Col xs={10}>
                <Col xs={10}>My Company.com</Col>
                <Col xs={2} style={headStyleRight}>Beta 1.0</Col>
            </Col>
            <Col xs={1}>

            </Col>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} style={divStyle}>
            <Col xs={1}>

            </Col>
            <Col xs={10}>
              <Col xs={9}>
              <Jumbotron style={jumboStyle}>
                  <h1>Hello, world!</h1>
              </Jumbotron>
              </Col>
              <Col xs={3}>

                  <div>
                      <Panel header="Sign In">
                        <form role='form'>
                          <Input type='text' placeholder='Username' value={this.state.username} onChange={this.onChangeUser.bind(this)}/>
                          <Input type='password' placeholder='Password' value={this.state.password} onChange={this.onChangePass.bind(this)}/>
                          <Button type='submit' onClick={this.login.bind(this)}>Submit</Button>
                        </form>
                      </Panel>

                      <Panel header="Register">
                        <form role='form'>
                          <Input type='text' placeholder='Username' value={this.state.usernameReg} onChange={this.onChangeUserReg.bind(this)}/>
                          <Input type='password' placeholder='Password' value={this.state.passwordReg} onChange={this.onChangePassReg.bind(this)}/>
                          <Button type='submit' onClick={this.register.bind(this)}>Submit</Button>
                        </form>
                      </Panel>
                  </div>
              </Col>
            </Col>
            <Col xs={1}>

            </Col>
          </Col>
        </Row>
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
