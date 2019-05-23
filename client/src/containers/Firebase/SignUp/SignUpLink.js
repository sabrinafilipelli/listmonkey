import React from "react";
import { Link } from "react-router-dom";

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={"./signup"}>Sign Up</Link>
  </p>
);
