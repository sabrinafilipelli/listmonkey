import React, { useState } from 'react'
import { withFirebase } from '../../containers/Firebase'
import Form from './Form'

const PasswordForgetFormBase = props => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const onSubmit = async e => {
    const { firebase } = props
    const result = await firebase.doPasswordReset(email)
    try {
      setEmail(result)
    } catch (e) {
      setError(error)
    }

    e.preventDefault()
  }

  const onChange = e => {
    setEmail(e.target.value)
  }

  return <Form email={email} onChange={onChange} onSubmit={onSubmit} />
}

export default withFirebase(PasswordForgetFormBase)
