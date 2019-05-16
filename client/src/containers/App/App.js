import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from '../../views/Navigation'
import LandingPage from '../../views/Landing'
import SignUpPage from '../../components/SignUp/index'
import SignInPage from '../../components/SignIn/index'
import PasswordForgetPage from '../../components/PasswordForget/index'
import HomePage from '../../views/Home'
import AccountPage from '../../views/Account'
import AdminPage from '../../views/Admin'

import * as ROUTES from '../../constants/routes'
import { withAuthentication } from '../Sessions'

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
)

export default withAuthentication(App)
