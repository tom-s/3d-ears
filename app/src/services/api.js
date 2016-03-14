import Api from './fetch'

const SECURITY_TOKEN = 'mixinEars.token'

export const signUpApi = (email, password) => {
  return Api.post('/user', {
    email,
    password
  })
}

export const signInApi = (email, password) => {
  return Api.post('/login', {
    username: email,
    password
  })
}

export const emailValidateApi = (email, token) => {
  return Api.post('/validation', {
    email,
    token
  })
}