import React, { useContext, useReducer } from 'react'
import TasksContext from './context'
import reducer from './reducer'
import { Tasks } from './Tasks'
import AddTask from './AddTask'

const TasksStore = () => {
  const initialState = useContext(TasksContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      <AddTask />

      <hr />

      <Tasks />
    </TasksContext.Provider>
  )
}

export default TasksStore
