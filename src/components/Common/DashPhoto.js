import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: '2rem',
    width: '10vw',
    height: '10vw'
  }
})

function DashPhoto() {
  const classes = useStyles()

  return (
    <Avatar
      alt="photo of user"
      // src={JSON.parse(localStorage.getItem('user')).photoURL}
      src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/BrooklynDeckerJun09.jpg/170px-BrooklynDeckerJun09.jpg"}
      className={classes.bigAvatar}
    />
  )
}

export default DashPhoto
