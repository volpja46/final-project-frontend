import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { signUpUser } from '../actions/user'


class SignUpForm extends React.Component {
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
        this.props.signUpUser(this.state.username, this.state.password)
        this.redirect()
  }

  redirect = () => {
    this.props.history.push("/profile")
  }

render(){
  return (

    <div className='signup-form' style={{backgroundColor:'black'}}>
      {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid
        textAlign='center'
        style={{ height: '100%', marginTop: '6em'}}
        verticalAlign='middle'
      >
        <Grid.Column style={{ width: 350, height:500}}>
          <Header as='h1' color='teal' textAlign='center'>
            <Image src='/logo.png' />
            <center>Please create an account</center>
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                onChange={this.handleUsernameChange}
                icon='user'
                iconPosition='left'
                label='Select a username'
              />
              <Form.Input
                onChange={this.handlePasswordChange}
                fluid
                icon='lock'
                iconPosition='left'
                label='Select a password'
                type='password'
              />

              <Button onClick={this.handleLogin} color='teal' fluid size='large'>Create account</Button>
            </Segment>
          </Form>
          <Message>
          Already have an account?   <center> <a href='login'>Login here!</a></center>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}
}

export default withRouter(connect(null, { signUpUser })(SignUpForm))