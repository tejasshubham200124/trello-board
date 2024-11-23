import React from 'react'
import Header from './components/Header';
import Board from './components/Board';

function TrelloBoard({ task , onAddNewTask , onUpdateTask}) {

    return (
        <div >
            <div className="header">
                <Header addTask={onAddNewTask}  />
                <Board task={task} updateTask={onUpdateTask} />
            </div>
        </div>
    )
}

export default TrelloBoard