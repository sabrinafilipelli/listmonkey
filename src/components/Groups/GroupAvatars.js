import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
    avatar: {
      margin: 10
    },
    bigAvatar: {
      // margin: '2rem',
      width: '10vw',
      height: '10vw',
      margin: '1.3rem'
    }
  })
  
  function ProfilePhoto(props) {
    const classes = useStyles()

    console.log("P:", props)
  
    return (
      <Avatar
        alt="photo of user"
        src={props.photoURL}
        className={classes.bigAvatar}
      />
    )
  }
  
  export default ProfilePhoto
  