import React, { useState } from 'react'
import { FaArrowDown } from "react-icons/fa";
function Board({ task, updateTask }) {

    const [activeId, setactiveId] = useState()
    const [dragTaskId, setDragTaskId] = useState(null)
    const handleShowDetails = (id) => {
        setactiveId(id)
    }

    const handleStatusChange = (taskId, status) => {
        updateTask(taskId, status)
    }

    const handleDragStart = (e, taskId) => {
        setDragTaskId(taskId)
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop= (e, newStatus) => {
        updateTask(dragTaskId, newStatus)
    }

    return (
        <div className='board'>
            <div className="pending-section"
            onDrop={(e) => handleDrop(e, 'pending')}
            onDragOver={handleDragOver}
            >
                {
                    task.filter((item) => {
                        return item.status === "pending"
                    }).map((task, i) => {
                        return <div className='content' key={i}
                            draggable
                            onDragStart={(e) => handleDragStart(e, task.id)
                            }>
                            <div className='details'>
                                <span>{task.name}</span>
                                <span><FaArrowDown onClick={() => handleShowDetails(task.id)} /></span>
                            </div>
                            {
                                activeId === task.id ? (
                                    <div className='additional-details'>
                                        <span>{task.description}</span>
                                        <div className='changeStatus'>
                                            <button>{task.status}</button>
                                            <p>change status to</p>
                                            <button onClick={() => handleStatusChange(task.id, 'in-progress')}>in-progress</button>
                                            <button onClick={() => handleStatusChange(task.id, 'completed')}>completed</button>
                                        </div>
                                        <span>
                                            {task.assignedTo.map((employee) => {
                                                return <span>{employee.name}</span>

                                            })}
                                        </span>
                                    </div>
                                ) : null
                            }
                        </div>
                    })
                }
            </div>
            <div className="inProgress-section"
                onDrop={(e) => handleDrop(e, 'in-progress')}
                onDragOver={handleDragOver}
            >
                {
                    task.filter((item) => {
                        return item.status === "in-progress"
                    }).map((task, i) => {
                        return <div className='content' key={i}
                            draggable
                            onDragStart={(e) => handleDragStart(e, task.id)}
                        >
                            <div className='details'>
                                <span>{task.name}</span>
                                <span><FaArrowDown onClick={() => handleShowDetails(task.id)} /></span>
                            </div>
                            {
                                activeId === task.id ? (
                                    <div className='additional-details'>
                                        <span>{task.description}</span>
                                        <div className='changeStatus'>
                                            <button>{task.status}</button>
                                            <p>change status to</p>
                                            <button onClick={() => handleStatusChange(task.id, 'pending')}>pending</button>
                                            <button onClick={() => handleStatusChange(task.id, 'completed')}>completed</button>
                                        </div>
                                        <span>
                                            {task.assignedTo.map((employee) => {
                                                return <span>{employee.name}</span>

                                            })}
                                        </span>
                                    </div>
                                ) : null
                            }

                        </div>
                    })
                }
            </div>
            <div className="completed-section" 
             onDrop={(e) => handleDrop(e, 'completed')}
             onDragOver={handleDragOver}
            >
                {
                    task.filter((item) => {
                        return item.status === "completed"
                    }).map((task, i) => {
                        return <div className='content' key={i}
                        draggable
                        onDragStart={(e) => handleDragStart(e, task.id)}
                        >
                            <div className='details'>
                                <span>{task.name}</span>
                                <span><FaArrowDown onClick={() => handleShowDetails(task.id)} /></span>
                            </div>
                            {
                                activeId === task.id ? (
                                    <div className='additional-details'>
                                        <span>{task.description}</span>
                                        <div className='changeStatus'>
                                            <button>{task.status}</button>
                                            <p>change status to</p>
                                            <button onClick={() => handleStatusChange(task.id, 'pending')}>pending</button>
                                            <button onClick={() => handleStatusChange(task.id, 'in-progress')}>in-progress</button>
                                        </div>
                                        <span>
                                            {task.assignedTo.map((employee) => {
                                                return <span>{employee.name}</span>
                                            })}
                                        </span>
                                    </div>
                                ) : null
                            }
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default Board