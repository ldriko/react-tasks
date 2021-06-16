import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) return alert('Please input a task!')

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group mb-2">
        <label>Task</label>
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-group mb-2">
        <label>Day</label>
        <input
          type="text"
          className="form-control"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-check mb-2">
        <input
          id="reminder"
          type="checkbox"
          className="form-check-input"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <label className="form-check-label" htmlFor="reminder">
          Reminder
        </label>
      </div>
      <button className="btn btn-blue" type="submit">
        Submit
      </button>
    </form>
  )
}

export default AddTask
