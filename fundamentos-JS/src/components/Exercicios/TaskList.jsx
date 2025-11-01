import React from 'react'

const TaskList = ({tarefas}) => {
  return (
    <ul className='list-group w-50 mx-auto mt-3'>
        {tarefas.map((tarefa, index) =>(
            <li key={index} className='list-group-item text-center'>
               {tarefa} 
            </li>
        ))}
        <li></li>
    </ul>
  );
}

export default TaskList