import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../firebase/index'
import GroupCard from './GroupCard'
import uuidv4 from 'uuid'

const GetGroups = () => {
  // const { firebase } = useContext(FirebaseContext)
  // const [groups, setGroups] = useState([])
  // const id = JSON.parse(localStorage.getItem('user')).uid
  // useEffect(() => {
  //   const unsubscribe = firebase.firestore
  //     .collection(`users/${id}/groups`)
  //     .onSnapshot(snapshot =>
  //       setGroups(
  //         snapshot.docs.map(doc => {
  //           return { id: doc.id, ...doc.data() }
  //         })
  //       )
  //     )
  //   return () => {
  //     unsubscribe()
  //   }
  // }, [firebase.firestore, id])

  // return groups.map(group => (
  //   <GroupCard key={uuidv4()} groupName={group.groupName} id={group.id} />
  // ))
    return (
      <h1>Boatloads of groups over here!</h1>
    )
}

export default GetGroups
