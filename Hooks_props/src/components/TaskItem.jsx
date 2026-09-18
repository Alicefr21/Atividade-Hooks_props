const TaskItem = ({
  id,
  titulo,
  concluida,
  marcarComoLido,
  excluirLivro
}) => {
  return (
    <li>
      <h3>{titulo}</h3>

      <p>
        Status: {concluida ? 'Lido' : 'Não lido'}
      </p>

      <button onClick={() => marcarComoLido(id)}>
        {concluida ? 'Marcar como não lido' : 'Marcar como lido'}
      </button>

      <button onClick={() => excluirLivro(id)}>
        Excluir
      </button>
    </li>
  )
}

export default TaskItem