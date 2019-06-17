import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../firebase/index'

export default function InviteGenerator({ groupName, groupId, userId, history }) {
  const [email, setEmail] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const { firebase } = useContext(FirebaseContext)

  console.log(groupName)
  console.log(groupId)
  console.log(userId)
  console.log(email)


  const toggleForm = () => {
    setShowForm(prevState => !prevState)
    setError(null)
    setSuccess(null)
  }

  const sendInvite = async e => {
    e.preventDefault()
    try {
      await firebase.sendEmailInvite(email, groupId, userId, groupName)
      setSuccess('The invite has been sent.')
      window.localStorage.setItem('emailForSignIn', JSON.stringify(email))
    } catch (err) {
      setError('Please enter a valid email address.')
      console.log({ code: err.code, msg: err.message })
    }
  }

  return !showForm ? (
    <button
      className="threeButtonsOne waves-effect waves-light btn-large pink accent-3 hvr-shutter-out-vertical invite"
      onClick={toggleForm}
    >
      Invite
    </button>
  ) : (
    <form>
      <input
        type="email"
        placeholder="Enter the email for the user you wish to invite"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <div className="middleEditModal">
        <div className="inviteButtonSpace">
          <button
            className="threeButtonsOne waves-effect waves-light btn-large pink accent-3 hvr-shutter-out-vertical send "
            type="submit"
            onClick={sendInvite}
          >
            Send
          </button>
        </div>
        <div className="inviteButtonSpace">
          <button
            className="threeButtonsOne waves-effect waves-light btn-large pink accent-3 hvr-shutter-out-vertical cancel"
            onClick={toggleForm}
          >
            Cancel
          </button>
        </div>
      </div>
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
    </form>
  )
}
