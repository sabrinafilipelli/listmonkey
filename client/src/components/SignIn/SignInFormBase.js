import React, { useState } from 'react'
import * as ROUTES from '../../constants/routes'
import Form from './Form'

const SignInFormBase = ({ history, firebase }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async e => {
    try {
      await firebase.doSignInWithEmailAndPassword(email, password)
    } catch (e) {
      console.error(e)
    } finally {
      history.push(ROUTES.HOME)
    }
  }
  const onChange = e => {
    setEmail(e.target.value)
    setPassword(e.target.value)
  }

  return (
    <Form
      email={email}
      password={password}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}

export { SignInFormBase }
