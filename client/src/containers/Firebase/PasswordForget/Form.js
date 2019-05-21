import React from 'react'

const Form = ({ email, onChange, onSubmit }) => {
  return (
    <div>
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
    </div>
  )
}

export default Form
