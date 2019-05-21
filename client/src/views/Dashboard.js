import React from "react";
import { compose } from "recompose";

import {
  withAuthorization,
  withEmailVerification
} from "../containers/Sessions";

const Dashboard = () => (
  <div>
    <h1>Admin</h1>
    <h1>
      If you are planning on refactoring this component, think again. -__-
      Sabrina is currently working on it and using it for some testing. Please
      do not change this code. Or else.
    </h1>
  </div>
);

const condition = authUser => authUser && !!authUser.roles["ADMIN"];

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(Dashboard);
