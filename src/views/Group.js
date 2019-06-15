import React, { useState, useContext, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import GetTasks from '../components/Tasks/GetTasks'
import InviteGenerator from '../components/Invites/InviteGenerator'
import { FirebaseContext } from '../firebase'
import ProfilePhoto from '../components/Groups/GroupAvatars'
// import IMAGE1 from '../assets/group-page/png/IMAGE.png'
import IMAGE2 from '../assets/group-page/png/IMAGE-1.png'
import IMAGE3 from '../assets/group-page/png/IMAGE-2.png'
import IMAGE4 from '../assets/group-page/png/IMAGE-3.png'
// import Modal from '@material-ui/core/Modal';
// import Date from '../components/Tasks/Date'



const Group = ({ match }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const { firebase } = useContext(FirebaseContext)
  const [groupName, setGroupName] = useState('')
  // const [selectedDate, handleDateChange] = useState(new Date());
// console.log(firebase)

  const groupRef = firebase.firestore
    .collection(`users/${user.uid}/groups`)
    .doc(match.params.groupId)

  const membersRef = firebase.firestore
    .collection(`users/${user.uid}/groups/${match.params.groupId}/members`)
    
    membersRef
    .onSnapshot(snap => 
      snap.docs.map(member => console.log(member.data())))
      // console.log("Snap:", snap.docs[0].data())

    // console.log(membersRef.get().then(cod => console.log(cod)))
    // console.log(membersRef)
    
  useEffect(() => {
    groupRef.get().then(doc => setGroupName(doc.data().groupName))
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
        {membersRef.onSnapshot(snap =>
          snap.docs.map(member => {
            console.log(member.data().displayName)
            <h1>{member.data().displayName}</<h1>
          }))
        }
{/* Work on this for the Avatars, need to map the members */}
          <div className="membersCardsView">
            <div>
              <div className="invitedMembers">
                <ProfilePhoto/>
              </div>
              <div className="invitedMembers">      
              <img src={IMAGE2} alt="a users profile" />       
                {/* <ProfilePhoto/> */}
              </div>
            </div>
            <div>
              <div className="invitedMembers">
              <img src={IMAGE3} alt="a users profile" />
                {/* <ProfilePhoto/>                */}
              </div>
              <div className="invitedMembers">
              <img src={IMAGE4} alt="a users profile" />
                {/* <ProfilePhoto/>                */}
              </div>
            </div>
          </div>

          <div className="buttomInviteButton">
            <span>
              {/* <button className="waves-effect waves-light btn-large pink accent-3">Invite Member</button> */}
              <InviteGenerator
                groupId={match.params.groupId}
                userId={user.uid}
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
