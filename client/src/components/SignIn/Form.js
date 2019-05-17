import React from 'react'

const Form = ({ email, password, setEmail, setPassword, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
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
