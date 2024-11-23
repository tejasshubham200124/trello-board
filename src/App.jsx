import React, { useState } from 'react'
import TrelloBoard from './TrelloBoard'
import { task } from './Task'
function App() {

  const [tasks, setTasks] = useState(task)

  const handleAddNewtasks = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const updatedTaskStatus = (taskId, newStatus) => {
    const updatedTask = tasks.map((t) => {
      return t.id === taskId ? { ...t, status: newStatus } : t
    })
    console.log(updatedTask)
    setTasks(updatedTask)
  }

  return (
    <div>
      <TrelloBoard task={tasks} onAddNewTask={handleAddNewtasks} onUpdateTask={updatedTaskStatus} />
    </div>
  )
}

export default App