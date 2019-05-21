import React from 'react'
import Task from './Task'
import Description from './Description'
import Date from './Date'
import Button from './Button'
import Checkbox from './Checkbox'

const Tasks = () => {
  return (
    <div>
      <Task />
      <Description />
      <Date />
      <Button />
      <Checkbox />
    </div>
  )
}

export default Tasks
