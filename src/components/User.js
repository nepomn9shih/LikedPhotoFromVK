import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p className="card bg-alert text-white text-center p-2 m-2">Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p className="card bg-warning text-center p-2 m-2">Загружаю...</p>
    }

    if (name) {
      return <p className="card bg-warning text-center p-2 m-2">Привет, {name}!</p>
    } else {
      return (
        <button className="btn btn-warning m-2" onClick={this.props.handleLogin}>
          Войти
        </button>
      )
    }
  }
  render() {
    return <div className="ib user">
    <div className="card bg-secondary ml-4 shadow">{this.renderTemplate()}</div>
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}