import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { withFirebase } from '../../../containers/Firebase'
import { SignUpFormBase } from './SignUpFormBase'
import { SignUpPage } from './SignUpPage'
import { SignUpLink } from './SignUpLink'

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase)

export { SignUpPage as default, SignUpForm, SignUpLink }
