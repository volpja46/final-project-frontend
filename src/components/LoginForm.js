import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { loginUser } from '../actions/user'


class LoginForm extends React.Component {
    state = {
      username: "",
      password: ""
    }

      handleUsernameChange = (event) => {
        this.setState({
          username: event.target.value
        })
      }

      handlePasswordChange = (event) => {
        this.setState({
          password: event.target.value
        })
      }

      handleLogin = () => {
        this.props.loginUser(this.state.username, this.state.password)
        console.log(this.props)
        this.redirect()
  }

  redirect = () => {
    this.props.history.push("/profile")
  }

render(){
  return (
    <div padded="very" className='login-form' style={{ backgroundColor: 'white'}}>
      {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%; color:black
        }
      `}</style>
      <Grid
        textAlign='center'
        style={{ height: '100%', marginTop:"0.65em"}}
        verticalAlign='middle'
      >
        <Grid.Column style={{ width: 285, height:355, color:'black' }}>
          <Header as='h1' color='teal' textAlign='center'>
            <Image src='/logo.png' />
            <center>Login to your account</center>
          </Header>
          <Form size='massive'>
            <Segment padded>
              <Form.Input
                onChange={this.handleUsernameChange}
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
              />
              <Form.Input
                onChange={this.handlePasswordChange}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Button onClick={this.handleLogin} color='teal' fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
          Don't have an account yet?   <center> <a href='signup'> Sign Up Here!</a></center>
          </Message>
        </Grid.Column>
      </Grid>
  </div>
  )
}
}

export default withRouter(connect(null, { loginUser })(LoginForm))
