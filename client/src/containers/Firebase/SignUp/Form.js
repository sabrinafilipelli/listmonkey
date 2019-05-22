import React from 'react'

const Form = props => {
  const {
    user,
    email,
    passwordOne,
    passwordTwo,
    setUser,
    setEmail,
    setPasswordOne,
    setPasswordTwo,
    onSubmit,
    isAdmin,
    isInvalid
  } = props

  return (
    <form onSubmit={onSubmit}>
      <input
        name="username"
        value={user}
        onChange={e => setUser(e.target.value)}
        type="text"
        placeholder="Full Name"
      />
      <input
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={e => setPasswordOne(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={e => setPasswordTwo(e.target.value)}
        type="password"
        placeholder="Confirm Password"
      />
      <label>
        Admin:
        <input name="isAdmin" type="checkbox" checked={isAdmin} />
      </label>
      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>
    </form>
  )
}

export default Form
