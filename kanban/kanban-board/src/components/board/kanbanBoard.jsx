import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";


function KanbanBoard() {
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    review: [],
    done: [],
  });

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = { id: Date.now().toString(), content: newTask };
    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, task],
    }));
    setNewTask("");
  };

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        if (source.droppableId === destination.droppableId){
            const column = [...tasks[source.droppableId]];
            const [moved] = column.splice(source.index, 1);
            column.splice(destination.index, 0, moved);

            setTasks((prev) =>({
                ...prev,
                [source.droppableId]: column,
            }));
        } else {
            const startCol = [...tasks[source.droppableId]];
            const finishCol = [...tasks[destination.droppableId]];
            const [moved] = startCol.splice(source.index, 1);
            finishCol.splice(destination.index, 0, moved);

            setTasks((prev) => ({
                ...prev,
                [source.droppableId]: startCol,
                [destination.droppableId]: finishCol,
        }));
    }
};
    const columns = [
        { id: "todo", title: "A Fazer"},
        { id: "doing", title: "Em Progresso" },
        { id: "review", title: "Em Revisão" },
        { id: "done", title: "Concluído" },
    ];

  return (
    <div className="App">
        <h1>Kanban Board 🗂️</h1>

        <div className='add-task'>
            <input type="text" className='form-control ' placeholder='Nova tarefa...' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick={addTask} className='btn btn-secondary mt-2' style={{boxShadow: "2px 2px 3px black"}}>Adicionar</button>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
        <div className="d-flex board mt-4 mr-2">
          {columns.map((col) => (
            <Droppable droppableId={col.id} key={col.id}>
              {(provided) => (
                <div
                  className="column bg-dark"
                  style={{color:"whitesmoke", width:"30vw", height:"10vw", border:"solid 2px DeepSkyBlue", marginLeft: "5px"}}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h4 style={{color:"whitesmoke" }}>{col.title}</h4>
                  {tasks[col.id].map((task, index) => (
                    <Draggable
                      draggableId={task.id}
                      index={index}
                      key={task.id}
                    >
                      {(provided) => (
                        <div
                          className="task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
export default KanbanBoard;