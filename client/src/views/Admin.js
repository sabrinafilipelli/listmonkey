import React from "react";
import { compose } from "recompose";

import {
  withAuthorization,
  withEmailVerification
} from "../containers/Sessions";

const AdminPage = () => (
  <div>
    <h1>Admin</h1>
    <p>The Admin Page is accessible by every signed in admin user.</p>
  </div>
);

const condition = authUser => authUser && !!authUser.roles["ADMIN"];

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(AdminPage);
