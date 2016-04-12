import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { Col, Panel,Input,Button,Navbar, Nav,Row, Grid,Carousel } from 'react-bootstrap';

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
    return (
        <div>
        <Row className="show-grid">
          <Col xs={12} className="mainHead">
            <Col xs={1}>

            </Col>
            <Col xs={10} >
                <Col xs={10} className="mainHeadLeft">My Company.com</Col>
                <Col xs={2} className="mainHeadRight">Beta 1.0</Col>
            </Col>
            <Col xs={1}>

            </Col>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} className="mainBody" >
            <Col xs={1}>

            </Col>
            <Col xs={10} >
              <Col xs={9}>
              <Carousel>
                  <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
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
