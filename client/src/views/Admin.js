import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { compose } from 'recompose'
import Tasks from '../components/Tasks/index'

import {
  withAuthorization,
  withEmailVerification
} from '../containers/Sessions'

import * as ROUTES from '../constants/routes'
import * as ROLES from '../constants/roles'

const AdminPage = () => (
  <div>
    <h1>Admin</h1>
    <p>The Admin Page is accessible by every signed in admin user.</p>

    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={Tasks} />
    </Switch>
  </div>
)

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN]

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(AdminPage)
