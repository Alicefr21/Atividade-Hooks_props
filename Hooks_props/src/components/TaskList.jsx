import TaskItem from './TaskItem'

const TaskList = ({ tasks, marcarComoLido, excluirLivro }) => {
  return (
    <div>
      <h2>Minha Biblioteca</h2>

      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            titulo={task.titulo}
            concluida={task.concluida}
            marcarComoLido={marcarComoLido}
            excluirLivro={excluirLivro}
          />
        ))}
      </ul>
    </div>
  )
}

export default TaskList