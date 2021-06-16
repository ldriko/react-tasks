import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showAdd, onShowAdd }) => {
  return (
    <header className="navbar navbar-expand-lg border-bottom">
      <div className="container">
        <h4 className="navbar-brand my-auto">{title}</h4>
        <Button
          color={showAdd ? 'red' : 'blue'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onShowAdd}
        />
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Tasks',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
