import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../firebase/index'
import GroupCard from './GroupCard'
import uuidv4 from 'uuid'

const GetGroups = () => {
  const { firebase } = useContext(FirebaseContext)
  const [groups, setGroups] = useState([])
  const id = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).uid : 'placeholder'
  console.log("ID:", id)
  useEffect(() => {
    const unsubscribe = firebase.firestore
      .collection(`users/${id}/groups`)
      .onSnapshot(snapshot =>
        setGroups(
          snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
          })
        )
      )
      return () => {
        unsubscribe()
      }
    }, [firebase.firestore, id])
    useEffect(() => {

      firebase.firestore
      .collection(`users/${id}/guestGroups`)
      .onSnapshot(snapshot =>
          snapshot.docs.map(doc => {
            setGroups([...groups, doc.data()])
          })
        )
      }
      )
          
  console.log(groups)

  return groups.map(group => (
    <GroupCard key={uuidv4()} groupName={group.groupName} id={group.id} />
  ))
}

export default GetGroups
