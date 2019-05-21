import React, { useContext } from 'react'
import TasksContext from './context'

const AddTask = () => {
  const { state, dispatch } = useContext(TasksContext)
  console.log(state, dispatch)
  return <div />
}

export default AddTask
