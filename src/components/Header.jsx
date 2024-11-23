import React, { useState } from 'react'
import Select from 'react-select'

function Header({ addTask }) {

    const options = [
        { value: 'shubham', label: 'shubham' },
        { value: 'meera', label: 'meera' },
        { value: 'kajal', label: 'kajal' },
        { value: 'zil', label: 'zil' },
        { value: 'vishal', label: 'vishal' },
        { value: 'dhaval', label: 'dhaval' },
        { value: 'ravi', label: 'ravi' }
    ]

    const [title, setTitle] = useState('')
    const [description, setDiscription] = useState('')
    const [selectedStatus, setSelectedStatus] = useState(null)
    const [selectedEmployees, setSelectedEmployees] = useState('')

    const statusChange = (status) => {
        setSelectedStatus(status)
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        if (!title || !selectedStatus || !selectedEmployees) return

        const newData = {
            id: Date.now(),
            name: title,
            description: description,
            status: selectedStatus,
            assignedTo: [
                {
                    id: Date.now(),
                    name: selectedEmployees
                }
            ]
        }
        // console.log('header-newdata' ,newData)

        addTask(newData)

        setTitle('');
        setDiscription('')
        setSelectedStatus('');
        setSelectedEmployees('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='trello-header'>
                <div className='input-section'>
                    <span>Please enter your task : </span>
                    <input type='text' placeholder='your text here' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='input-section'>
                    <span>Please enter your task  description: </span>
                    <input type='text' placeholder='your text here' value={description} onChange={(e) => setDiscription(e.target.value)} />
                </div>
                <div className='trello-buttons' >
                    <button onClick={() => statusChange('pending')}>pending</button>
                    <button onClick={() => statusChange('in-progress')}>in-progress</button>
                    <button onClick={() => statusChange('completed')}>completed</button>
                </div>
                <div className='employee-section'>
                    <span>select employees</span>
                    <Select options={options} onChange={(selectedOptions) => setSelectedEmployees(selectedOptions.value)} />
                </div>
            </div>
            <button type='submit'>submit</button>
        </form>

    )
}

export default Header