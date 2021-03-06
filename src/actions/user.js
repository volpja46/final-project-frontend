export function loginUser(username, password) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {username, password} })
    })
    .then(response => response.json())
    .then(userData => {
      localStorage.setItem('token', userData.jwt)
      dispatch(setCurrentUser(userData))
    })
  }
}

export function signUpUser(username, password) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {username, password} })
    })
    .then(response => response.json())
    .then(userData => {
      localStorage.setItem('token', userData.jwt)
      dispatch(setCurrentUser(userData))
    })
  }
}

export function setCurrentUser(userData) {
  return {
    type: "SET_CURRENT_USER",
    payload: userData
  }
}
