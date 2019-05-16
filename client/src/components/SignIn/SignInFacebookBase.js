import React, { Component } from 'react'
import {
  ERROR_CODE_ACCOUNT_EXISTS,
  ERROR_MSG_ACCOUNT_EXISTS
} from '../../constants/SignIn'
import * as ROUTES from '../../constants/routes'

export class SignInFacebookBase extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: {}
        })
      })
      .then(() => {
        this.setState({ error: null })
        this.props.history.push(ROUTES.HOME)
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS
        }
        this.setState({ error })
      })
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Facebook</button>
      </form>
    )
  }
}
