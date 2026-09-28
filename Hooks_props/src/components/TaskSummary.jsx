import './TaskSummary.css'

const TaskSummary = ({ tasks }) => {
  const total = tasks.length

  const lidos = tasks.filter(
    (task) => task.concluida
  ).length

  const naoLidos = tasks.filter(
    (task) => !task.concluida
  ).length

  return (
    <div className="task-summary">
      <h2>Resumo da Biblioteca</h2>

      <p>Total de livros: {total}</p>
      <p className='lido'>Livros lidos: {lidos}</p>
      <p className='Naolido'>Livros não lidos: {naoLidos}</p>
    </div>
  )
}

export default TaskSummary