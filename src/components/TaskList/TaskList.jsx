import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem.jsx';
import './tasklist.css';
import plusIcon from '../../img/plus-icon.svg'

export default function TaskList({title, onAddTask, tasks, onTaskUpdate, onDeleteTask , taskState}){

    const addTask = () => {
        onAddTask('Nova Tarefa', taskState)
    }   

    return (
        <div className='tasklist'>
            <div className='title'>{title}</div>
            <div className="content">                
                {tasks.map((task) => {                    
                    return <TaskItem key={task.id} id={task.id} title={task.title} taskState={task.state}
                    onTaskUpdate={onTaskUpdate}
                    onDeleteTask={onDeleteTask}
                    />                    
                })}
                { tasks.length === 0 && <div className="empty-list">Lista Vazia</div> }
                <button className='btn' onClick={addTask}>
                    <img src={plusIcon} alt="plus" />
                    Adicionar Tarefa
                </button>
            </div>
        </div>
    )
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}