import React, { useState, useEffect } from 'react'
import Task from './Task'
import axios from 'axios'

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    async function getTasks() {
      const res = await axios.get('https://chore-monkey.herokuapp.com/api/tasks')
      setTasks(res.data.data)
    }
    getTasks()
  }, [])
  
  return (
    <div>
    {tasks.map(task => <Task {...task} key={task.id}/>)}
    </div>
  )
}

export default Tasks
