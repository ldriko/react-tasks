import Button from './Button'
import { FaClock } from 'react-icons/fa'

const Task = ({ task, onRemove, onToggle }) => {
  return (
    <div className="task-card card" onDoubleClick={() => onToggle(task.id)}>
      <div className="card-body">
        <h5 className="d-flex">
          {task.text}
          {task.reminder ? (
            <span className="badge rounded-pill bg-warning ms-auto">
              Reminder
            </span>
          ) : (
            ''
          )}
        </h5>
        <p>
          <FaClock></FaClock> {task.day}
        </p>
        <Button
          color="red"
          text="Remove"
          size="sm"
          onClick={() => onRemove(task.id)}
        ></Button>
      </div>
    </div>
  )
}

export default Task
