// import React from 'react'
// import { connect } from 'react-redux'
// import { loginUser } from '../actions/user'
//
// class LoginForm extends React.Component {
//   state = {
//     username: "",
//     password: ""
//   }
//
//   handleUsernameChange = (event) => {
//     this.setState({
//       username: event.target.value
//     })
//   }
//
//   handlePasswordChange = (event) => {
//     this.setState({
//       password: event.target.value
//     })
//   }
//
//   handleLoginSubmit = (event) => {
//     event.preventDefault()
//     this.props.loginUser(this.state.username, this.state.password)
//   }
//
//   render() {
//
//     return(
//       <div>
//       <center><h2>Please login</h2>
//       <form onSubmit={this.handleLoginSubmit}>
//         <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input><br/>
//         <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input><br/>
//         <button type="submit">Login</button>
//       </form></center>
//     </div>
//     )
//   }
// }
//
// export default connect(null, { loginUser })(LoginForm)


import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {browserHistory} from 'react-router';


class LoginForm extends React.Component {
  handleLogin = () => {
    this.browserHistory.pushState(null, 'profile');
  }

render(){
  return (
    <div className='login-form'>
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
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' />
            {' '}Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
              />
              <Form.Input
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
            Don't have an account yet? <a href='#'> Sign Up Here!</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}
}

export default LoginForm
