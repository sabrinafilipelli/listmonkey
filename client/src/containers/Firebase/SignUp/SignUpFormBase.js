import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

export const SignUpFormBase = ({ history, firebase }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isAdmin, setIsAdmin] = useState();
  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    user === "";
  const roles = {};

  const onChangeCheckbox = e => {
    setIsAdmin(!isAdmin);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (isAdmin) {
      return (roles["ADMIN"] = "ADMIN");
    }

    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return firebase.user(authUser.user.uid).set({ user, email, roles });
      })
      .then(() => {
        return firebase.doSendEmailVerification();
      })
      .then(() => history.push("./home"))
      .catch(e => {
        console.error(e);
      });
  };

  return (
    <Form
      user={user}
      email={email}
      passwordOne={passwordOne}
      passwordTwo={passwordTwo}
      isAdmin={isAdmin}
      isInvalid={isInvalid}
      setEmail={setEmail}
      setUser={setUser}
      setIsAdmin={setIsAdmin}
      setPasswordOne={setPasswordOne}
      setPasswordTwo={setPasswordTwo}
      onChangeCheckbox={onChangeCheckbox}
      onSubmit={onSubmit}
    />
  );
};
