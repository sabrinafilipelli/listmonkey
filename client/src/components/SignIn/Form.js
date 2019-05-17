import React from 'react'

const Form = ({ email, password, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={password === '' || email === ''} type="submit">
        Sign In
      </button>
    </form>
  )
}

export default Form
