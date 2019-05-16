import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { SignUpLink } from '../SignUp/SignUpLink'
import PasswordForgetLink from '../PasswordForget'
import { withFirebase } from '../../containers/Firebase'
import { SignInFormBase } from './SignInFormBase'
import { SignInGoogleBase } from './SignInGoogleBase'
import { SignInTwitterBase } from './SignInTwitterBase'
import { SignInFacebookBase } from './SignInFacebookBase'

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignInGoogle />
    <SignInFacebook />
    <SignInTwitter />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
)

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase)

const SignInGoogle = compose(
  withRouter,
  withFirebase
)(SignInGoogleBase)

const SignInFacebook = compose(
  withRouter,
  withFirebase
)(SignInFacebookBase)

const SignInTwitter = compose(
  withRouter,
  withFirebase
)(SignInTwitterBase)

export default SignInPage

export { SignInForm, SignInGoogle, SignInFacebook, SignInTwitter }
