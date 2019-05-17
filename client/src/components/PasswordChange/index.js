import React, { useState } from 'react'
import { withFirebase } from '../../containers/Firebase'
import Form from './Form'

const PasswordChangeForm = ({ firebase }) => {
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')

  const onSubmit = async e => {
    e.preventDefault()
    try {
      return await firebase.doPasswordUpdate(passwordOne)
    } catch (e) {
      console.error(e)
    } finally {
      setPasswordOne('')
      setPasswordTwo('')
    }
  }

  const onChange = e => {
    setPasswordOne(e.target.value)
    setPasswordTwo(e.target.value)
  }

  const isInvalid = passwordOne !== passwordTwo || passwordOne === ''

  return (
    <Form
      passwordOne={passwordOne}
      passwordTwo={passwordTwo}
      isInvalid={isInvalid}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}

export default withFirebase(PasswordChangeForm)
