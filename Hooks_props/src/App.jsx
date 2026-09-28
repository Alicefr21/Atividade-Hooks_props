import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      titulo: 'Quarta Asa',
      concluida: false
    },
    {
      id: 2,
      titulo: 'A Biblioteca da Meia-Noite',
      concluida: true
    },
    {
      id: 3,
      titulo: 'O Conto da Aia',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Harry Potter e a Pedra Filosofal',
      concluida: true
    }
  ])

  const marcarComoLido = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, concluida: !task.concluida }
          : task
      )
    )
  }

  const excluirLivro = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    )
  }

  return (
    <div>
      <Header />

      <TaskList
        tasks={tasks}
        marcarComoLido={marcarComoLido}
        excluirLivro={excluirLivro}
      />

      <TaskSummary tasks={tasks} />
    </div>
  )
}

export default App