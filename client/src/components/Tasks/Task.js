import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import TasksContext from './context'
import axios from 'axios'
import contentEditable from './EditTask'

const Task = ({ title, createdAt, isComplete, description, id }) => {
  const EditP = contentEditable('p')
  const { dispatch } = useContext(TasksContext)
  return (
    <TaskContainer>
      <EditP value={title} />
      <p>{moment().calendar(createdAt)}</p>
      <EditP value={description} />
      <p>{isComplete ? `COMPLETE` : `NOT DONE`}</p>
      <button
        onClick={async () => {
          try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`)
            dispatch({ type: 'DELETE_TASK', id })
          } catch (error) {
            dispatch({ type: 'DELETE_TASK', id })
          }
        }}
      >
        DELETE
      </button>
    </TaskContainer>
  )
}

const TaskContainer = styled.div`
  border: 1px solid black;
  width: 25%;
  text-align: center;
  margin: 20px;
  padding: 10px;
  word-wrap: break-word;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.9);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export default Task
