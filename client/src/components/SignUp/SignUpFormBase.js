import React, { useState } from 'react'
import * as ROLES from '../../constants/roles'
import * as ROUTES from '../../constants/routes'
import Form from './Form'
import {
  ERROR_CODE_ACCOUNT_EXISTS,
  ERROR_MSG_ACCOUNT_EXISTS
} from '../../constants/SignUp'

export const SignUpFormBase = ({ history, firebase }) => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [isAdmin, setIsAdmin] = useState()
  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    user === ''
  const roles = {}

  const onChangeCheckbox = e => {
    setIsAdmin(!isAdmin)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (isAdmin) {
      return (roles[ROLES.ADMIN] = ROLES.ADMIN)
    }

    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return firebase.user(authUser.user.uid).set({ user, email, roles })
      })
      .then(() => {
        return firebase.doSendEmailVerification()
      })
      .then(() => history.push(ROUTES.HOME))
      .catch(e => {
        e.code = ERROR_CODE_ACCOUNT_EXISTS
        e.message = ERROR_MSG_ACCOUNT_EXISTS
      })
  }

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
  )
}
