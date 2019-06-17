import React, { useState, useContext, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import GetTasks from '../components/Tasks/GetTasks'
import InviteGenerator from '../components/Invites/InviteGenerator'
import { FirebaseContext } from '../firebase'
import ProfilePhoto from '../components/Groups/GroupAvatars'
// import IMAGE1 from '../assets/group-page/png/IMAGE.png'
// import IMAGE2 from '../assets/group-page/png/IMAGE-1.png'
// import IMAGE3 from '../assets/group-page/png/IMAGE-2.png'
// import IMAGE4 from '../assets/group-page/png/IMAGE-3.png'
// import Modal from '@material-ui/core/Modal';
// import Date from '../components/Tasks/Date'



const Group = ({ match }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(match)
  const { firebase } = useContext(FirebaseContext)
  const [groupName, setGroupName] = useState('')
  const [members, setMembers] = useState([])
  const [groupAdmin, setGroupAdmin] = useState('placeholder')

  // const [selectedDate, handleDateChange] = useState(new Date());
// console.log(firebase)
  console.log("GroupId:", match.params.groupId) 

  const groupRef = firebase.firestore
    .collection(`users/${user.uid}/groups`)
    .doc(match.params.groupId)
    
  const guestGroupRef = firebase.firestore
    .collection(`users/${user.uid}/guestGroups`)
    .doc(match.params.groupId)

  const membersRef = firebase.firestore
  .collection(`users/${user.uid}/groups/${match.params.groupId}/members`)
  
  // const groupAdminPromise = guestGroupRef.get().then(doc =>  doc.data().groupAdmin)
  // var groupAdmin = groupAdminPromise.then(doc => doc)
  console.log(groupAdmin)
  
  const guestsRef = firebase.firestore
  .collection(`users/${groupAdmin}/groups/${match.params.groupId}/members`)
  
  // useEffect(() => {
  //   guestGroupRef.get().then(doc => {
  //     if doc.data()
  //   }
  //     )
  //   })
  //           groupRef.get().then(doc => {
  //             if (doc.data()) { setGroupName(doc.data().groupName) }
  //           }
  //           )

  var allMembers = [];
  useEffect(() => {
    membersRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        allMembers.push(doc.data())
        console.log("1:", allMembers)
      })
    })

    guestsRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.data())
        allMembers.push(doc.data())
        console.log("firing")
        console.log(groupAdmin)
        console.log("2:", allMembers)
        setMembers(allMembers)
      })
    })
      console.log(allMembers)
    }, [groupAdmin])

    // useEffect(() => {
    //   setMembers(allMembers)
    // }, [groupAdmin])

  useEffect(() => {
    groupRef.get().then(doc => {
      if (doc.data()) { setGroupName(doc.data().groupName) }
    }
    )

    guestGroupRef.get().then(doc => {
      if (doc.data()) { 
        setGroupName(doc.data().groupName)
        setGroupAdmin(doc.data().groupAdmin)
      }
    }
    )

  }, [groupName, groupRef])


  return (
    <div className="Dashboard">
      <div className="topHeaderAndButtons">
        <h1 className="groupsHeader">{groupName}</h1>
        <div className="imageButtons">
          <Link to={`/groups/${match.params.groupId}/add-task`}>
            <button className="threeButtonsOne waves-effect waves-light btn-large pink accent-3 hvr-shutter-out-vertical">
              <span className="material-icons iconLinks iconOne">
                access_time
              </span>
              <span className="iconLinks">NewTask</span>
            </button>
          </Link>

          <Link to={`/dashboard`}>
            <button className="threeButtonsOne waves-effect waves-light btn-large pink accent-3 hvr-shutter-out-vertical">
              <span className="material-icons iconLinks iconOne">
                dashboard
              </span>
              <span className="iconLinks">Dashboard</span>
            </button>
          </Link>

        </div>
        </div>

    <div className="bottomTableAndUsers">
      <div className="bottomLeftView">
        <GetTasks groupId={match.params.groupId} groupName={groupName} />
      </div>
      <div className="rightBottomView">

        <div>
          <h2 className="houseText">House Members</h2>
        </div>

          <div className="membersCardsView">
            {members.map(member => (
              <div className="invitedMembers">
                  <ProfilePhoto photoURL={member.profilePicture}/>
                </div>
            ))}
          </div>

          <div className="buttomInviteButton">
            <span>
              {/* <button className="waves-effect waves-light btn-large pink accent-3">Invite Member</button> */}
              <InviteGenerator
                groupId={match.params.groupId}
                userId={user.uid}
                groupName={groupName}
              />
            </span>
          </div>

{/* <Date/> */}
        </div>
      </div>
    </div>
  )
}

export default withRouter(Group)
