import React, { useContext, useReducer } from 'react'
import TasksContext from './context'
import reducer from './reducer'
import { Tasks } from './Tasks'

const TasksStore = () => {
  const initialState = useContext(TasksContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      <Tasks />
    </TasksContext.Provider>
  )
}

export default TasksStore
