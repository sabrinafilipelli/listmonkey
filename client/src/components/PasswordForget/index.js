import React, { useState } from 'react'
import { withFirebase } from '../../containers/Firebase'

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

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <button disabled={email === ''} type="submit">
        Reset My Password
      </button>
    </form>
  )
}

export default withFirebase(PasswordForgetFormBase)
