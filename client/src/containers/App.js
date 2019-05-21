import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'
import { AuthUserContext } from '../containers/Sessions'
import SignOutButton from '../containers/Firebase'

import LandingPage from '../views/Landing'
import SignUpPage from '../containers/Firebase'
import SignInPage from './Firebase/SignIn'
import PasswordForgetPage from '../containers/Firebase'
import HomePage from '../views/Home'
import AccountPage from '../views/Account'
import AdminPage from '../views/Admin'

import { withAuthentication } from './Sessions'

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0 }
})

const App = () => (
  <Route
    render={({ location }) => (
      <div id="site-container">
        <Navigation />
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/login" component={SignInPage} />
              <Route path="/reset" component={PasswordForgetPage} />
              <Route path="/dashboard" component={HomePage} />
              <Route path="/account" component={AccountPage} />
              <Route path="/admin" component={AdminPage} />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </div>
    )}
  />
)
export default withAuthentication(App)

const NavigationAuth = ({ authUser }) => {
  return (
    <nav className="nav-wrapper black">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Profile</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        {!!authUser.roles['ADMIN'] && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  )
}

const NavigationNonAuth = () => (
  <nav className="nav-wrapper black">
    <div className="transparent">
      <ul className="right hide-on-med-and-down">
        <li>
          <Link
            className="waves-effect waves-light pink-text lighten-5 btn transparent"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="waves-effect waves-light pink-text lighten-5 btn transparent"
            to="/login"
          >
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
)
