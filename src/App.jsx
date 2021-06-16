import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([])

  const [showAdd, setShowAdd] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks()

      setTasks(tasks)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const removeTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const task = await fetchTask(id)
    const updatedTask = { ...task, reminder: !task.reminder }

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })

    const data = await response.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await response.json()

    setTasks([...tasks, data])

    // Static insertion
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <Header
        title="Tasks"
        showAdd={showAdd}
        onShowAdd={() => setShowAdd(!showAdd)}
      />

      <div className="container mt-3">
        {showAdd ? (
          <div className="row mb-4">
            <div className="col-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <AddTask onAdd={addTask}></AddTask>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}

        <h6>Double click to set a reminder!</h6>
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onRemove={removeTask}
            onToggle={toggleReminder}
          ></Tasks>
        ) : (
          'Nothing'
        )}
      </div>
    </div>
  )
}

export default App
