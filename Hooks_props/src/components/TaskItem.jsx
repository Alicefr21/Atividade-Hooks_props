import './TaskItem.css'

const TaskItem = ({
  id,
  titulo,
  concluida,
  marcarComoLido,
  excluirLivro
}) => {
  return (
    <li className="task-item">
      <h3>{titulo}</h3>

      <p>
        Status: {concluida ? 'Lido' : 'Não lido'}
      </p>

      <button onClick={() => marcarComoLido(id)} className='button-lido'>
        {concluida ? 'Marcar como não lido' : 'Marcar como lido'}
      </button>

      <button onClick={() => excluirLivro(id)} className='button-excluir'>
        Excluir
      </button>
    </li>
  )
}

export default TaskItem