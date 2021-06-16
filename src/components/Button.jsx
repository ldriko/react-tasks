import PropTypes from 'prop-types'

const Button = ({ color, text, size, onClick }) => {
  let className = 'btn'

  if (color) className += ` btn-${color}`
  if (size) className += ` btn-${size}`

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
