import Task from './Task'

const Tasks = ({ tasks, onRemove, onToggle }) => {
  return (
    <>
      <div className="row">
        {tasks.map((task) => (
          <div key={task.id} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
            <Task task={task} onRemove={onRemove} onToggle={onToggle}></Task>
          </div>
        ))}
      </div>
    </>
  )
}

export default Tasks
