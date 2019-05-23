import React, { useState } from "react";

import Form from "./Form";

const SignInFormBase = ({ history, firebase }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await firebase.doSignInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e);
    } finally {
      history.push("./dashboard");
    }
  };

  return (
    <Form
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
};

export { SignInFormBase };